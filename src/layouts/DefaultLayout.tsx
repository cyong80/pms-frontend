import { Drawer, Divider, Layout, Select, Menu } from "antd";
import { FC, useState } from "react";
import { useTranslation } from "react-i18next";
import Hamburger from '../components/Hamburger';
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

const DefaultLayout: FC = (props) => {
    const{t, i18n } = useTranslation();
    
    const [isOpen, Toggle] = useState(true);

    const handleChangeLanguage = (lang:string) => {
        i18n.changeLanguage(lang);
      }

    return (
        
        <Layout style={{ width: '100%', minHeight: '100%', display: "flex" }}>
            <Header style={{ position: 'fixed', padding: '0 20px 0 5px', width: '100%', display:"flex", alignItems: 'center', justifyContent: 'space-between', background:'#FFFFFF', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <span>
                    <Hamburger dark={true} left={true} isOpen={isOpen} isMini={false} toggle={()=>Toggle(!isOpen)}></Hamburger>
                    XXX
                </span>
                <span>
                    <Select defaultValue={i18n.language} style={{width:100}} onChange={handleChangeLanguage}>
                        <Option value="en">{t('language_en')}</Option>
                        <Option value="ko">{t('language_ko')}</Option>
                    </Select>
                </span>
            </Header>
            <Layout>
                <Sider collapsedWidth={0} trigger={null} collapsible collapsed={!isOpen} style={{overflow: 'auto', position:'fixed', left: 0, height: '100%', marginTop: 64}}>
                    <Menu theme="dark" mode="inline">
                        <Menu.SubMenu key="1" title="객실관리">
                            <Menu.Item key="2">고장 객실 관리</Menu.Item>
                            <Menu.Item key="3">객실 점검</Menu.Item>
                        </Menu.SubMenu>
                    </Menu>
                </Sider>
                <Content style={{ paddingTop: 64, paddingLeft: isOpen ? 200 : 0 }}>
                    {props.children}
                </Content>
            </Layout>
            <Divider style={{ margin: 0 }}></Divider>
            <Footer style={{ textAlign: 'center', paddingLeft: isOpen ? 200 : 0  }}>ⓒ 2021 XXX, All rights reserved.</Footer>
        </Layout>
    );
}
  
export default DefaultLayout;
