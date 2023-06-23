import * as yup from 'yup';

export const signUpFormSchema = yup.object().shape({
  firstName: yup.string().required('First Name is required').trim(),
  lastName: yup.string().required('Last Name is required').trim(),
  email: yup
    .string()
    .email('Invalid email address')
    .required('Email is required')
    .trim(),
  password: yup.string().min(8).max(32).required('Password is required').trim(),
  confirmPassword: yup
    .string()
    .required()
    .trim()
    .oneOf([yup.ref('password')], "Passwords don't match.")
});

export type CreateUserInput = yup.InferType<typeof signUpFormSchema>;
