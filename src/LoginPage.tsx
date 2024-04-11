import { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";
import authProvider from "./authProvider";

const LoginPage = () => {
  const authContext = useContext(AuthContext);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const { Admin, isAuthenticated } = useContext(AuthContext) as AuthContextType;

  const [buttonVisible, setButtonVisible] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault(); // Prevent the default form submission
    authProvider
      .login({ username, password })
      .then((user) => {
        setButtonVisible(true);
        authContext.setAdmin(user);
        authContext.setIsAuthenticated(true);
      })
      .catch((error) => {
        console.error("Login failed", error);
      });
  };

  return (
    <div className="Login-form-label">
      {buttonVisible && (
        <a
          className="link-go-to-home"
          href="https://seraaga022.github.io/"
          title="go to home"
        >
          go to home <i className="fa-sharp fa-light fa-square-right"></i>
        </a>
      )}
      <form onSubmit={handleLogin}>
        <div className="title">
          <p>Welcome </p>
        </div>
        <div>
          <input
            type="text"
            id="username"
            value={username}
            placeholder="username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div>
          <input
            className="input-2"
            type="password"
            id="password"
            value={password}
            placeholder="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
