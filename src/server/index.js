const  path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
const  cors = require('cors')
const bodyParser = require("body-parser")
const fetch = require('node-fetch');

//  api key
const dotenv = require('dotenv');
dotenv.config();
const API_KEY = process.env.API_KEY;
const BaseUrl ="https://api.meaningcloud.com/sentiment-2.1"


const app = express()
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

 app.use(express.static('dist'))
 

console.log(__dirname)

app.get('/', function (req, res) {
     /*    res.send("<h1>hi</h1>")

    res.sendFile('/client/views/index.html', { root: __dirname + '/..' }) // /.. elno2ttyn dy m3naha 2rg3 5twa lwra  l2n dirname da byro7 l7d lserver
 */
   res.sendFile("../../dist/index.html")
   

})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})

app.get('/add', function (req, res) {
    res.send({
        message : API_KEY
    })
})


app.post('/addUrl', async (req, res)=> {
    const response = await fetch(`${BaseUrl}?key=${API_KEY}&lang=en&url=${req.body.url}`);
    
    try {
        const data = await response.json();
        const newData={
            score_tag : data.score_tag,
            text : data.sentence_list[0].text,
            agreement : data.agreement,
            subjectivity : data.subjectivity,
            model : data.model
        }
        res.send(newData);
    } catch (error) {
        console.log("error", error);
    }
    
  

    
})


