import dotenv from "dotenv"
import { Sequelize } from 'sequelize'

dotenv.config()

export const sequelize = new Sequelize(process.env.DB_URL)

async function connectToDB(): Promise<void>{
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}


export {connectToDB};