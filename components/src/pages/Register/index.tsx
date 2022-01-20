import React from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";

const Login: React.FC = () => (
  <main>
    <h1>Register</h1>
    <form>
      <Input placeholder="Name" />
      <Input placeholder="Address" />
      <Input placeholder="Email" type="email" />
      <Input placeholder="Password" type="password" />
      <Button label="Register" />
    </form>
  </main>
);
export default Login;
