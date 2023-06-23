export enum ButtonVariant {
  POLYGON,
  CIRCULAR
}

export enum ButtonSize {
  SMALL,
  MEDIUM,
  LARGE,
  XLARGE,
  FULL
}

export enum ButtonColor {
  PRIMARY,
  SECONDARY,
  WARNING,
  DANGER,
  DISABLED
}

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
} & Omit<
  React.DetailedHTMLProps<
    React.SelectHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >,
  'size' | 'color'
>;

export type LinkProps = {
  to: string;
  external?: string;
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
} & Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  'ref'
>;
