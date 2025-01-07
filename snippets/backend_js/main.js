const express = require('express')
const app = express()
const port = 3000

// app.use(express.static('public'))

//how to write a middleware
app.use((req,res,next)=>{
  next()
})

app.get('/', (req, res) => {
  res.send('Hello World1!')
})

// app.get('/:slug', (req, res) => {
//     // logic to fetch {slug} from the db
//     // For URL: http://localhost:3000/blog/intro-to-padosi?mode=dark&region=in
//     console.log(req.params) // will output { slug: 'intro-to-padosi' }
//     console.log(req.query) // will output { mode: 'dark', region: 'in' }

//     res.send(`hello ${req.params.slug}`)
// })

app.post('/', (req, res) => {
  console.log("hELLO")
  res.send("Hello post request")
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})