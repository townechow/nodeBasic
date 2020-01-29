/* 
http 原生的get post 方法；
get请求，数据放在请求头url中，请求头的最大限制为32；
post请求，数据放在请求体中，请求体的最大限制为2G；
get请求数据一次给，post请求数据分段给；
*/
 const HTTP = require('http');
 const URL = require('url'); // 用该模块处理请求的url;


 HTTP.createServer((req,res)=>{
    // res.setEncoding('utf8');
     console.log("服务启动在30001");
     res.write("恭喜，服务器启动成功！");
     res.write("req.url=="+req.url);
     console.log("req.url==",req.url);
     
     let {pathname,query} = URL.parse(req.url,true) //参数true，表示对url的字符串query，解析为对象query
    //  console.log(URL.parse(req.url));
    //  console.log(URL.parse(req.url,true));
     res.write("query.userName="+query.userName)
     res.end();
 }).listen(3001)