import React from 'react';
import { Sidebar } from 'flowbite-react';
import {
  FaChartPie,
  FaShoppingBag,
  FaInbox,
  FaUser,
  FaArrowRight,
  FaTable,
  FaCheckCircle,
  FaMinusCircle,
  FaPlusCircle,
  FaEdit,
  FaHistory,
} from 'react-icons/fa';

import dynamic from "next/dynamic";

import MyProjects from '../pages/MyProjects';
import AddProject from '../pages/AddProject';
import UpdateMilestones from '../pages/UpdateMilestones';
import RequestFunding from '../pages/RequestFunding';
import CompletedMilestones from '../pages/CompletedMilestones';
import AddMilestones from '../pages/AddMilestones';
import RepayMilestone from '../pages/RepayMilestone';
import RepaymentHistory from '../pages/RepaymentHistory';

const Dboard = () => {
  return (
    <div>
      <div className="sidebar font-lg fixed ml-10 w-200px mt-20 bg-gray-950 rounded-md p-10">
        <Sidebar aria-label="">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={FaChartPie}>
                <h3 className="text-xl font-semibold text-gray-800">Projects Management</h3>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={FaInbox}>
                <h3 className="text-xl font-semibold text-gray-800">My Projects</h3>
              </Sidebar.Item>
              <Sidebar.Collapse icon={FaShoppingBag} label="Projects' Management">
                <Sidebar.Item href="#" icon={FaPlusCircle}>
                  <h3 className="text-xl font-semibold text-gray-800">Add Project</h3>
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={FaEdit}>
                  <h3 className="text-xl font-semibold text-gray-800">Update Project Milestones</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={FaCheckCircle} label="Funding">
                <Sidebar.Item href="#" icon={FaPlusCircle}>
                  <h3 className="text-xl font-semibold text-gray-800">Request For Funding</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={FaMinusCircle} label="Milestones">
                <Sidebar.Item href="#" icon={FaCheckCircle}>
                  <h3 className="text-xl font-semibold text-gray-800">Completed Milestones</h3>
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={FaPlusCircle}>
                  <h3 className="text-xl font-semibold text-gray-800">Add Milestones</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={FaArrowRight} label="Repayment">
                <Sidebar.Item href="#" icon={FaCheckCircle}>
                  <h3 className="text-xl font-semibold text-gray-800">Repay Milestone</h3>
                </Sidebar.Item>
                <Sidebar.Item href="#" icon={FaHistory}>
                  <h3 className="text-xl font-semibold text-gray-800">Repayments History</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
    </div>
  );
};

export default dynamic(() => Promise.resolve(Dboard), { ssr: false });
