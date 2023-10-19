import app from './app.js';
import connectToDatabase from './config/Database.js'

connectToDatabase();

const server = app.listen(process.env.port,()=>{
 console.log(`server is working on https://localhost:4000`);
})

process.on("Unhandled promise rejection",(err)=>{
    console.log(`server shutting down due to ${err.message}`);

    server.close(()=>{
        process.exit(1);
    })
})