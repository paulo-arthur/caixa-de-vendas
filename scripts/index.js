const { getJSON, writeJSON } = require('./scripts/get-json-data');
const { checkNewDay } = require('./scripts/check-new-day');
const { sendEmail } = require('./scripts/email-functions');

sendEmail();
checkNewDay();

let main_data = getJSON();

let new_sale_btn = document.getElementById("sale");
new_sale_btn.addEventListener("click", registerNewSale);


 function registerNewSale() {
   window.location.href = "newsale.html";
 }

main_data.history[0].total = 0;
for (let s = 0; s < main_data.history[0].data.length; s++) {
  main_data.history[0].total += main_data.history[0].data[s].value;
}

// DESCOMENTAR PARA ATUALIZAR O VALOR TOTAL NO JSON
writeJSON(main_data);

let total_value_label = document.getElementById("total-label");
total_value_label.innerText = `Total: R$ ${main_data.history[0].total.toString()}`;

let week_list = document.getElementById("week-list");

for (let d = 1; d < 8; d++) {

  let d_text;

  try {
    d_text = `${main_data.history[d].date} - R$ ${main_data.history[d].total}`;
  } catch (e) {
    d_text = "";
  }

  let li = document.createElement("li");
  let box = document.createElement("div");

  let daily_value = document.createElement("h3");
  daily_value.innerText = d_text;

  box.appendChild(daily_value);

  li.appendChild(box);
  week_list.appendChild(li);
}
