const nodemailer = require("nodemailer")
const mg = require("nodemailer-mailgun-transport")
const handlebars = require("handlebars")
const fs = require("fs")
const path = require("path")

const emailTemplateSource = fs.readFileSync(path.join(__dirname, "/templates/template.hbs"), "utf8")

const mailgunAuth = {
  auth: {
    api_key: "661da1ca917da6821412164c21a53752-b2f5ed24-a34ba3b5",
    domain: "sandbox7c5be3d8a9504ff39da1cbc1cbc17eb9.mailgun.org"
  }
}

const smtpTransport = nodemailer.createTransport(mg(mailgunAuth))
const template = handlebars.compile(emailTemplateSource)

module.exports = {
  smtpTransport,
  template,
};
