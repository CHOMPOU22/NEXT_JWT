const { auth } = require("@/auth");

export const headerToken = async () => {
  const session = await auth();
  console.log("header token session : ", session);

  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${session?.user?.token}`,
  };
};
