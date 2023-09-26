import axios, { AxiosError } from "axios";

type LoginResponse = {
  success: boolean;
  error?: string;
  token?: string;
};
class AuthService {
  login = async (data: {
    login: string;
    password: string;
  }): Promise<LoginResponse | null> => {
    try {
      const res = await axios.post("/api/auth/generate-token", data);
      return res.data;
    } catch (e) {
      if (e instanceof AxiosError) {
        return e.response?.data || null;
      }
      return null;
    }
  };
}

export default new AuthService();
