export class Criteria {
  id: string
  name: string
  value: string
  parentId: string

  constructor(id: string, name: string, value: string, parentId: string) {
    this.id = id
    this.name = name
    this.value = value
    this.parentId = parentId
  }
}
