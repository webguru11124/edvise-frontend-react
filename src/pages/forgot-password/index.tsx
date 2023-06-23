import {
  ForgotPassword,
  ResetPasswordStep
} from '../../features/forgot-password';

const ForgotPasswordPage = () => {
  return (
    <main>
      <ForgotPassword step={ResetPasswordStep.CONFIRM_MAIL} />
    </main>
  );
};

export default ForgotPasswordPage;
