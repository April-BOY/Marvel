const express = require('express');
const Router = express.Router();
const axios = require('axios');
const utils = require('utility');

const app = express();
const privateKey = 'b97911ba2f62586d199e7edb75d1885fd3f4ee4d';
const publicKey = 'fca2d1a0f86099c3f43128d7d1c71fb5';
const hash = utils.md5(1+privateKey+publicKey);
app.get('/data',(req,res)=>{
    axios({
        method:'get',
        url:'http://gateway.marvel.com/v1/public/comics?ts=1&apikey=fca2d1a0f86099c3f43128d7d1c71fb5&'+hash
    }).then(res=>{
        console.log(res);
    });
});
// app.get('https://gateway.marvel.com:443/v1/public/characters?apikey=fca2d1a0f86099c3f43128d7d1c71fb5',(req,res)=>{
//     console.log(res);
// });
app.listen(8888);