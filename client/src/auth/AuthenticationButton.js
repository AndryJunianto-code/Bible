import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";

import { useAuth0 } from "@auth0/auth0-react";
import SignupButton from "./SignupButton";

const AuthenticationButton = () => {
  const { isAuthenticated } = useAuth0();

  return isAuthenticated ? 
      <div className='flex flex-col'>
      <LogoutButton />
      </div> : (
      <div className='flex flex-col'>
        <LoginButton /> 
        <SignupButton/>
      </div>
  );
};

export default AuthenticationButton;