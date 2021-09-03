import { Menu } from 'antd';
import { FC } from 'react'
import { useHistory } from 'react-router-dom';

interface Props {
    Navigated?:()=>void;
}

const Navigation:FC<Props> = ({Navigated, ...props}:Props)=> {
    var history = useHistory();

    const go = (url:string)=>{
        history.push(url);
        Navigated?.();
    }

    return (
    <Menu selectable={false} forceSubMenuRender={true} defaultOpenKeys={["1000","2000","3000","4000"]}
     theme="dark" mode="inline">
         <Menu.Item key="0" onClick={()=>go("/")}>DASHBOARD</Menu.Item>
         <Menu.SubMenu key="1000" title="예약관리">
            <Menu.Item key="1001" onClick={()=>go("/rsvnmgr/req")}>예약신청목록</Menu.Item>
            <Menu.Item key="1002">수기예약생성</Menu.Item>
            <Menu.Item key="1003" onClick={()=>go("/rsvnmgr/daily")}>일자별예약관리</Menu.Item>
            <Menu.Item key="1004">월별예약관리</Menu.Item>
            <Menu.Item key="1005">방막기/풀기</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="2000" title="시즌/요금관리">
            <Menu.Item key="2001">시즌/요금설정</Menu.Item>
            <Menu.Item key="2002">공휴일관리</Menu.Item>
            <Menu.Item key="2003">요일변경</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="3000" title="객실관리">
            <Menu.Item key="3001">객실관리</Menu.Item>
            <Menu.Item key="3002">사진관리</Menu.Item>
        </Menu.SubMenu>
        <Menu.SubMenu key="4000" title="숙소정보">
            <Menu.Item key="4001">숙소상세정보</Menu.Item>
            <Menu.Item key="4002">이용시설</Menu.Item>
        </Menu.SubMenu>
    </Menu>);
}

export default Navigation