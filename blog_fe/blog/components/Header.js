// 栅格化系统
import React from 'react'
import '../static/style/components/header.css'
import { Row, Col, Menu, Icon } from 'antd'

const Header = () => {
    return (
        <div className="header">
            <Row type="flex" justify="center">
                <Col xs={24} sm={24} md={10} lg={15} xl={12}>
                    <span className="header-logo">幻城之雪</span>
                    <span className="header-text">专注前端开发100年</span>
                </Col>
                <Col xs={24} sm={24} md={10} lg={8} xl={6}>
                    <Menu mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <Icon type="youtobe" />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <Icon type="smile" />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </div>
    )
}

export default Header;