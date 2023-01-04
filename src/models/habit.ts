import { Model, DataTypes } from 'sequelize'
import {sequelize} from "./index"

class Habit extends Model {
  declare id: number;
  declare name: string;

}

Habit.init(
  {
    name: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    time: {
      type: new DataTypes.TIME,
      allowNull: false,
    }
  },
  {
    tableName: 'habits',
    sequelize, // passing the `sequelize` instance is required
  },
);


export default Habit;