const express = require('express')
const path = require('path')

const app = express()
const port = process.env.PORT || 3000

//Main path
const pubDirPath = path.join(__dirname, '../public')

//express serves up the main page
app.use(express.static(pubDirPath))

app.get('', (req, res) => {
    res.render(index)
})

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})