/*
Download Video
Dhruv Darji-
dhruvdarji2408@gmail.com
*/

var express = require('express');
var router = express.Router();
var config = require('../config');

const fs = require('fs');
const ytdl = require('ytdl-core');

/* GET home page. */
router.get('/', function(req, res, next) {

  res.render('index', { title: config.title , config: config });

});

router.post('/', function(req, res, next) {

    ytdl.getInfo( req.body.url, function(err, info) {

      res.send(info);
      console.log(info);

    });

});

module.exports = router;
