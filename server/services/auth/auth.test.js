// const express = require('express');
// const request = require('supertest');
// const app = require('../../index');

// describe('Register user for new account', () => {
//   test('POST /auth/register', (done) => {
//     request(app)
//       .post('/auth/register')
//       .send({
//         "data": {
//           "email": "fleuren.marcel@gmail.com",
//           "password": "test",
//           "username": "MarcelTheKiller"
//         }
//       })
//       .expect(200)
//       .end((err, res) => {
//         console.log('err', err);
//         if (err) return done(err);
//         return done();
//       })
//   })
// })

// describe('Test if login works', () => {
//   test('POST /auth/login', (done) => {
//     request(app)
//       .post('/auth/login')
//       .send({
//         "data": {
//           "email": "fleuren.marcel@gmail.com",
//           "password": "test",
//         }
//       })
//       .expect(200)
//       .end((err, res) => {
//         if (err) return done(err);
//         return done();
//       })
//   })
// })

// describe('Check if emailaddress already exists', () => {
//   test('POST /auth/register', (done) => {
//     request(app)
//       .post('/auth/register')
//       .send({
//         "data": {
//           "email": "fleuren.marcel@gmail.com",
//           "password": "test",
//           "username": "MarcelTheKiller"
//         }
//       })
//       .expect(400)
//       .end((err, res) => {
//         if (err) return done(err);
//         return done();
//       })
//   })
// })

// describe('Check if username already exists', () => {
//   test('POST /auth/register', (done) => {
//     request(app)
//       .post('/auth/register')
//       .send({
//         "data": {
//           "email": "fleuren.marcel@gmail.com",
//           "password": "test",
//           "username": "MarcelTheKiller"
//         }
//       })
//       .expect(400)
//       .end((err, res) => {
//         if (err) return done(err);
//         return done();
//       })
//   })
// })