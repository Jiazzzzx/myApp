//导入express
const express = require('express');
const app = express();
const fs = require('fs');
const cors = require('cors');
const path = require('path');
const config = require('./config/index');
const bodyParser = require('body-parser');

//解决跨域
app.use(cors());

//处理POST请求body
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//配置接口
app.get('/fist', (req, res) => {
    res.end('张');
});

app.get('/last', (req, res) => {
    res.end('三三');
});
app.get('/list', (req, res) => {
    if (req.query) {
        let num = Number(req.query.num);
        let file = path.join(__dirname, 'file/list.json');
        //读取本地json文件
        fs.readFile(file, 'utf-8', (err, data) => {
            if (err) {
                res.end('文件读取失败');
            } else {
                let list = JSON.parse(data);
                let json = [];
                for (let i = 0; i < num; i++) {
                    json.push(list[i]);
                }
                res.send({data: json});
            }
        })
    }
});

app.post('/form', (req, res) => {
    let body = req.body;
    console.log(body);
});

//监听
app.listen(config.port, config.host, () => {
    console.log(`服务器运行在 http://${config.host}:${config.port}...`)
});

module.exports = app;


