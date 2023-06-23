export interface TeacherProps {
  avatar: string;
  name: string;
  code: string;
}

export interface NavbarItemProps {
  name: string;
  active: boolean;
}

export interface NavbarProps {
  teacher: TeacherProps;
  navs: Array<NavbarItemProps>;
}
