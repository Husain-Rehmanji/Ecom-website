var express = require('express');
const { request } = require('../app');
var router=express.Router();
router.get("/", function(req, res, next){
    res.send("API is working properly, data is being fetched from port 9000");
});

module.exports=router;