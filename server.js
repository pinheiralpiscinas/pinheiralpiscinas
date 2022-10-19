import express from 'express'
import resolve from 'path'

const app = express()

app.use('/', express.static(resolve(__dirname,'./build')))

app.listen(process.env.PORT || 3000 , (err) =>{
    if (err) {return console.log(err)}
    console.log('server is running')
})