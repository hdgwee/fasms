import { Sequelize } from "sequelize"
import { v4 as uuidv4 } from "uuid"

export async function seed(sequelize: Sequelize) {
  await sequelize.query("SET FOREIGN_KEY_CHECKS = 0")

  // TODO: Perform migration to prevent data loss
  await sequelize.sync({ force: true })

  await seedUserData(sequelize)
  await seedSchemeData(sequelize)

  await sequelize.query("SET FOREIGN_KEY_CHECKS = 1")
}

async function seedUserData(sequelize: Sequelize) {
  await sequelize.models.user.create({
    username: "username",
    password: "password",
    role: "System Administrator",
  })
}

async function seedSchemeData(sequelize: Sequelize) {
  const retrenchmentAssistanceScheme = getRetrenchmentAssistanceScheme()
  await sequelize.models.scheme.create(retrenchmentAssistanceScheme, {
    include: ["benefits", "criteria"],
  })

  const retrenchmentAssistanceSchemeFamilies =
    getRetrenchmentAssistanceSchemeFamilies()
  await sequelize.models.scheme.create(retrenchmentAssistanceSchemeFamilies, {
    include: ["benefits", "criteria"],
  })
}

function getRetrenchmentAssistanceScheme() {
  return {
    id: "01913b89-9a43-7163-8757-01cc254783f3",
    name: "Retrenchment Assistance Scheme",
    criteria: [
      {
        id: uuidv4(),
        name: "employment_status",
        value: "unemployed",
        parentId: "",
      },
    ],
    benefits: [
      {
        id: "01913b8b-9b12-7d2c-a1fa-ea613b802ebc",
        schemeId: "01913b89-9a43-7163-8757-01cc254783f3",
        name: "SkillsFuture Credits",
        amount: 500.0,
      },
    ],
  }
}

function getRetrenchmentAssistanceSchemeFamilies() {
  return {
    id: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
    name: "Retrenchment Assistance Scheme (families)",
    criteria: [
      {
        id: uuidv4(),
        schemeId: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
        name: "employment_status",
        value: "unemployed",
        parentId: "",
      },
      {
        id: "5d473b64-cb79-47e8-90ef-9d94e3858be5",
        schemeId: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
        name: "has_children",
        value: "",
        parentId: "",
      },
      {
        id: uuidv4(),
        schemeId: "01913b89-befc-7ae3-bb37-3079aa7f1be0",
        name: "school_level",
        value: "== primary",
        parentId: "5d473b64-cb79-47e8-90ef-9d94e3858be5",
      },
    ],
    benefits: [],
  }
}
