const mongoose= require('mongoose');
// const mongoURI="mongodb://localhost:27017/Cloudcar?readPreference=primary&appname=MongoDB%20Compass&ssl=false"
// const mongoURI="mongodb://localhost:27017/Cloudcar"
const mongoURI="mongodb+srv://vatsal2401:Vatsal2401@cluster0.800wcdy.mongodb.net/CloudCar?retryWrites=true&w=majority"
const connectToMongo=()=>{
    mongoose.connect(mongoURI,{  useNewUrlParser: true,
        useUnifiedTopology: true,
        }
    ).then(()=>{
        console.log("connection succefully")
    }).catch((err) => console.log(err))
}
module.exports=connectToMongo;
