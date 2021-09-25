'use strict';
const express = require('express');
const router = express.Router();

router.route('/')
  .get((req, res) => {
    // GETリクエストに対する処理を記述
    // ...
  })
  .post((req, res) => {
    //POSTリクエストに対する処理を記述
  })

module.exports = router