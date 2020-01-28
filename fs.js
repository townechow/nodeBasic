/*
文件读写模块 fs
*/
const fs = require('fs');
 fs.readFile('./README.MD',(err,data)=>{
     if(err){
         console.log("err=",err);
         throw err
     } else{
         console.log("data==",data);
         
     }
 });
 fs.writeFile(
     './README.MD',
     '写入的内容',
     {flag:'a'}, //追加写入
     (err)=>{
         if(err){
             throw err
        }});