import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import MyProjectsPage from './components/MyProjectsPage';
import AddProjectPage from './components/AddProjectPage';
import AddMilestonesPage from './components/AddMilestonesPage';
import RequestFundingPage from './components/RequestFundingPage';
import CompletedMilestonesPage from './components/CompletedMilestonesPage';
import RepayMilestonePage from './components/RepayMilestonePage';
import RepaymentHistoryPage from './components/RepaymentHistoryPage';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/MyProjects" component={MyProjectsPage} />
      <Route path="/AddProject" component={AddProjectPage} />
      <Route path="/AddMilestones" component={AddMilestonesPage} />
      <Route path="/RequestFunding" component={RequestFundingPage} />
      <Route path="/CompletedMilestones" component={CompletedMilestonesPage} />
      <Route path="/RepayMilestone" component={RepayMilestonePage} />
      <Route path="/RepaymentHistory" component={RepaymentHistoryPage} />
    </Switch>
  );
};

export default Routes;
