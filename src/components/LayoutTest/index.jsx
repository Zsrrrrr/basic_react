import { Layout, Icon, Menu, Row, Col, Card, Breadcrumb, Button } from 'antd';

import React, { Component } from 'react'
import CollapseComp from './CollapseComp'

import './style.less'


const { Header, Sider, Content } = Layout;

export default class LayoutTest extends Component {
  constructor(){
    super();
    this.state = {
      layout: 'narrow' 
    }
  }

  handleLayoutChange = () => {
    console.log("布局切换")
    this.setState({
      layout: this.state.layout === "narrow" ? "enlarge" : "narrow",
    })
  }




  render() {

    const layoutChange = (
      <Icon
        type={
          this.state.layout === "narrow"
          ? "arrows-alt" : "shrink"
        }
        onClick={this.handleLayoutChange}
        style={{ fontSize: '15px', }}
      />
    )
    return (
      <Layout style={{ height: '100vh' }}>
        <Sider trigger={null} collapsible >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1">
              <Icon type="user" />
              <span>nav 1</span>
            </Menu.Item>
            <Menu.Item key="2">
              <Icon type="video-camera" />
              <span>nav 2</span>
            </Menu.Item>
            <Menu.Item key="3">
              <Icon type="upload" />
              <span>nav 3</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }}>
            <Icon
              className="trigger"
              onClick={this.toggle}
            />
          </Header>
          <Content
            style={{
              margin: '24px 16px',
              padding: 24,
              background: '#F0F2F5',
              minHeight: 280,
              border: '1px solid black'
            }}
          >
            <Row type="flex" justify="space-around">
              <Col className={`col-devSel-${this.state.layout}`} span={4}> {/** Header 64px */}
                <Card
                  title="设备选择"
                  size='small'
                  className={`card-devSel-${this.state.layout}`}
                  // bordered={false}
                  bodyStyle={{ 
                    height: '80vh',
                    overflowY: 'scroll'
                  }}
                >
                  <CollapseComp>
                  </CollapseComp>
                </Card>
              </Col>
              <Col className={`col-topo-prop-srvc-${this.state.layout}`} span={20}>
                <Row className={`row-topo-prop-${this.state.layout}`} type="flex" justify="space-around">
                  <Col span={this.state.layout === "narrow" ? 18 : 24}>
                    <Card
                      title="网络拓扑"
                      size="small"
                      // bordered={false}
                      className={`card-topo-${this.state.layout}`}
                      bodyStyle={{
                        // height: '60%',
                      }}
                      extra={layoutChange}
                    ></Card>
                  </Col>
                  <Col span={this.state.layout === "narrow" ? 6 : 0}>
                    <Card
                      title="属性配置"
                      size="small"
                      className={`card-propConf-${this.state.layout}`}
                      // bordered={false}
                      bodyStyle={{
                        // height: "50vh"
                      }}
                    ></Card>
                  </Col>
                </Row>
                <Row className={`row-srvc-${this.state.layout}`}>
                  <Card
                    title="业务管理"
                    size="small"
                    // bordered={false}
                    className={`card-srvc-${this.state.layout}`}
                    bodyStyle={{
                      // height: '30vh'
                    }}
                  >
                  </Card>

                </Row>
              </Col>
            </Row>
          </Content>
        </Layout>
      </Layout>
    )
  }
}
