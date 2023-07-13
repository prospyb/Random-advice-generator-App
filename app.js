import express from "express"
import dotenv from "dotenv"
dotenv.config()
import { router } from "./src/routes/request.router.js";


const app = express()
const port = +(process.env.PORT) || 8080

app.use(express.json())

app.use('/api/v1/advice', router)

app.use((err, req, res, next) =>{
    return res.status(err.status || 500).json({
        status: 'failed',
        message: err.message
    })
})

app.listen(port, ()=> console.log(`Server is listening on PORT: ${port}`))