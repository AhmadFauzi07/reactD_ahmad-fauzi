import { Row, Col, Typography } from "antd";

import Container from "../Container/Container";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <Container className="header__container">
        <Row align="middle" justify="space-between">
          <Col lg={12}>
            <Typography.Title strong level={3}>
              React Routing
            </Typography.Title>
          </Col>
          <Col xs={0} lg={12} gutter={[0, 16]}>
            <ul className="menu">
              <li className="link">Link 1</li>
              <li className="link">Link 2</li>
              <li className="link">Link 3</li>
              <li className="link">Link 4</li>
              <li className="link">Link 5</li>
            </ul>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
