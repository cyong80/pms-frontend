import { FC } from "react";
import { Switch, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import DashboardPage from './pages/DashboardPage';
import RsvnReqPage from './pages/rsvnmgr/RsvnReqPage';
import RsvnDailyPage from './pages/rsvnmgr/RsvnDailyPage';

const App: FC = () => {
  return(
    <DefaultLayout>
      <Switch>
        <Route path={ '/' } exact component={DashboardPage} />
        <Route path={ '/rsvnmgr/req' } exact component={RsvnReqPage} />
        <Route path={ '/rsvnmgr/daily' } exact component={RsvnDailyPage} />
      </Switch>
    </DefaultLayout>
  )
}  
export default App;
