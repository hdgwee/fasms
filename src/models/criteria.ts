import { Model, Optional } from "sequelize"

export interface Criteria {
  id: string
  schemeId: string
  name: string
  value: string
  parentId: string
}

export interface CriteriaCreationAttributes extends Optional<Criteria, "id"> {}

export interface CriteriaInstance
  extends Model<Criteria, CriteriaCreationAttributes>,
    Criteria {
  createdAt?: Date
  updatedAt?: Date
}
