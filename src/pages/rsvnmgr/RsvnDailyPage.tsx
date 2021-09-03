import { Row, Col, Card, DatePicker, Button, Space, Table } from "antd";
import { FC, useState } from "react";
import { useTranslation } from 'react-i18next';
import moment from 'moment';

const RsvnDailyPage: FC = () => {
  const {t} =useTranslation();
  const today = new Date();
  const [date, setDate] = useState<moment.Moment>(moment(today));

  const setToday = ()=>{
    setDate(moment(today));
  }

  function onChange(value:any, dateString:any) {
    setDate(value);
  }
  const columns = [
    {
      dataIndex: 'room',
      key: 'room',
      title: '객실',
    },
    {
      dataIndex: 'status',
      key: 'status',
      title: '예약상태',
    },
    {
      dataIndex: 'occupied',
      key: 'occupied',
      title: '입실여부',
    },
    {
      dataIndex: 'no',
      key: 'no',
      title: '예약번호',
    },
    {
      dataIndex: 'name',
      key: 'name',
      title: '예약자',
    },
    {
      dataIndex: 'personCnt',
      key: 'personCnt',
      title: '인원',
    },
    {
      dataIndex: 'guestRemark',
      key: 'guestRemark',
      title: '요청메모',
    },
  ]

  var data:any[] = [
    {key: "1", room : "1" },
    {key: "2", room : "2" },
    {key: "3", room : "3" },
    {key: "4", room : "4" },
    {key: "5", room : "5" },
    {key: "6", room : "6" },
    {key: "7", room : "7" },
    {key: "8", room : "8" },
    {key: "9", room : "9" },
    {key: "10", room : "10" },
    {key: "11", room : "11" },
    {key: "12", room : "12" },
    {key: "13", room : "13" },
    {key: "14", room : "14" },
    {key: "15", room : "15" },
    {key: "16", room : "16" },
    {key: "17", room : "17" },
    {key: "18", room : "18" },
    {key: "19", room : "19" },
  ];

  return(
      <Row gutter={[10,10]} style={{height: "100%", flexDirection:"column"}}>
        <Col>
          <Card title="일자별예약관리">
            <Row gutter={[10,10]}>
              <Col>
                <DatePicker value={date} onChange={onChange} />
              </Col>
              <Col>
                <span style={{paddingLeft: 10}}>오늘 : {moment(today).format("yyyy-MM-DD")}</span>
              </Col>
              <Col span={24}>
                <Space wrap>
                  <Button onClick={()=>setToday()}>오늘보기</Button>
                  <Button onClick={()=>setToday()}>어제보기</Button>
                  <Button onClick={()=>setToday()}>내일보기</Button>
                  <Button onClick={()=>setToday()}>이번주 토요일 보기</Button>
                </Space>
              </Col>
            </Row>
          </Card>
        </Col>
        <Col flex="1 1 0%">
          <Card style={{height:"100%"}} bodyStyle={{height:"100%"}}>
            <Table dataSource={data} columns={columns} size="small" pagination={{hideOnSinglePage: true,pageSize: 1000 }} />
          </Card>
        </Col>
      </Row>
  )
}  
export default RsvnDailyPage;
