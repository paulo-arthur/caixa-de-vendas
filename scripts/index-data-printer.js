const { getJSON } = require('./scripts/get-json-data');

let main_data = getJSON();
let today_data = main_data.history[0];

let today_list_element = document.getElementById("today-list");

for (let s = 0; s < today_data.data.length; s++) {
  let ul = document.createElement("ul");
  for (let i = 0; i < today_data.data[s].itens.length; i++) {
    let li = document.createElement("li");
    li.appendChild(document.createTextNode(today_data.data[s].itens[i]));
    ul.appendChild(li);
  }

  ul.appendChild(document.createElement("br"));

  let time_li = document.createElement("li");
  time_li.appendChild(document.createTextNode("Horário: " + today_data.data[s].time));
  time_li.style.fontWeight = "900";
  ul.appendChild(time_li);

  let value_li = document.createElement("li");
  value_li.appendChild(document.createTextNode("Total: R$ " + today_data.data[s].value));
  value_li.style.fontWeight = "900";
  ul.appendChild(value_li);

  today_list_element.appendChild(ul);

  ul.appendChild(document.createElement("br"));
  let edit_btn = document.createElement("button");
  edit_btn.innerText = "Editar";
  edit_btn.id = "edit-btn";
  edit_btn.addEventListener("click", () => {
    console.log(s);
    window.location.href = "edit.html?index=" + s.toString();
  });
  ul.appendChild(edit_btn);
}

/*const li = document.createElement("li");
li.appendChild(document.createTextNode("foo"));
today_list.appendChild(li);*/
