import { Link } from "react-router-dom";
import { MapPin, ShoppingCart } from "phosphor-react";

import { Container, Nav } from "./styles";

import logo from "../../assets/logo.svg";

const Header = () => {
  return (
    <Container>
      <Link to="/">
        <img src={logo} alt="" />
      </Link>

      <Nav>
        <span>
          <MapPin weight="fill" />
          <p>Rio de Janeiro, RJ</p>
        </span>

        <Link to="/cart">
          <ShoppingCart size={22} weight="fill" />
        </Link>
      </Nav>
    </Container>
  );
};

export default Header;
