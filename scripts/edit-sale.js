const { checkNumber, checkString }  = require('./scripts/checkFunctions');
const { getJSON, writeJSON } = require('./scripts/get-json-data');

let s = window.location.href.split("=")[1];

let delete_btn = document.getElementById("delete");
let edit_btn = document.getElementById("register");

let main_data = getJSON();
let today_data = main_data.history[0];

const time = today_data.data[s].time

let edit_sale = document.getElementById("edit-summary");
edit_sale.value = today_data.data[s].itens.join("\n");

let edit_value = document.getElementById("edit-value-input");
edit_value.value = today_data.data[s].value;

edit_btn.addEventListener("click", () => {
  let IS_FIELDS_OK = [false, false];
  let sale = checkString(edit_sale.value);
  let total_value = checkNumber(edit_value.value);

  if (!sale[1]) {
    document.getElementById("edit-summary").style.border = "solid 2px red";
  } else {
    document.getElementById("edit-summary").style.border = "none";
    IS_FIELDS_OK[0] = true;
  }
  if (!total_value[1]) {
    document.getElementById("edit-value-input").style.border = "solid 2px red";
  } else {
    document.getElementById("edit-value-input").style.border = "none";
    IS_FIELDS_OK[1] = true;
  };

  if (IS_FIELDS_OK[0] && IS_FIELDS_OK[1]) {
    today_data.data[s] = {
        "itens": sale[0],
        "time": time,
        "value": total_value[0],
      };
    writeJSON(main_data);
    document.location.href = "index.html";
  }
});

delete_btn.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja deletar a venda?")) {
    main_data.history[0].data.splice(s, 1);
    writeJSON(main_data);
    window.location.href = "index.html";
  }
});
