export class User {
  public uid?: string;
  public sub: string;
  public email: string;
  public name: string;
  public givenName?: string;
  public familyName?: string;
  public photo?: string;
  public password?: string;
  public active?: boolean;
  public createdAt?: Date;
  public updatedAt?: Date;

  constructor(
    props: User
    ) { 
      Object.assign(this, props);
    }
  // public get getUid(): string {
  //   return this.uid;
  // }
  // public get getEmail(): string {
  //   return this.email;
  // }
  // public get getName(): string {
  //   return this.name;
  // }
  // public get getGivenName(): string {
  //   return this.givenName;
  // }
  // public get getFamilyName(): string {
  //   return this.familyName;
  // }
  // public get getPhoto(): string {
  //   return this.photo;
  // }
  // public get getActive(): boolean {
  //   return this.active;
  // }
  // public get getCreatedAt(): Date {
  //   return this.createdAt;
  // }
  // public get getUpdatedAt(): Date {
  //   return this.updatedAt;
  // }

  
  // public set setUid(v : string) {
  //   this.uid = v;
  // }
  


  // getUid(): string {
  //   return this.uid;
  // }

};