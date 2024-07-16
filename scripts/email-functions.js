const { getJSON } = require('../scripts/get-json-data');
const { getTodayDate } = require('../scripts/get-datetime-info');
const nodemailer = require('nodemailer');

function sendEmail() {
  let main_data = getJSON();
  let content_text = `
    <h1>Relatório do dia ${main_data.last_day}</h1>
    <h3>Foram realizadas um total de ${main_data.history[0].data.length} vendas.</h3>
    <h3>O total apurado foi de R$ ${main_data.history[0].total}.
    <h3>Segue a lista de vendas:</h3>
    `;

    for (let s = 0; s < main_data.history[0].data.length; s++) {
      content_text += '<hr />';
      for (let i = 0; i < main_data.history[0].data[s].itens.length; i++) {
        content_text += `
          <br>${main_data.history[0].data[s].itens[i]}
        `;
      }

      content_text += `
        <br><br>
        <b>Horário da venda: </b>${main_data.history[0].data[s].time}
        <br>
        <b>Valor da venda: </b>R$ ${main_data.history[0].data[s].value}
      `;
    }


    if (getTodayDate() != main_data.last_day) {
      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'casacampospesca@gmail.com',
          pass: 'ddwl vyqw lqjw wvem'
        }
      });

      var mailOptions = {
        from: 'casacampospesca@gmail.com',
        to: ['pauloart.hur670@gmail.com', 'casacampos1@yahoo.com.br'],
        subject: `Relatório dia ${main_data.last_day}`,
        html: content_text
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    }
};

module.exports = {sendEmail};
