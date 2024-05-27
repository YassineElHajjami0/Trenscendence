import api from ".";

const signIn = (body: any) => {
  api.post("auth", body, {
    headers: {
      // "Content-Type"
    },
  });
};
