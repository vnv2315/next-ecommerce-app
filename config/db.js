import mongoose from 'mongoose';

const cached= global.mongoose;

if(!cached){
    cached= global.mongoose={conn:null, promise:null}
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn
    } 
    if(cached.promise) {
        const opts={
            bufferCommands:false
        }
        cached.promise=mongoose.connect(`${process.env.MONGODB_URI}/vnv`,opts).then(mongoose=>{
            return mongoose;
        })
    }
    cached.conn=await cached.promise;
    return cached.conn
}

export default connectDB;