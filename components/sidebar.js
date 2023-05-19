import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiInbox, HiUser, HiArrowSmRight, HiTable } from 'react-icons/hi';
import dynamic from "next/dynamic";
const Dboard = () => {
  return (
    <div>
      <div class="sidebar fixed ml-10  w-200px mt-20 bg-gray-950 rounded-md p-10">
        <Sidebar aria-label="">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                <h3 class="text-xl font-semibold text-gray-800">Projects Management</h3>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                <h3 class="text-xl font-semibold text-gray-800">My Projects</h3>
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="Projects' Management">
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Add Project</h3>
                </Sidebar.Item>
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Update Project Milestones</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={HiShoppingBag} label="Funding">
                
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Request For Funding</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={HiShoppingBag} label="Milestones">
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Completed Milestones</h3>
                </Sidebar.Item>
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Add Milestones</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={HiShoppingBag} label="Repayment">
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Repay Milestone</h3>
                </Sidebar.Item>
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Repayments History</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              
              
             
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
     
    </div>
  );
};

export default dynamic (() => Promise.resolve(Dboard), {ssr: false})