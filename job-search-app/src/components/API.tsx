const authorization = async () => {
  try {
    const response = await fetch(
      "https://startup-summer-2023-proxy.onrender.com/2.0/oauth2/password/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
          "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        },
        body: "login=sergei.stralenia@gmail.com&password=paralect123&client_id=2356&client_secret=v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948&hr=0",
      }
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
  }
};

export const getData = async (url: string) => {
  const token = await authorization();

  const response = await fetch(
    `https://startup-summer-2023-proxy.onrender.com/2.0/${url}`,
    {
      headers: {
        "x-secret-key": "GEU4nvd3rej*jeh.eqp",
        'X-Api-App-Id': "v3.r.137440105.ffdbab114f92b821eac4e21f485343924a773131.06c3bdbb8446aeb91c35b80c42ff69eb9c457948",
        Authorization: `Bearer ${token.access_token}`,
      },
    }
  );
  const data = await response.json();

  return data;
};
