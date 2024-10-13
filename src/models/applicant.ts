export class Applicant {
  id: string
  name: string
  employmentStatus: string
  sex: string
  dateOfBirth: Date
  underTheSameHouseholdOf: string
  relationship: string

  constructor(
    id: string,
    name: string,
    employmentStatus: string,
    sex: string,
    dateOfBirth: Date,
    underTheSameHouseholdOf: string,
    relationship: string,
  ) {
    this.id = id
    this.name = name
    this.employmentStatus = employmentStatus
    this.sex = sex
    this.dateOfBirth = dateOfBirth
    this.underTheSameHouseholdOf = underTheSameHouseholdOf
    this.relationship = relationship
  }
}
