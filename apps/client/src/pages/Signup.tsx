import { useState } from "react";
import axios from "axios";
import { BACKEND_URL } from "@/config";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";

const signup = async ({
  username,
  email,
  password,
}: {
  username: string;
  email: string;
  password: string;
}) => {
  const response = await axios.post(`${BACKEND_URL}/auth/signup`, {
    username,
    email,
    password,
  });
  return response.data;
};

export default function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: signup,
    onSuccess: () => {
      navigate("/signin");
    },
  });

  return (
    <div className="flex col-auto">
      <div>image</div>
      <div>
        <input
          placeholder="username"
          onChange={(e) => setUsername(e.target.value)}
        />
        <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />
        <input
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={() => mutation.mutate({ username, email, password })}>
          signup
        </button>
      </div>
    </div>
  );
}
