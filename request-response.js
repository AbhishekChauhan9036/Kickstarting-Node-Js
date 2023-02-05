/*1.Node.js is an event-driven architecture designed to handle asynchronous I/O operations, 
such as input and output from databases, web servers and other services. Node.js uses events
 triggered by certain actions in order to execute certain instructions and callback functions. 
 this architecture allows for quick and efficient communication between different components of
  a web application.



2.Node.js is able to handle a large number of requests per second because it uses a non-blocking 
I/O model. This means that while node is processing a request, it can handle other requests at 
the same time. Node also leverages asynchronous programming which allows multiple tasks to run 
without blocking each other. As a result, Node is able to handle up to 1000 requests per second 
with relatively little overhead.



3. Process.exit() is a function in the Node.js environment that terminates the currently running 
JavaScript process. The function accepts one optional argument, which is an exit code to be passed
 back to the parent process. This allows the parent process to determine how the application ended
  and take any appropriate action.



4. The req object in the Node.js environment contains information about an incoming request from 
a client. The req.url contains the requested path, the req.header contains the incoming headers, 
and the req.method contains the type of HTTP request that was made.*/




/*
const http = require('http');

const server = http.createServer((req, res)=>{
    console.log(req.headers, req.url, req.method);
    process.exit();
})

server.listen(4000);
*/


const http = require('http');

const server = http.createServer((req, res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title> Node Js</title></head>');
    if(req.url === '/home'){
        res.write('<body><h1>Welcome home</h1></body>')
    }
    else if(req.url === '/about'){
        res.write('<body><h1>Welcome to About Us page</h1></body>')
    }
    else if(req.url === '/node'){
        res.write('<body><h1>Welcome to my Node Js project</h1></body>')
    }
    res.write('</html>');
    res.end();
    process.exit();
});

server.listen(4000);