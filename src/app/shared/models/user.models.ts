export class User {
  constructor(
    public name: string,
    public last_name: string,
    public username: string,
    public password: string,
    public token?: string,
    public user?: object,
    public message?: string
  ) {}
}
