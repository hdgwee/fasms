import { Criteria } from "./criteria"
import { Benefit } from "./benefit"

export class Scheme {
  id: string
  name: string
  criteria: Criteria[]
  benefits: Benefit[]

  constructor(
    id: string,
    name: string,
    criteria: Criteria[],
    benefits: Benefit[],
  ) {
    this.id = id
    this.name = name
    this.criteria = criteria
    this.benefits = benefits
  }
}
