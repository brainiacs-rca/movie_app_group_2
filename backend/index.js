const express = require('express');
const { Mrouter } = require('./routers/movie');
const cors = require('./utils/cors');
const app = express();
const PORT = 4000 || process.env.PORT;
const db = require('./utils/db');
app.use(function(req,res,next){
    options={
        origin:req.headers.origin
    }
    cors(options)
    res.header('Access-Control-Allow-Origin', req.headers.origin)
    res.header('Access-Control-Allow-Headers', 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept');
    res.header('Access-Control-Allow-Credentials', true);
    next()
});
app.use(express.json({limit: '80mb'}));
app.use("/movie",Mrouter);
db()
app.listen(PORT,()=>{
    console.log(`Listening on PORT ${PORT}`);
});