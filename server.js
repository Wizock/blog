// front end will communicate with back end through making http requests
// nodejs application runs on your server and uses Express among other things
// the client application would use javascript to communicate with the server
// 
// 1. User navigates to yourdomain.com
// 2. Your Express server sees a HTTP GET request.
// 3. Your Express server responds to that request by sending a predefined HTML document (static website).
// 4. The user now has a website in their browser and they can do whatever they want.
// 5. The user decides to submit a form. The client application (website) sends a POST request to your Express server.
// 6. Your Express server sees the POST request.
// 7. Your server takes the information out of the request and asks the database to save it
const express = require('express');
const app = express();
const path = require('path');
const router = express.Router();

router.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/home.html'));
  //__dirname : It will resolve to your project folder.
});

//add the router
app.use('/', router);
app.listen(process.env.port || 3000);

console.log('Running at Port 3000');
//https://getbootstrap.com/docs/4.5/getting-started/introduction/
//https://www.tutorialsteacher.com/nodejs/access-sql-server-in-nodejs
//https://expressjs.com/en/guide/database-integration.html
//https://stackoverflow.com/questions/1972242/how-to-auto-reload-files-in-node-js