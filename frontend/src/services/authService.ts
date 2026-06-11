import {
  signUp,
  confirmSignUp,
  signIn,
  signOut,
  getCurrentUser,
} from "aws-amplify/auth";

export const registerUser = async (
  email: string,
  password: string
) => {
  return await signUp({
    username: email,
    password,
    options: {
      userAttributes: {
        email,
      },
    },
  });
};

export const verifyUser = async (
  email: string,
  code: string
) => {
  return await confirmSignUp({
    username: email,
    confirmationCode: code,
  });
};

export const loginUser = async (
  email: string,
  password: string
) => {
  return await signIn({
    username: email,
    password,
  });
};

export const logoutUser = async () => {
  return await signOut();
};

export const getLoggedInUser = async () => {
  return await getCurrentUser();
};