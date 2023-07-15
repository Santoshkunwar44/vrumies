



require('dotenv').config({});

const functions      = require("firebase-functions")
const express = require("express")
const app = express()
const cors = require("cors")
const session = require("express-session")
const MongoStore = require("connect-mongo")
const cookieParser = require("cookie-parser")
const morgan = require("morgan")
const passport = require("passport")
const path = require("path")
const fs = require("fs")
const http = require("http")
const server = http.createServer(app)
const { Server } = require("socket.io");
const io = new Server(server, {
  cors: {
    origin: [
      process.env.FRONTEND_URL,
      "http://localhost:3000",
      "http://127.0.0.1:3000",
    ],
    methods: ["GET", "POST"],
    credentials: true,
  },
});

console.log(process.env.NODE_ENV ==="production")


app.use(cors({
    origin: [
        process.env.FRONTEND_URL,
        'http://localhost:3000'
    ],
    methods: ["POST,PUT,GET,DELETE,PUT,OPTIONS"],
    credentials: true
}))
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,UPDATE,OPTIONS');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    next();
});
app.set("trust proxy", 1)



app.use(cookieParser())
app.use(express.json())
app.use(morgan("common"))


require("./service/db/connectDb")()
require("./service/passport/passport")


const store = MongoStore.create({
    mongoUrl: process.env.MONGO_URI,
    ttl: 31556952000,
    collectionName: "vrumies_session",
    autoRemove: 'native',
})


app.use(session({
    name: "vrumies.sid",
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    store,
    cookie: {
        secure:process.env.NODE_ENV === "production",
        maxAge: 31556952000,
        httpOnly: true,
        sameSite:"none"
    
    },
}))

app.use(passport.initialize())
app.use(passport.session())


require("./AllRoutes")(app)
require("./utils/socket")(io)



server.listen(8000, () => console.log("server started at port 8000"))
exports.app  = functions.https.onRequest(app)
