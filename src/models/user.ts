import { Model, Optional } from "sequelize"

export interface User {
  username: string
  password: string
  role: string
}

export interface UserCreationAttributes extends Optional<User, "username"> {}

export interface UserInstance
  extends Model<User, UserCreationAttributes>,
    User {
  createdAt?: Date
  updatedAt?: Date
}
