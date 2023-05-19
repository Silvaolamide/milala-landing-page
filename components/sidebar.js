import React from 'react';
import { Sidebar } from 'flowbite-react';
import { HiChartPie, HiShoppingBag, HiInbox, HiUser, HiArrowSmRight, HiTable } from 'react-icons/hi';
import dynamic from "next/dynamic";
const Dboard = () => {
  return (
    <div>
      <div class="sidebar fixed -ml-10  w-200px mt-20 bg-gray-950 rounded-md p-10">
        <Sidebar aria-label="Sidebar with multi-level dropdown example">
          <Sidebar.Items>
            <Sidebar.ItemGroup>
              <Sidebar.Item href="#" icon={HiChartPie}>
                <h3 class="text-xl font-semibold text-gray-800">Dashboard</h3>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiInbox}>
                <h3 class="text-xl font-semibold text-gray-800">Inbox</h3>
              </Sidebar.Item>
              <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Products</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Products</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Collapse icon={HiShoppingBag} label="E-commerce">
                <Sidebar.Item href="#">
                  <h3 class="text-xl font-semibold text-gray-800">Products</h3>
                </Sidebar.Item>
              </Sidebar.Collapse>
              <Sidebar.Item href="#" icon={HiUser}>
                <h3 class="text-xl font-semibold text-gray-800">Users</h3>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiShoppingBag}>
                <h3 class="text-xl font-semibold text-gray-800">Products</h3>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiArrowSmRight}>
                <h3 class="text-xl font-semibold text-gray-800">Sign In</h3>
              </Sidebar.Item>
              <Sidebar.Item href="#" icon={HiTable}>
                <h3 class="text-xl font-semibold text-gray-800">Sign Up</h3>
              </Sidebar.Item>
            </Sidebar.ItemGroup>
          </Sidebar.Items>
        </Sidebar>
      </div>
     
    </div>
  );
};

export default dynamic (() => Promise.resolve(Dboard), {ssr: false})