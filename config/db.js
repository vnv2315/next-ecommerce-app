import mongoose from 'mongoose';

const cached= global.mongoose;

if(!cached){
    cached= global.mongoose={conn:null, promise:null}
}

async function connectDB() {
    if (cached.conn) {
        return cached.conn
    } 
    if(!cached.promise) {
        const opts={
            bufferCommands:false
        }
        
        if (!process.env.MONGODB_URI) {
            throw new Error('MONGODB_URI environment variable is not set');
        }
        
        cached.promise=mongoose.connect(`${process.env.MONGODB_URI}/vnv`,opts).then(mongoose=>{
            console.log('Database connected successfully');
            return mongoose;
        }).catch(error => {
            console.error('Database connection failed:', error);
            cached.promise = null; // Reset promise on error
            throw error;
        })
    }
    cached.conn=await cached.promise;
    return cached.conn
}

export default connectDB;