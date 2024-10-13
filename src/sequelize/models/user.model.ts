import DataTypes, { Sequelize, Model, Optional } from "sequelize"
import { User } from "../../models/user"

export interface UserCreationAttributes extends Optional<User, "username"> {}

export interface UserDao extends Model<User, UserCreationAttributes>, User {
  createdAt?: Date
  updatedAt?: Date
}

export default (sequelize: Sequelize) => {
  const model = sequelize.define<UserDao>(
    "user",
    {
      username: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      role: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {
      tableName: "users",
    },
  )

  return model
}
