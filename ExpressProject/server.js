const dotenv = require('dotenv')
dotenv.config({ path: './config.env' })
const app = require('./app')



console.log(app.get('env'))
console.log(process.env)
// here we are not creating diff. app using express 
//if we do so app.js and server.js are not remain connected



// create+listen to the server
const port = process.env.PORT || 3001;
app.listen(port, function () {
    console.log('Server has started')
})