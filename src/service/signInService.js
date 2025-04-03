export const signInService = async (user) => {
  console.log(" User : ", user);

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_AUTH_BASE_URL}/auth/login`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    }
  );

  const signedInUser = await response.json();
  console.log("Signed in user : ", signedInUser);

  return signedInUser;
};
