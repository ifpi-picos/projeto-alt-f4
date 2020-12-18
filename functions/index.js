const functions = require('firebase-functions')
const nodemailer = require('nodemailer')
const cors = require('cors')({ origin: true })


const smtpTransport = mailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: false, //SSL/TLS
  auth: {
      user: 'horusmaptracking@gmail.com',
      pass: 'horus2020'
  }
})

exports.enviarEmail = functions.https.onRequest((req, res) => {
  cors(req, res, () => {
    const remetente = '"Radical Dreamers" <horusmaptracking@gmail.com>'

    const assunto = req.body['assunto']
    const destinatarios = req.body['destinatarios'] // lista de e-mails destinatarios separados por ,
    const corpo = req.body['corpo']
    const corpoHtml = req.body['corpoHtml']

    const email = {
      from: remetente,
      to: destinatarios,
      subject: assunto,
      text: corpo,
      html: corpoHtml
    }

    smtpTransport.sendMail(email, (error, info) => {
      if (error) {
        return console.log(error)
      }
      console.log('Mensagem %s enviada: %s', info.messageId, info.response)
    })
  })
})
