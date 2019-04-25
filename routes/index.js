const routes = require('express').Router()
const user = require('./user.js')
const song = require('./song.js')

routes.get('/', (req,res) => {
    res.render('home')
})

routes.use('/user', user)
routes.use('/song', song)



module.exports = routes