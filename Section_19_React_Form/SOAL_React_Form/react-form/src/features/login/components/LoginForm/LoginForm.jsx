import React from "react";

import { Button, Form, Input, Typography } from "antd";

import Container from "../../../../shared/components/Container/Container";

import "./LoginForm.css";

const LoginForm = (props) => {
  const [form] = Form.useForm();

  return (
    <section className="login">
      <Container className="container__login">
        <Typography.Title
          level={2}
          style={{ marginBottom: 50, textAlign: "center" }}
        >
          Login
        </Typography.Title>

        <Form
          form={form}
          autoComplete="off"
          layout="vertical"
          onFinish={props.onFinish}
          name="form_product"
          initialValues={{
            email: "",
            password: "",
          }}
          scrollToFirstError
        >
          <Form.Item
            name="email"
            label="E-mail"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input placeholder="Input your email" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password placeholder="Input your password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default LoginForm;
