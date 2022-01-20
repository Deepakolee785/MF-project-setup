import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

interface IProps {
  handleSubmit: () => void;
}

const Login: React.FC<IProps> = ({ handleSubmit }) => (
  <main>
    <h1>Login</h1>
    <form>
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button label="Login" onClick={handleSubmit} type="submit" />
    </form>
  </main>
);
export default Login;
