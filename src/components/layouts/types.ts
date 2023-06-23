export enum LayoutTemplate {
  DEFAULT,
  DASHBOARD
}
export type LayoutProps = {
  children?: React.ReactNode;
  template?: LayoutTemplate;
};
