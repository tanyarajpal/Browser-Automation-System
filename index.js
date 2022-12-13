const express = require('express')
const app = express()
const port = 3000
const routes = require('./Routes/routes');
const cors = require('cors');
app.use(cors());

app.get('/', (req, res) => {
  res.send("hello world")
})
// app.use('/open/browser/www.google.com',()=>{
//     console.log("hi");
// })

app.use('',routes)

app.listen(port, () => {
  console.log(`app listening on port ${port}`)
})