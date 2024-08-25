import { Model, Optional } from "sequelize"

export interface Benefit {
  id: string
  schemeId: string
  name: string
  amount: number
}

export interface BenefitCreationAttributes extends Optional<Benefit, "id"> {}

export interface BenefitInstance
  extends Model<Benefit, BenefitCreationAttributes>,
    Benefit {
  createdAt?: Date
  updatedAt?: Date
}
