import { Roles } from '@mind/data/Types/UserRoles';

export interface CreateUserFormValues {
  name: string;
  lastName: string;
  email: string;
  role: Roles;
  team?: string;
  account?: string;
}