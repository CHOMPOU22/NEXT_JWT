"use server";

import { signUpService } from "@/service/signUpService";

export const signUpAction = async (formData) => {
  try {
    const user = {
      username: formData?.get("username"),
      email: formData?.get("email"),
      password: formData?.get("password"),
    };

    const result = await signUpService(user);

    if (!result.success) {
      console.error("Signup Error:", result.message);
      return { success: false, message: result.message };
    }
  } catch (error) {
    console.error("Signup Error:", error.message);
    throw new Error(error.message);
  }
};
