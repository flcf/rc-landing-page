export enum RoleGroup {
  DIRECTOR = 'director',
  COORDINATOR = 'coordinator',
  MISC = 'misc'
}

export type MemberCardProps = {
  id: number;
  firstName: string;
  lastName: string;
  role: string;
  roleGroup: RoleGroup;
  image: string;
  bio: string;
};