export class User {
  id: string;
  name: string;
  lastName: string;
  role: string;
  email: string;
  // createdAt: Date;
  // updatedAt: Date;  
  createdAt: string;
  updatedAt: string;
  avatar?: string;
  // ----
  englishLevel?: string;
  technicalSkills?: string;
  cvLink?: string;

 

  constructor({
    id,
    name,
    lastName,
    role,
    email,
    createdAt,
    updatedAt,
    avatar,
    englishLevel,
    technicalSkills,
    cvLink,
  }:{
    id: string,
    name: string,
    lastName: string,
    role: string,
    email: string,
    createdAt: string,
    updatedAt: string,
    avatar?: string,
    englishLevel?: string,
    technicalSkills?: string,
    cvLink?: string,
  }) {
    this.id = id;
    this.name = name;
    this.lastName = lastName;
    this.role = role;
    this.email = email;
    this.createdAt = createdAt;
    this.updatedAt = updatedAt;
    this.avatar = avatar;
    this.englishLevel = englishLevel;
    this.technicalSkills = technicalSkills;
    this.cvLink = cvLink;

  }

  // example method that formats the user's name
  getFormattedName(): string {
    return `${this.lastName}, ${this.name}`;
  }

  // example method that checks if the user is an admin
  isAdmin(): boolean {
    return this.role === "admin";
  }
   // method to create a User instance from a JSON object
   static fromJson(json: any): User {
    const {id,  name, lastName, role, email, createdAt, updatedAt, avatar , englishLevel, technicalSkills, cvLink} = json;
    // return new User({ id,name, lastName, role, email, createdAt: new Date(createdAt), updatedAt: new Date(updatedAt), avatar });
    return new User({ id,name, lastName, role, email, createdAt: createdAt, updatedAt: updatedAt, avatar,englishLevel, technicalSkills, cvLink });
  }
}
