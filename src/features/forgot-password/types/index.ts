export enum ResetPasswordStep {
  SEND_MAIL,
  CONFIRM_MAIL,
  RESET_PASSWORD
}

export interface ForgotPasswordProps {
  step:
    | ResetPasswordStep.SEND_MAIL
    | ResetPasswordStep.CONFIRM_MAIL
    | ResetPasswordStep.RESET_PASSWORD;
}
