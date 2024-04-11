// import { AuthContext, AuthContextType } from "./AuthContext";
const API_BASE_URL = import.meta.env.VITE_SIMPLE_REST_URL;

interface LoginParams {
  username: string;
  password: string;
}

export default {
  login: async ({ username, password }: LoginParams) => {
    // const formData = new FormData();
    // formData.append("username", username);
    // formData.append("password", password);

    const request = new Request(`${API_BASE_URL}/adminLogin`, {
      method: "POST",
      // body: JSON.stringify(formData),
      body: JSON.stringify({ "username": username, "password": password}),
      // headers: new Headers({ "Content-Type": "multipart/form-data" }),
      headers: new Headers({ "Content-Type": "application/json" }),
    });

    return fetch(request)
      .then((response) => {
        if (response.status < 200 || response.status >= 300) {
          throw new Error(response.statusText);
        }
        return response.json();
      })
      .then(({ message, id, username, password_hash, image, name }) => {
        if (message === "@$admin exist@*") {
          return Promise.resolve({
            id: id,
            username: username,
            password: password_hash,
            avatar: image,
            name: name,
          });
        } else {
          return Promise.reject();
        }
      });
  },
  logout: () => {
    localStorage.setItem("isAuthenticated", "false");
    localStorage.setItem(
      "Admin",
      JSON.stringify({
        id: "",
        username: "",
        password: "",
        name: "",
        avatar: "",
      })
    );
    return Promise.resolve();
  },
  checkError: (error: Error) => {
    console.log(error.message);
    return Promise.resolve();
  },
  checkAuth: () => {
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";
    return isAuthenticated ? Promise.resolve() : Promise.reject();
  },
  getPermissions: () => Promise.resolve(),
};
