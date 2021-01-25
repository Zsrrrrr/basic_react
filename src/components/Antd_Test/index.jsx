import React, { Component } from 'react'
import { Table, Divider, Tag, Button, Input, Popconfirm, Select, Card } from 'antd';
const {Option} = Select
const data = [
  {
    key: '1',
    swKey: 1,
    swName: '交换机1',
    recvPort: 1,
    sendPort: 2,
  },
  {
    key: '2',
    swKey: 2,
    swName: '交换机2',
    recvPort: 3,
    sendPort: 4,
  },
  {
    key: '3',
    swKey: 3,
    swName: '交换机3',
    recvPort: 5,
    sendPort: 6,
  },
];

const swInfo = [
  {
    name: '交换机1',
    swKey: 1,
    ports: [1,2,3]
  },
  {
    name: '交换机2',
    swKey: 2,
    ports: [1,2,3,4,5,6]
  },
  {
    name: '交换机3',
    swKey: 3,
    ports: [1,2,3,4,5,6,7,8,9]
  },
]


export default class Antd_Table extends Component {

  constructor(props){
    super(props)
    this.columns = [
      {
        title: '交换机',
        dataIndex: 'swName',
        key: 'swName',
        render: (text, record, idx) => {
          return(
            <Select onSelect={e => this.swSelectOnBlur(e, record.swKey)} style={{width: '120px'}}>
              {
                swInfo.map((e, i) => {
                  return (
                    <Option value={i} style={{height: '30px'}}>{e.name}</Option>
                  )
                })
              }
            </Select>
          )
        },
      },
      {
        title: '接收端口',
        dataIndex: 'recvPort',
        key: 'recvPort',
        render: (text, record, idx) => {
          return(
            <Select onSelect={e => this.swSelectOnBlur(e, record.swKey)} style={{width: '120px'}}>
              {
                swInfo.find(i => i.swKey === record.swKey).ports.map((e, i) => {
                  return (
                    <Option value={i} style={{height: '30px'}}>{e}</Option>
                  )
                })
              }
            </Select>
          )
        },
      },
      {
        title: '发送端口',
        dataIndex: 'sendPort',
        key: 'sendPort',
        render: (text, record, idx) => {
          return (
            <Input onBlur={e => this.sendInputOnChange(e, record.swKey)}></Input>
          )
        }
      },
      
      {
        title: '操作',
        key: 'action',
        render: (text, record, idx) => (
          <Popconfirm
            title='确认删除？'
            onConfirm={() => this.handleDelete(record.swKey)}
          >
            <a>Delete</a>
          </Popconfirm>
        ),
      },
    ];

    this.state = {
      dataSource: data,
      count: 4,
    }
  }


  handleAdd = () => {
    let {count, dataSource} = this.state

    let newData = {
      key: count,
      swKey: count,
      swName: `交换机${count}`,
      recvPort: null,
      sendPort: null
    }
    this.setState({
      dataSource: [...dataSource, newData],
      count: count + 1,
    })
  }

  handleDelete = key => {
    let {dataSource} = this.state
    this.setState({dataSource: dataSource.filter(i => i.swKey !== key)})
  }

  recvInputOnChange = (e, swKey) => {
    let content = e.target.value
    
    let {dataSource} = this.state

    let idx = dataSource.findIndex(i => i.swKey === swKey)
    dataSource[idx].recvPort = content
    this.setState({dataSource: dataSource})
  }

  swSelectOnBlur = (e, swKey) => {
    let {dataSource} = this.state
    let {swKey: changeTo , name} = swInfo[e]
    console.log(changeTo, name)

    let idx = dataSource.findIndex(i => i.swKey === swKey)
    dataSource[idx].swName = name
    dataSource[idx].swKey = changeTo
    this.setState({dataSource: dataSource})

  }

  
  sendInputOnChange = (e, swKey) => {
    let content = e.target.value
    
    let {dataSource} = this.state

    let idx = dataSource.findIndex(i => i.swKey === swKey)
    dataSource[idx].sendPort = content
    this.setState({dataSource: dataSource})
  }

  

  render() {
    const {dataSource} = this.state
    const columns = this.columns
    return (
      <>
        <Button onClick={this.handleAdd}>add item</Button>
        <Card title="sds">
        <Table
          columns={columns}
          // dataSource={dataSource}
          size="small"
          scroll={{y: "100px"}}
          style={{
            backgroundColor: 'red',
            height: '20px'
          }}
        ></Table>

        </Card>
        <Button onClick={() => console.log(this.state.dataSource)}>show</Button>
      </>
      
    )
  }
}
