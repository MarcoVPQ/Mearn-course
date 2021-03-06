const express = require('express')
const connectDB = require('./config/db')

connectDB()
const app = express()



app.get('/', (req, res) => res.send('API running'))
app.use('/api/auth', require('./routes/api/auth'))
app.use('/api/users', require('./routes/api/users'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/posts', require('./routes/api/post'))



const PORT = process.env.PORT || 5000


app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`)
})