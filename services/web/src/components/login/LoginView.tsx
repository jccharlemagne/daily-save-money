import { FC } from "react"
import { CredentialResponse, GoogleLogin } from "@react-oauth/google"

interface LoginProps {
  isLoggedIn: boolean;
}

const LoginView: FC<LoginProps> = ({ isLoggedIn }) => (
  <div>
    <GoogleLogin
      onSuccess={(credentialResponse) => { isLoggedIn = true }}
      onError={() => console.error('Login failed')}
    />
  </div>
);

export default LoginView;
