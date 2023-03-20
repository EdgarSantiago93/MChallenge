import { User } from "./User";

export class Team {
  name: string;
  members: User[];
  description?: string;

  constructor(name: string, members: User[], description: string) {
    this.name = name;
    this.members = members;
    this.description = description;
  }

  // method to create a TeamModel instance from a JSON object
  static fromJson(json: any): Team {
    const name = json.name;
    const membersJson = json.members || [];
    const members = membersJson.map((memberJson: any) => User.fromJson(memberJson));
    const description = json.description;
    return new Team(name, members, description);
  }
}