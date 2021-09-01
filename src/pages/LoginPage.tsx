import { FC } from "react";
import { Typography, Card, Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import { useHistory } from "react-router-dom";
const { Title } = Typography;

const LoginPage: FC = () => {
  const history = useHistory();
  const onFinish = (values: any) => {
    history.push("/");
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (<div style={{
    display: 'flex', width: '100%', height: '100%', justifyContent: 'center', alignItems: 'center', background: '#E6EEFF',
  }}
  >
    <Card style={{ width: 500 }} bodyStyle={{ paddingLeft: 50, paddingRight: 50, paddingBottom: 50 }}>
      <div style={{ textAlign: 'center', paddingBottom: 50 }}>
        <Title style={{ color: '#324567' }} level={3}>
          Sign In
        </Title>
        <span style={{ color: '#A1B3D2' }}>Enter your credentials to access your account.</span>
      </div>
      <Form 
        name="form" 
        initialValues={{ id: '', pw: '' }} 
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}>
        <Form.Item name="id" rules={[{ required: true, message: 'Please input your id!' }]}>
          <Input autoComplete="off" prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ID" />
        </Form.Item>
        <Form.Item name="pw" rules={[{ required: true, message: 'Please input your password!' }]}>
          <Input prefix={<LockOutlined className="site-form-item-icon" />} type="password" placeholder="Password" />
        </Form.Item>
        <Button type="primary" htmlType="submit" block size="large">
          SIGN IN
        </Button>
      </Form>
    </Card>
  </div>
)};

export default LoginPage;
