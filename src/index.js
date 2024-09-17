import { initMongoDB } from './database/database'
import server from './services/server'
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.SERVER_PORT || 8080

const init = async () => {
    await initMongoDB();
    server.listen(PORT, () => {
        console.log("Server started successfully")
    })
}

init()
