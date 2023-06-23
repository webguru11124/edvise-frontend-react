import { SvgIconComponent } from '@mui/icons-material';

export type FormProps = {
  className?: string;
  title?: string;
  subTitle?: string;
};

export enum ButtonVariant {
  DEFAULT = 'DEFAULT',
  POLYGON = 'POLYGON',
  CIRCULAR = 'CIRCULAR'
}

export enum ButtonSize {
  DEFAULT = 'DEFAULT',
  SMALL = 'SMALL',
  MEDIUM = 'MEDIUM',
  LARGE = 'LARGE',
  FULL = 'FULL'
}

export enum ButtonColor {
  DEFAULT = 'DEFAULT',
  PRIMARY = 'PRIMARY',
  SECONDARY = 'SECONDARY',
  WARNING = 'WARNING',
  DANGER = 'DANGER'
}

export type ButtonProps = {
  className?: string;
  variant?: ButtonVariant;
  size?: ButtonSize;
  color?: ButtonColor;
  icon?: SvgIconComponent;
  iconRight?: boolean;
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
  icon?: SvgIconComponent;
  iconRight?: boolean;
} & Omit<
  React.DetailedHTMLProps<
    React.AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  >,
  'ref'
>;
