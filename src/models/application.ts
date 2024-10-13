export class Application {
  id: string
  applicantId: string
  schemeId: string

  constructor(id: string, applicantId: string, schemeId: string) {
    this.id = id
    this.applicantId = applicantId
    this.schemeId = schemeId
  }
}
