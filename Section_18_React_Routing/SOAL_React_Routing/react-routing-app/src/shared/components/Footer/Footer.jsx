import { Typography } from "antd";

import Container from "../Container/Container";

import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <Container>
        <Typography.Text>
          React Routing © {currentYear}. All rights reserved.
        </Typography.Text>
      </Container>
    </footer>
  );
};

export default Footer;
