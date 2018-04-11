const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');
var uuid = require('uuid');
var nJwt = require('njwt');
// var jwt    = require('jsonwebtoken');
var superagent = require('superagent');
var conf = require('../config/config');
var rootPath = path.normalize(__dirname+'/../../');
var fs = require('fs');


//const api = require('../config/routes');
var restcontroller = require('../controller/eprestcontroller');


module.exports = function(app, config) {
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));
  app.use(express.static(path.join(__dirname, '../../dist')));
  // app.post('/api/login', restcontroller.login);
  app.post('/api/login', function(req, res) {
    var payload = req.body;
    var backendServer = payload.env?  payload.env : 'tl_dev';
    var email = payload.username;
    var pwd = payload.password;
   // var apiUrl = conf[backendServer].apiUrl;
   // var certPath = conf[backendServer].certPath;
    // console.log('Cert path', certPath);
   // var cert = fs.readFileSync(certPath);
    var secretKey = '46443c94-16f3-400d-98cb-b46547193155';   // conf[backendServer].secret;
    //TODO : Implement Login using passport or auth2
    var token = generateToken(email, pwd, secretKey);
    res.send({success: true, token: token, email: email, role: 'admin'});
  });

  generateToken = function(userid, key, secretKey) {

    var claims = {
      sub: userid,
      iss: 'https://www.ibm.com',
      permissions: key
    };
    var jwt = nJwt.create(claims,secretKey);
    console.log(jwt);
    var token = jwt.compact();
    console.log(token);
    return token;
  }

// ---------------------------------------------------------
// route middleware to authenticate and check token
// ---------------------------------------------------------
app.use(function(req, res, next){
  // check header or url parameters or post parameters for token
  var token = req.body.token || req.query.token || req.headers['x-access-token'];
  var env = req.body.env || req.query.env || req.headers['x-backend-env'];
  // console.log('ENV ', env);
  // console.log('TOKEN ', token);
  // console.log('ENV SECRET ', conf[env].secret);
  // decode token
  if(token) {
   // var backendServer = payload.env;
		// verifies secret and checks exp
    nJwt.verify(token,conf[env].secret,function(err,verifiedToken){
      if(err){
        console.log('VERIFY ERROR ', err);
        return res.json({ status:'0', message: 'HTTP_RESPONSE_CODE_UNAUTHORIZED', items:[] });
      }else{
        req.jwtPayload = verifiedToken;
        next();
      }
    });
  } else {
    return res.json({ status:'0', message: 'TOKEN_NOT_PROVIDED', items:[] });
  }
});

  //set up api routes
  //app.use('/api', api);
  app.get('/api/get', restcontroller.doGet);
  app.post('/api/post', restcontroller.doPost);



	// Catch all other routes and return the index file
	app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../dist/index.html'));
  });
	/**
	 * Get port from environment and store in Express.
	 */
	const port = 3030;
  app.set('port', port);
	/**
	 * Create HTTP server.
	 */
  const server = http.createServer(app);
	/**
	 * Listen on provided port, on all network interfaces.
	 */

	server.listen(port, 'localhost' ,() => console.log(`API running on localhost:${port}`));
};
