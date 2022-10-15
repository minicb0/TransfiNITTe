const express = require("express");
const app = express();
const port = 9999;

// const express_ejs_layouts = require('express-ejs-layouts');
const path = require("path");
// const sassMiddleware = require('node-sass-middleware');
const db = require("./config/db");
const session = require("express-session");
const cookieParser = require("cookie-parser");
//const MongoStore = require('connect-mongo');
const passport = require("passport");
//const passportLocalAuth = require('./config/passport_strategies/localAuth');
const bodyParser = require("body-parser");
app.use(express.urlencoded());

//set up static-file midddleware
//app.use(express.static('./assets'));

//set up template engine
//aap.set('views',path.join(__dirname,'/templates'));
//app.set('view engine','ejs');
//set up layout
//app.use(express_ejs_layouts);
//app.set('layout','./layouts/layout1');
//app.set("layout extractScripts", true);
//app.set('layout extractStyles',true);

//set up session and session cookies
app.use(cookieParser());
// app.use(session({
//     name:"sessionid9999",
//     resave:false,
//     secret:'DSbook',
//     saveUninitialized:false,
//     cookie:{
//        maxAge : (1000*60*90)
//     },
//     store:MongoStore.create({
//        client:db.getClient(),
//        autoRemove:"native",
//        collectionName:"session"
//     })
//  }));

//set up passport
// app.use(passport.initialize());
// app.use(passport.session());
// //set user details in res
// app.use(passport.setAuthenticatedUserDetails)

//set up bodyparser
app.use(bodyParser.json());

//set up routing
app.use("/", require("./route"));

app.listen(port, () => {
  console.log("exp server listening on port", port);
});
