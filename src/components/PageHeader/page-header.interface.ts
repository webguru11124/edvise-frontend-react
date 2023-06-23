export interface UserProps {
  avatar: string;
  name: string;
  role: string;
}

export interface PageHeaderProps {
  user: UserProps;
  unread: boolean;
}
