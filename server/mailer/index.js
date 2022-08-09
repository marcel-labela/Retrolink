const mailconfig = require('./config');

module.exports = {
  async sendEmailVerificationMail() {
    const htmlToSend = template({
      message: "Hello!"
    })

    const mailOptions = {
      from: "myemail@example.com",
      to: "fleuren.marcel@gmail.com",
      subject: "Testing the mail account",
      html: htmlToSend
    }

    // Schrijf dit in een try catch statement
    // om dit af te ronden moet je blijkbaar een mailaccount hebben en een domein.
    mailconfig.smtpTransport.sendMail(mailOptions, function(error, response) {
      if (error) {
        console.log(error)
      } else {
        console.log("Successfully sent email.")
      }
    })

  }
}

