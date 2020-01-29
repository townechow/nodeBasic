/**
 * 
 * http 模块 服务器对象
 */

const http = require('http');
const fs = require("fs");

http.createServer((req,res)=>{ //启动一个服务
    // console.log("req==",req);
    let url = req.url; // 请求的url
    console.log("url==",url);
    
    fs.readFile(`./${url}`,(err,data)=>{ // 根据访问的URL去读取对应的文件件，并将其返回
        if(err){
            res.writeHead(404);
            res.end('404 not found');
        }else{
            // res.write(data);
            res.end(data);
        }
    })
    // console.log("res==",res);
    // res.write("res.write=="+ res.toString)
    // res.end(); //如果最后不调用该方法的话，浏览器会一直处于加载中的状态；
}).listen(3001);