export class User {
  username: string
  password: string
  role: string

  constructor(username: string, role: string) {
    this.username = username
    this.password = "REDACTED"
    this.role = role
  }
}
