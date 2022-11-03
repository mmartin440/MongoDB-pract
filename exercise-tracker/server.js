import express from 'express'; 
import cors from 'cors'; 
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import custRoute from './routes/customers.js'

dotenv.config() 

const app = express(); 
const PORT = process.env.PORT || 3000; 

app.use(cors()); 
app.use(express.json()); 


    // mongoose.connect(process.env.DB_CONNECTION, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
    // }, (err) => {
    //     if(err) {
    //         console.log(err)
    //     } else {
    //         console.log(`successfuly connected you dumbo`)
    //     }
    // });

// I live this as a empty string because we already defined our route in the other routers 
// custRoute is from the info we 
app.use('', custRoute)



app.listen(PORT, () => {
    console.log(`Server running on port ${PORT} `)
})

