import FooterComponent from "../../components/HomeComponents/FooterComponent";
import NavbarComponent from "../../components/HomeComponents/NavbarComponent";
import UserLogin from "../../components/LoginComponents/UserLogin";

function Login() {
  return (
    <div>
      <NavbarComponent />
      <UserLogin />
      <FooterComponent />
    </div>
  );
}

export default Login;
