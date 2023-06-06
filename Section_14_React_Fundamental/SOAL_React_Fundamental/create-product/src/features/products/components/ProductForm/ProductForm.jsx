import React from "react";

import { Button, Form, Input, InputNumber, Radio, Select, Upload } from "antd";

import Container from "../../../../shared/components/Container/Container";

import "./ProductForm.css";

const ProductForm = () => {
  const [form] = Form.useForm();

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <section className="product">
      <Container className="container__product">
        <Form
          form={form}
          autoComplete="off"
          layout="vertical"
          onFinish={(e) => console.log(e, "asd")}
          name="form_product"
          initialValues={{
            product_name: "",
            product_category: undefined,
            product_freshness: "",
            product_price: 0,
            product_image: null,
            additional_description: "",
          }}
          scrollToFirstError
        >
          <Form.Item
            label="Product Name"
            name="product_name"
            rules={[
              {
                required: true,
                message: "Please Product Name",
              },
            ]}
            required
          >
            <Input type="text" placeholder="Input product name" />
          </Form.Item>

          <Form.Item
            name="product_category"
            label="Product Category"
            rules={[
              {
                required: true,
                message: "Please select your product category",
                type: "string",
              },
            ]}
          >
            <Select placeholder="Select product category">
              <Select.Option value="category_1">Category 1</Select.Option>
              <Select.Option value="category_2">Category 2</Select.Option>
              <Select.Option value="category_3">Category 3</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="product_freshness"
            label="Product Freshness"
            rules={[
              {
                required: true,
                message: "Please choose your product freshness",
                type: "string",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="brand_new">Brand New</Radio>
              <Radio value="second_hand">Second Hand</Radio>
              <Radio value="refushed">Refushed</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            label="Product Price"
            name="product_price"
            rules={[
              {
                required: true,
                message: "Please input product price",
              },
            ]}
            required
          >
            <InputNumber
              addonBefore={"Rp"}
              size="middle"
              style={{ width: "100%" }}
            />
          </Form.Item>

          <Form.Item
            name="product_image"
            label="Image Product"
            valuePropName="fileList"
            getValueFromEvent={normFile}
            rules={[
              {
                required: true,
                message: "Input Image Product",
              },
            ]}
          >
            <Upload name="image" action="/upload.do" listType="picture">
              <Button>Click to upload</Button>
            </Upload>
          </Form.Item>

          <Form.Item
            name="additional_description"
            label="Additional Description"
            rules={[
              {
                required: true,
                message: "Please input additional description",
              },
            ]}
          >
            <Input.TextArea showCount maxLength={255} rows={5} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Container>
    </section>
  );
};

export default ProductForm;
