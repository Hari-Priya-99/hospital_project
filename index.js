const jsonServer = require('json-server')


const server = jsonServer.create()
server.use(jsonServer.defaults())
const route = jsonServer.router('db.json')
server.use(route)
const PORT = 3000
server.listen(PORT,()=>{
    console.log("Server is successfully running in PORT",PORT)
})