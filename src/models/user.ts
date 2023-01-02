import { Model, DataTypes } from 'sequelize'
import {sequelize} from "./index"

class User extends Model {
  declare id: number;
  declare email: string;
  declare password: string;
}

User.init(
  {
    email: {
      type: new DataTypes.STRING(128),
      allowNull: false,
    },
    password: {
      type: new DataTypes.STRING(128),
      allowNull: true,
    },
  },
  {
    tableName: 'users',
    sequelize, // passing the `sequelize` instance is required
  },
);


export default User;