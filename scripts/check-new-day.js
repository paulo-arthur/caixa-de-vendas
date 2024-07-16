const { getJSON, writeJSON } = require('../scripts/get-json-data');
const { getTodayDate } = require('../scripts/get-datetime-info');

function checkNewDay() {
  let main_data = getJSON();

  if (main_data.last_day != getTodayDate()) {
    main_data.last_day = getTodayDate();
    main_data.history.unshift({
      "date": getTodayDate(),
      "data": [],
      "total": 0
    });
  };

  writeJSON(main_data);
}

module.exports = {checkNewDay};
