import 'dotenv/config';
import { Sequelize } from 'sequelize'

export const sequelize = new Sequelize(process.env.DB_URL)

async function connectToDB(): Promise<void>{
  try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}


// async function syncDB(): Promise<void>{
//     try {
//         await sequelize.sync({ alter: true });
//         console.log("All models were synchronized successfully.");
//       } catch (error) {
//         console.error('Unable to sync to the database:', error);
//       }
// }




export {connectToDB};