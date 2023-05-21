import React from 'react';
import { Sidebar } from 'flowbite-react';
import { useRouter } from 'next/router';
import { Flowbite } from 'flowbite-react';
import {
  MdOutlineTune,
  MdAllInclusive,
  MdSettings,
  MdNewLabel,
   MdAccountBalanceWallet,
  MdOutlinePayments,
  MdSettingsInputComponent,
  MdCancelScheduleSend,
  MdPriceCheck,
  MdStorage,
  MdCheck,
  MdOutlineMonetizationOn
} from "react-icons/md";



import dynamic from 'next/dynamic';
import Image from 'next/image';
import Link from 'next/link';
import MyProjects from '../pages/MyProjects';
import AddProject from '../pages/AddProject';
import UpdateMilestones from '../pages/UpdateMilestones';
import RequestFunding from '../pages/RequestFunding';
import CompletedMilestones from '../pages/CompletedMilestones';
import AddMilestones from '../pages/AddMilestones';
import RepayMilestone from '../pages/RepayMilestone';
import RepaymentHistory from '../pages/RepaymentHistory';

const Dboard = () => {
  const router = useRouter();

  const renderPage = () => {
    const { pathname } = router;

    switch (pathname) {
      case '/':
        return <MyProjects />;
      case '/AddProject':
        return <AddProject />;
      case '/UpdateMilestones':
        return <UpdateMilestones />;
      case '/RequestFunding':
        return <RequestFunding />;
      case '/CompletedMilestones':
        return <CompletedMilestones />;
      case '/AddMilestones':
        return <AddMilestones />;
      case '/RepayMilestone':
        return <RepayMilestone />;
      case '/RepaymentHistory':
        return <RepaymentHistory />;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="sidebar left-0 font-xl fixed -ml-4 w-200px rounded-xl mt-20 p-10">
        <Sidebar aria-label="">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="/" icon={MdOutlineTune}>
                <h1 className="text-xl font-semibold text-black ml-3 ">Projects Management</h1>
              </Sidebar.Item>
              <Sidebar.Item href="/my-projects" icon={MdAllInclusive}>
                <h3 className="text-xl font-semibold text-black ml-3">My Projects</h3>
              </Sidebar.Item>
              <Sidebar.Collapse icon={MdSettings} label="Projects' Management">
                <Sidebar.Item href="/AddProject" icon={MdNewLabel}>
                  <h3 className="text-xl font-semibold text-black ml-3">Add Project</h3>
                </Sidebar.Item>
                <Sidebar.Item href="/update-milestones" icon={MdSettingsInputComponent}>
                  <h3 className="text-xl font-semibold text-black ml-3">Update Project Milestones</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={MdAccountBalanceWallet} label="Funding">
                <Sidebar.Item href="/request-funding" icon={MdCancelScheduleSend}>
                  <h3 className="text-xl font-semibold text-black ml-3">Request For Funding</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={MdStorage} label="Milestones">
                <Sidebar.Item href="/completed-milestones" icon={MdCheck}>
                  <h3 className="text-xl font-semibold text-black ml-3">Completed Milestones</h3>
                </Sidebar.Item>
                <Sidebar.Item href="/add-milestones" icon={MdNewLabel}>
                  <h3 className="text-xl font-semibold text-black ml-3 ">Add Milestones</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={MdPriceCheck} label="Repayment">
                <Sidebar.Item href="/repay-milestone" icon={MdOutlineMonetizationOn}>
                  <h3 className="text-xl font-semibold text-gray-900 ml-3">Repay Milestone</h3>
                </Sidebar.Item>
                <Sidebar.Item href="/repayment-history" icon={MdOutlinePayments}>
                  <h3 className="text-xl font-semibold text-black ml-3">Repayments History</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
      <div className="content ml-220px">
        {renderPage()}
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Dboard), { ssr: false });
