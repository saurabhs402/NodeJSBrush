const http=require('http');
const fs=require('fs');


const server=http.createServer();

server.on('request',function(req,res){
  let rs=fs.createReadStream('./Files/largeFile.txt');

  rs.on('data',function(chunk){
    res.write(chunk)
    res.write('hii,Saurabh');
  })
  rs.on('end',function(){
    res.end();
  })

  res.on('error',function(err){
    res.end(err.message);
  })

})

server.listen(4000,'localhost',function(){
    console.log('Server is started');
})

// alternative
server.on('request',function(req,res){
    let rs = fs.createReadStream('./Files/largeFile.txt');
    rs.pipe(res);

})