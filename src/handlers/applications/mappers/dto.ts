export class ApplicantDto {
  id: string
  name: string
  employment_status: string
  sex: string
  date_of_birth: string
  household: SubApplicantDto[]

  constructor(
    id: string,
    name: string,
    employment_status: string,
    sex: string,
    date_of_birth: string,
    household: SubApplicantDto[],
  ) {
    this.id = id
    this.name = name
    this.employment_status = employment_status
    this.sex = sex
    this.date_of_birth = date_of_birth
    this.household = household
  }
}

export class SubApplicantDto {
  id: string
  name: string
  employment_status: string
  sex: string
  date_of_birth: string
  relation: string

  constructor(
    id: string,
    name: string,
    employment_status: string,
    sex: string,
    date_of_birth: string,
    relation: string,
  ) {
    this.id = id
    this.name = name
    this.employment_status = employment_status
    this.sex = sex
    this.date_of_birth = date_of_birth
    this.relation = relation
  }
}

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
