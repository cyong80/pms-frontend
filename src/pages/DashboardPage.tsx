import { FC, useEffect, useState } from "react";
import { useTranslation } from 'react-i18next';
import { Typography, Tag, Row, Col, Button, Card, Table, Calendar } from 'antd';
import { Column } from '@ant-design/charts';
import {RoomStatus} from '../models/Enums'
import moment from "moment";
import { DoubleLeftOutlined, DoubleRightOutlined, LeftOutlined, RightOutlined } from "@ant-design/icons";
import { gql } from "apollo-boost";
import { OperationVariables, Query, QueryResult } from "react-apollo";

const GET_CONTINENTS = gql`
  query {
    continents {
      code
      name
    }
  }
`;

const {Title} =Typography;

interface iRoomStatus{
  key:string;
  room:string;
  status:RoomStatus;
}

interface mData{
  date:Date;
  color:string;
}

const DashboardPage: FC = () => {
  const {t} =useTranslation();
  const [monthlyData, setMonthlyData] = useState<mData[]>([]);
  const data:any = [
    {type:'2021-08-27', sales:15},
    {type:'2021-08-28', sales:2},
    {type:'2021-08-29', sales:6},
    {type:'2021-08-30', sales:8},
    {type:'2021-08-31', sales:5},
    {type:'2021-09-01', sales:3},
    {type:'2021-09-02', sales:11}
  ];

  const config:any = {
    data:data,
    xField: 'type',
    yField: 'sales',
    height: 200,
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 0.6,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: { alias: '날짜' },
      sales: { alias: '예약수' },
    },
  };

  const GetStatusColor = (s:RoomStatus)=>{
    if(s === "Available"){
      return "green";
    }

    if(s === "Complete"){
      return "volcano"
    }

    if( s === "Process"){
      return "blue";
    }
  }

  const columns = [
    {
      dataIndex: 'room',
      key: 'room',
    },
    {
      dataIndex: 'status',
      key: 'status',
      render: (s:RoomStatus) =>(
          <Tag color={GetStatusColor(s)} style={{width:80, textAlign:'center'}}>{s.toUpperCase()}</Tag>
      )
    },
  ]

  const todayData: iRoomStatus[] = [{
    key: '101',
    room: '101호',
    status: "Available",
  },{
    key: '102',
    room: '102호',
    status: "Complete",
  },{
    key: '103',
    room: '103호',
    status: "Process",
  },{
    key: '104',
    room: '104호',
    status: "Telephone",
  },{
    key: '201',
    room: '201호',
    status: "Available",
  },{
    key: '202',
    room: '202호',
    status: "Available",
  }];

  const tomorrowData: iRoomStatus[] = [{
    key: '101',
    room: '101호',
    status: "Complete",
  },{
    key: '102',
    room: '102호',
    status: "Complete",
  },{
    key: '103',
    room: '103호',
    status: "Complete",
  },{
    key: '104',
    room: '104호',
    status: "Process",
  },{
    key: '201',
    room: '201호',
    status: "Complete",
  },{
    key: '202',
    room: '202호',
    status: "Complete",
  }];

  const calHeaderRender = ({value, type, onChange, onTypeChange}:any)=>{
    const month = value.month();
    const year = value.year();

    return (
      <div style={{padding:8}}>
        <Row justify="center" align="middle" gutter={8}>
          <Col>
            <Button size="small" shape="circle" type="text" icon={<DoubleLeftOutlined />} onClick={()=>{
              const newYear = year - 1;
              const now = value.clone().year(newYear);
              onChange(now);
            }}></Button>
          </Col>
          <Col>
            <Button size="small" shape="circle" type="text" icon={<LeftOutlined />} onClick={()=>{
              const newMonth = month - 1;
              const now = value.clone().month(newMonth);
              onChange(now);
            }}></Button>
          </Col>
          <Col>
            <Title level={4} style={{margin:0}}>{year}.{String(month+1).padStart(2, '0')}</Title>
          </Col>
          <Col>
            <Button size="small" shape="circle" type="text" icon={<RightOutlined />} onClick={()=>{
              const newMonth = month + 1;
              const now = value.clone().month(newMonth);
              onChange(now);
            }}></Button>
          </Col>
          <Col>
            <Button size="small" shape="circle" type="text" icon={<DoubleRightOutlined />} onClick={()=>{
              const newYear = year + 1;
              const now = value.clone().year(newYear);
              onChange(now);
            }}></Button>
          </Col>
        </Row>
      </div>
    )
  }
  useEffect(() => {
    setTimeout(() => {
      setMonthlyData([
        {date: new Date(2021,7,29), color:"#52c41a"},
        {date: new Date(2021,8,1), color:"#1f1f1f"},
        {date: new Date(2021,8,30), color:"#52c41a"},
      ]);  
    }, 3000);
    
  }, []);

  const GetColor = (d:number) => {
    const found = monthlyData.find(x=> x.date.getTime() === d);
    
    if(found){
      return found.color;
    }

    return "default";
  }

  const dateFullCellRender = (date:moment.Moment)=>{
    var d = new Date(date.year(), date.month(), date.date()).getTime();
    return(
      <div style={{width:'100%', height: '100%', padding:'0 5px'}}>
        <Tag color={GetColor(d)} style={{width:'100%', padding: 5, color: GetColor(d) === "default" ? "inherit" : ""}}>{date.date().toString().padStart(2, '0')}</Tag>
      </div>
    );
  }
  return(
    <div>
      <Row gutter={[10,10]}>
        <Col span={24}>
          <Query query={GET_CONTINENTS}>
            {
              ({ loading, error, data }:QueryResult<any, OperationVariables>) => {
                if (loading) return <p>Loading...</p>;
                if (error) return <p>Error!(</p>;
                return (
                  <ul>
                    {
                      data.continents.map(
                        ({ code, name }:any) => (
                          <li key={code}>{name}</li>
                        )
                      )
                    }
                  </ul>
                );
              }
            }
        </Query>
        </Col>
        <Col span={24}>
          <Card title={t('TITLE.RESERVATIONS')}>
            <Column {...config} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
          <Card title={t('TITLE.TODAY_STATUS')}>
            <Table showHeader={false} dataSource={todayData} columns={columns} size="small" pagination={{hideOnSinglePage: true}} />
          </Card>
        </Col>
        <Col xs={24} sm={12} md={12} lg={6} xl={6}>
        <Card title={t('TITLE.TOMORROW_STATUS')}>
            <Table showHeader={false} dataSource={tomorrowData} columns={columns} size="small" pagination={{hideOnSinglePage: true}} />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={24} lg={12} xl={12}>
          <Card title={t('TITLE.MONTHLY_STATUS')}>
            <Calendar 
              fullscreen={false}
              headerRender={calHeaderRender}
              dateFullCellRender={dateFullCellRender} />
              <div>
                <Tag color="#52c41a">일부 예약완료</Tag>
                <Tag color="#1f1f1f">전체 예약완료</Tag>
              </div>
          </Card>
        </Col>
      </Row>
      </div>
  )
}  
export default DashboardPage;
