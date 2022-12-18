export const getUser = async () => {
  const response = await fetch("/login/success", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Acccess-Control-Allow-Origin": true,
    },
    credentials: true,

  });
  const user = (await response.json()).user
  return user;
};
