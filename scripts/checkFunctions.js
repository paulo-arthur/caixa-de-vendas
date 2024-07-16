const { capitalize } = require('../scripts/get-json-data');

function checkString(str) {
  if (str.length == 0) {
    return [str, false];
  } else {
    str = str.split(/\n/);
    for (let w = 0; w < str.length; w++) {
      str[w] = capitalize(str[w]);
    }
    return [str, true];
  }
};

function checkNumber(nmr) {
  let ok_nmr = '';
  let is_nmr_valid = true;

  for (let i = 0; i < nmr.length; i++) {
      if (nmr[i] == '.' || nmr[i] == ',') {
          ok_nmr += '.';
      } else if (parseFloat(nmr[i]).toString() == nmr[i]){
       ok_nmr += nmr[i];
     } else {
       is_nmr_valid = false;
     }
  }

  return [parseFloat(ok_nmr), is_nmr_valid];
};

module.exports = { checkNumber, checkString };
