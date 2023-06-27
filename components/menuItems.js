

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
  } from 'react-icons/md';

const Menus = [
    {
      id: 2,
      label: 'Quick glance',
      icon: <MdAllInclusive />,
      link: '/MyProjects',
      spacing: true,
    },
    {
      id: 3,
      label: "My Projects",
      submenus: [
        {
          id: 31,
          label: 'Add Project',
          icon: <MdNewLabel />,
          link: '/AddProject',
        },
        {
          id: 32,
          label: 'Add Milestones',
          icon: <MdSettingsInputComponent />,
          link: '/AddMilestones',
        },
      ],
      icon: <MdSettings />,
    },
    {
      id: 4,
      label: 'Funding',
      submenus: [
        {
          id: 41,
          label: 'Request For Funding',
          icon: <MdCancelScheduleSend />,
          link: '/RequestFunding',
        },
      ],
      icon: <MdAccountBalanceWallet />,
    },
    {
      id: 5,
      label: 'Milestones',
      submenus: [
        {
          id: 51,
          label: 'Milestones Status',
          icon: <MdCheck />,
          link: '/CompletedMilestones',
        },
        {
          id: 52,
          label: 'Update Milestones',
          icon: <MdNewLabel />,
          link: '/AddMilestones',
        },
      ],
      icon: <MdStorage />,
    },
    {
      id: 6,
      label: 'Repayment',
      icon: <MdPriceCheck />,
      submenus: [
        {
          id: 61,
          label: 'Repay Milestone',
          icon: <MdOutlineMonetizationOn />,
          link: '/RepayMilestone',
        },
        {
          id: 62,
          label: 'Repayments History',
          icon: <MdOutlinePayments />,
          link: '/RepaymentHistory',
        },
      ],
    },
  ];

export default Menus;

