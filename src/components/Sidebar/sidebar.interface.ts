export interface SidebarItemProps {
  name: string;
  active: boolean;
  icon: JSX.Element;
}

export interface SidebarProps {
  items: Array<SidebarItemProps>;
}
