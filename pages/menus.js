const Menus = [
    {
id: 2,
label: 'My Projects',
icon: MdAllInclusive,
link: '/my-projects',
spacing: true,
},
{
id: 3,
label: "Projects' Management",
submenus: true,
icon: MdSettings,
submenus: [
  {
    id: 31,
    label: 'Add Project',
    icon: MdNewLabel,
    link: '/AddProject',
  },
  {
    id: 32,
    label: 'Add Milestones',
    icon: MdSettingsInputComponent,
    link: '/AddMilestones',
  },
],
},
{
id: 4,
label: 'Funding',
submenus: true,
icon: MdAccountBalanceWallet,
submenus: [
  {
    id: 41,
    label: 'Request For Funding',
    icon: MdCancelScheduleSend,
    link: '/RequestFunding',
  },
],
},
{
id: 5,
label: 'Milestones',
submenus: true,
icon: MdStorage,
submenus: [
  {
    id: 51,
    label: 'Completed Milestones',
    icon: MdCheck,
    link: '/CompletedMilestones',
  },
  {
    id: 52,
    label: 'Update Milestones',
    icon: MdNewLabel,
    link: '/add-milestones',
  },
],
},
{
id: 6,
label: 'Repayment',
icon: MdPriceCheck,
submenus: true,
submenus: [
  {
    id: 61,
    label: 'Repay Milestone',
    icon: MdOutlineMonetizationOn,
    link: '/repay-milestone',
  },
  {
    id: 62,
    label: 'Repayments History',
    icon: MdOutlinePayments,
    link: '/repayment-history',
  },
],
},
];
