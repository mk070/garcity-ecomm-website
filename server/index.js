
import express from 'express';
import * as dotenv from 'dotenv' ;
import cors from 'cors';

import connectdb from './mongodb/connect.js'

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({limit:'50mb'}))

app.get('/',(req,res)=>{
    res.send('Welcome to the server')
})


const PORT = process.env.PORT || 5000;

const server = async() =>{
    try {
        //connect db
        connectdb(process.env.MONGODB_URL);

        app.listen(PORT, () => {
            console.log(`Server is running on port http://localhost:${PORT}`);
          });
    } catch (error) {
        console.log('error')
    }
}

server();