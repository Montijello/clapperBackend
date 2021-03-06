const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const port = process.env.PORT || 8000

if(process.env.NODE_ENV !== 'production') require('dotenv').load()

app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit: '5mb'}))

app.use('/accounts', require('./routes/accounts'))
app.use('/auth', require('./routes/auth'))
app.use('/films', require('./routes/films'))

app.use((req, res, next) => {
  next({status:404, message: 'Unable to locate'})
})

app.use((err, req, res, next) => {
	console.log(err)
	const error = {}
	if (process.env.NODE_ENV !== 'production' && err.stack) error.stack = err.stack
	error.status = err.status || 500
	error.message = err.message || `Internal Server Error`

	console.error(error.message)
	res.status(error.status).json(error)
})

const listener = () => console.log(`Listening on ${port}`)
app.listen(port, listener)
