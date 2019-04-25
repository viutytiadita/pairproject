'use strict'

const express = require('express')
const routes = require('./routes')
let app = express()
const session = require('express-session')

app.use(express.urlencoded({extended: false}))
app.use(session({
    secret:'daringfox'
}))
app.set("view engine", "ejs")
app.use('/', routes)
app.listen(3000, () => {
    console.log('running apps')
})