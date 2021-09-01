import { FC } from "react";
import { useTranslation } from 'react-i18next';
import DefaultLayout from "../layouts/DefaultLayout";
import {Button} from 'antd'

const DashboardPage: FC = () => {
  const {t} =useTranslation();
  return(
    <DefaultLayout>
      <div style={{height:'1000px'}}>
        <p>{t('hello')}</p>
      </div>
    </DefaultLayout>
  )
}  
export default DashboardPage;
