//  http module

const http=require('http');
const server=http.createServer((request,response)=>{//request sent by user and response will be send by us
    // console.log(request)
    // response.write("welcome to my server");
    // response.end();
    if(request.url === '/')// '/' is for homepage
    {
        response.end("welcome to our home page");
    }
    else if(request.url === '/about')
    {
        response.end("this is our about section");
    }
    else
    {        
        response.end(`
        <h1>sorry</h1>
        <p>page not found</p>
        <a href="/">back to home</a>
        `)
    }
})
//our server will lition to some port
//A port in computer networking is how a computer can use a single physical network connection to handle many incoming and outgoing requests by assigning a port number to each.
server.listen(5000)// Listening for incoming requests on port 5000
//we not exiting the file this is because web servers keeps on listining to request