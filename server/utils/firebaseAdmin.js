require('dotenv').config()
const { initializeApp } = require('firebase-admin/app');
const { getAuth } = require('firebase-admin/auth');
const { credential } = require('firebase-admin');

const serviceAccount = require('../serviceAccount.json');

initializeApp({
  credential: credential.cert(serviceAccount)
})

module.exports = { getAuth };