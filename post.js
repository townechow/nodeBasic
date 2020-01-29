/* 
post 请求
post 
 */

 const HTTP = require('http');

 HTTP.createServer((req,res)=>{
     console.log("服务启动在 30001 端口");
     let result = [];
     req.on('data',(buffer)=>{  //post请求分段接收数据，接收一次数据执行一次data,回调函数的参数为二进制数据；
        result.push(buffer);
        console.log("buffer==",buffer);

     })
     req.on('end',()=>{
         let data = Buffer.concat(result); //
        console.log("result==",result);
        console.log("data==",data);
        console.log("data==",data.toString()); //如果是文件，图片等数据则没有toString()方法；




     })
     res.end("something")
     

 }).listen(3001)