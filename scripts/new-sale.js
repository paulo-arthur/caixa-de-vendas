const { checkNumber, checkString }  = require('./scripts/checkFunctions');
const { getJSON, writeJSON } = require('./scripts/get-json-data');
const { getNowTime } = require('./scripts/get-datetime-info');

let delete_btn = document.getElementById("delete");
let register_btn = document.getElementById("register");

delete_btn.addEventListener("click", () => {
  window.location.href = "index.html";
})

register_btn.addEventListener("click", () => {
  let time = getNowTime();

  let sale = document.getElementById("summary").value;
  let total_value = document.getElementById("value-input").value;

  sale = checkString(sale);
  total_value = checkNumber(total_value);

  let IS_FIELDS_OK = [false, false];

  if (!sale[1]) {
    document.getElementById("summary").style.border = "solid 2px red";
  } else {
    document.getElementById("summary").style.border = "none";
    IS_FIELDS_OK[0] = true;
  }
  if (!total_value[1]) {
    document.getElementById("value-input").style.border = "solid 2px red";
  } else {
    document.getElementById("value-input").style.border = "none";
    IS_FIELDS_OK[1] = true;
  };

  if (IS_FIELDS_OK[0] && IS_FIELDS_OK[1]) {
    main_data = getJSON();
    main_data.history[0].data.unshift(
      {
        "itens": sale[0],
        "time": time,
        "value": total_value[0],
      });
    writeJSON(main_data);
    document.location.href = "index.html";
  }
})
