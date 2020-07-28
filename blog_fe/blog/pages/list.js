import React from 'react'
import Head from 'next/head'
import { Row, Col } from 'antd'
import Header from '../components/Header'
export default function List() {
  return (
    <div className="container">
      <Head>
        <title>List</title>
      </Head>
      <Header></Header>
      <Row className="comm-main" tyle="flex" justify="center">
        <Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}>
          做
        </Col>
        <Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
          右
        </Col>
      </Row>
    </div>
  )
}
