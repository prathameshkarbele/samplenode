const http = require("http");


const fs = require("fs");

const home = fs.readFileSync('./index.html','UTF-8');

console.log(__dirname)

const PORT = 4000;
const Hostname = "localHost"

const severe = http.createServer((req, res) => {
//  request.parmas

// console.log(req.url);

if(req.url === "/"){
   return res.end(home)
}
if(req.url==="/about"){
    return  res.end("<h1>About Page<h1>")
}
 
if(req.url==="/contact"){
    return res.end("<h1>contact Page<h1>")
}
if(req.url==="/service"){
    return  res.end("<h1>service Page<h1>")
}
 
else{
    return res.end("<h1>404 Page Not Found<h1>")
}
 

})

severe.listen(PORT, Hostname,()=>{
    console.log(`Server  is running on http://${Hostname}:${PORT})`)
})