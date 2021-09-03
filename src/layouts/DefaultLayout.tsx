import { Layout, Select, Drawer } from "antd";
import { FC, useState } from 'react';
import { useTranslation } from "react-i18next";

import Hamburger from '../components/Hamburger';
import Navigation from "../components/Navigation";
const { Header, Content, Footer, Sider } = Layout;
const { Option } = Select;

const DefaultLayout: FC = (props) => {
    const{t, i18n } = useTranslation();

    const [isOpen, SetIsOpen] = useState(true);
    const [isDrawerOpen, SetIsDrawerOpen] = useState<boolean>(false);
    const [showDrawer, SetShowDrawer] = useState<boolean>(false);
    
    const Toggle = ()=>{
        if(showDrawer){
            SetIsDrawerOpen(!isDrawerOpen);
        }
        else{
            SetIsOpen(!isOpen);
        }
    }
    const handleBreakpoint = (broken:boolean) =>{
        SetShowDrawer(broken);
        if(broken === isOpen){
            SetIsOpen(!broken);
            SetIsDrawerOpen(false);
        }
    }

    const handleChangeLanguage = (lang:string) => {
        i18n.changeLanguage(lang);
    }

    const locale = i18n.language.substring(0,2); /* browser detected 일 경우 'en-US', 'ko-KR' 형태이기 때문에 앞에 2자리만 사용 */
    return (
        
        <Layout style={{ width: '100%', minHeight: '100%', display: "flex" }}>
            <Header style={{ zIndex:2, position: 'fixed', padding: '0 20px', width: '100%', display:"flex", alignItems: 'center', justifyContent: 'space-between', background:'#FFFFFF', borderBottom: '1px solid rgba(0, 0, 0, 0.06)' }}>
                <span>
                    <Hamburger left={true} isOpen={isOpen} onToggle={()=>Toggle()}></Hamburger>
                    XXX
                </span>
                <span>
                    <Select defaultValue={locale} style={{width:100}} onChange={handleChangeLanguage}>
                        <Option value="en">{t('language_en')}</Option>
                        <Option value="ko">{t('language_ko')}</Option>
                    </Select>
                </span>
            </Header>
            <Drawer
                placement="left"
                onClose={()=>SetIsDrawerOpen(false)}
                visible={isDrawerOpen}
                closable={false}
                style={{display: showDrawer? "block" : "none"}}
                bodyStyle={{background:'#001529'}}>
                <Navigation Navigated={()=>SetIsDrawerOpen(false)} />
            </Drawer>
            <Layout>
                <Sider breakpoint="md" onBreakpoint={handleBreakpoint} collapsedWidth={0} trigger={null} collapsible collapsed={!isOpen} style={{display: showDrawer ? "none" : "block", zIndex:1, overflow: 'auto', position:'fixed', left: 0, height:'calc(100% - 64px)', marginTop: 64}}>
                    <Navigation />
                </Sider>
                <Content style={{ paddingTop: 84, paddingLeft: isOpen && !showDrawer ? 220 : 20, paddingRight: 20, paddingBottom: 20, display: 'flex', width:'100%', flexDirection:'column' }}>
                    <div style={{flex: 1}}>
                        {props.children}
                    </div>
                </Content>
            </Layout>
            <Footer style={{ textAlign: 'center', paddingLeft: isOpen ? 200 : 0  }}>ⓒ 2021 XXX, All rights reserved.</Footer>
        </Layout>
    );
}
  
export default DefaultLayout;
