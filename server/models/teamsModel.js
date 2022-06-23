import 'dotenv/config'
import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_KEY, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: 'Cluster0'
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.log(err))

const Schema = mongoose.Schema


const teamSchema = new Schema({
  name: String,
  team: []
})

const Team = mongoose.model('team', teamSchema)

export default Team