import mongoose from "mongoose"
import mongoConfig from "./db.config.js"

export async function mongoDb() {
    await mongoose.connect(mongoConfig.url)
}

export default mongoDb