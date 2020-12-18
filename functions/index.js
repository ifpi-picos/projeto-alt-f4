const functions = require('firebase-functions')
const admin = require('firebase-admin')
const nodemailer = require('nodemailer')
admin.initializeApp()

const transpoter = nodemailer.createTransport({
  host: 'smtp.sendgrid.net',
  port: 587,
  secure: false, // upgrade later with STARTTLS
  auth: {
    user: 'apikey',
    pass:
      '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'
  }
})

// transpoter
//   .sendMail({
//     from: user,
//     to: user,
//     subject: 'oi seja bemvindo',
//     Text: 'ola muito obrigado por usar nossa aplicação'
//   })
//   .then(info => {
//     Response.send(info)
//   }).catch

exports.sendEmail = functions.https.onRequest((request, response) => {
  const emailFrom = request.query.emailFrom
  const message = request.query.message

  const mailOptions = {
    from: 'Radical Dreamers <lucassky08@gmail.com>',
    to: 'lucassky08@gmail.com',
    subject: 'fomulario de submissao',
    hmtl: `${message}  From ${emailFrom}`
  }

  transpoter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(
        `ERROR: (email) ${emailFrom} --- (message) ${message} --- (error) ${error.toString()}`
      )
      response.send(error.toString())
    }
    response.send('Sua mensagem foi enviada com sucesso')
  })
})
