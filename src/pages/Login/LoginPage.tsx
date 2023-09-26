import { BsBoxArrowInRight } from "react-icons/bs";
import { ChangeEvent, useState } from "react";
import authService from "../../services/authService.ts";
import Card from "../../components/Card/Card.tsx";

const LoginPage = () => {
  const [form, setForm] = useState({
    login: "",
    password: "",
  });
  const [error, setError] = useState("");
  const [token, setToken] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setToken("");
    setError("");

    const response = await authService.login(form);

    if (!response) {
      return setError("Unknown error");
    }

    if (!response.success) {
      return setError(response.error ?? "");
    }

    setToken(response.token ?? "invalid token");
    setForm({
      login: "",
      password: "",
    });

    //save it to local storage
    if (response.token) {
      localStorage.setItem("token", response.token);
    }
  };

  return (
    <div className="flex flex-col gap-6 justify-center items-center">
      <Card title="Login">
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="login"
            value={form.login}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={form.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="!mt-6 flex items-center gap-2 border py-1 justify-center hover:shadow-lg active:scale-95 transition-transform"
          onClick={handleSubmit}
        >
          <BsBoxArrowInRight size="20px" />
          Login
        </button>
      </Card>
      {error && <span className="py-1 text-red-800">{error}</span>}
      {token && (
        <div className="text-center">
          <span className="text-lg block">Token received</span>
          <span>{token}</span>
        </div>
      )}
    </div>
  );
};

export default LoginPage;
