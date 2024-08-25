export class SchemeDto {
  id: string
  name: string
  criteria: unknown
  benefits: BenefitDto[]

  constructor(
    id: string,
    name: string,
    criteria: unknown,
    benefits: BenefitDto[],
  ) {
    this.id = id
    this.name = name
    this.criteria = criteria
    this.benefits = benefits
  }
}

export class BenefitDto {
  id: string
  name: string
  amount: number

  constructor(id: string, name: string, amount: number) {
    this.id = id
    this.name = name
    this.amount = amount
  }
}
