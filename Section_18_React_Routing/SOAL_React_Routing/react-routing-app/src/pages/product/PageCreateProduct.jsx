import React, { useState } from "react";

import { Popconfirm, Table } from "antd";

import ProductForm from "../../features/products/components/ProductForm/ProductForm";
import Container from "../../shared/components/Container/Container";

const PageCreateProduct = () => {
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(products.length + 1);

  const deleteData = (key) => {
    const newData = products.filter((item) => item.key !== key);
    setProducts(newData);
  };

  const addData = (values) => {
    const newData = [
      ...products,
      {
        key: count,
        ...values,
      },
    ];
    setProducts(newData);
    setCount(count + 1);
  };

  const TABLE_COLUMNS = [
    {
      title: "No",
      dataIndex: "key",
    },
    {
      title: "Product Name",
      dataIndex: "product_name",
      key: "product_name",
    },
    {
      title: "Product Category",
      dataIndex: "product_category",
      key: "product_category",
    },
    {
      title: "Product Freshness",
      dataIndex: "product_freshness",
      key: "product_freshness",
    },
    {
      title: "Product Price",
      dataIndex: "product_price",
      key: "product_price",
    },
    {
      title: "Product Image",
      dataIndex: "product_image",
      key: "product_image",
      render: (_, record) => (
        <img
          src={record.product_image[0].thumbUrl}
          alt="product"
          style={{ width: "50px", height: "50px", borderRadius: "50%" }}
        />
      ),
    },
    {
      title: "Action",
      render: (_, record) => (
        <Popconfirm
          title="Sure to delete?"
          arrow={false}
          onConfirm={() => deleteData(record.key)}
        >
          Delete
        </Popconfirm>
      ),
    },
  ];

  return (
    <React.Fragment>
      <ProductForm onFinish={(v) => addData(v)} />
      <Container style={{ marginTop: 50, marginBottom: 50 }}>
        <Table
          columns={TABLE_COLUMNS}
          dataSource={products}
          pagination={false}
          bordered
        />
      </Container>
    </React.Fragment>
  );
};

export default PageCreateProduct;
