import {
  confirmPasswordReset,
  connectAuthEmulator,
  sendPasswordResetEmail,
} from "firebase/auth";
import { auth } from "./FirebaseConfig";

// if (process.env.NODE_ENV === "development") {
//   connectAuthEmulator(auth, "http://localhost:9099");
// }
export const passwordReset = async (email) => {
  return await sendPasswordResetEmail(auth, email);
};

export const confirmThePasswordReset = async (oobCode, newPassword) => {
  return await confirmPasswordReset(auth, oobCode, newPassword);
};
