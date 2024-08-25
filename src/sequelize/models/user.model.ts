import { Sequelize } from "sequelize"
import DataTypes from "sequelize"
import { UserInstance } from "../../models/user"

export default (sequelize: Sequelize) => {
  const model = sequelize.define<UserInstance>(
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
