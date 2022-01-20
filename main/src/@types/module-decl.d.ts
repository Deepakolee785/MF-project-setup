/// <reference types="react" />

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
}

declare module "components/Button" {
  const Button: React.ComponentType<ButtonProps>;

  export default Button;
}
declare module "components/Input" {
  const Input: React.ComponentType<InputProps>;

  export default Input;
}

declare module "components/Login";
declare module "components/Register";
declare module "store/store";
declare module "store/api";
declare module "dashboard/DashboardPage";
