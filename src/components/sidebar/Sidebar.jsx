import './sidebar.css';
import LineStyleRoundedIcon from '@mui/icons-material/LineStyleRounded';
import TimelineRoundedIcon from '@mui/icons-material/TimelineRounded';
import TrendingUpRoundedIcon from '@mui/icons-material/TrendingUpRounded';
import PermIdentityRoundedIcon from '@mui/icons-material/PermIdentityRounded';
import StorefrontRoundedIcon from '@mui/icons-material/StorefrontRounded';
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded';
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import DynamicFeedRoundedIcon from '@mui/icons-material/DynamicFeedRounded';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import WorkOutlineRoundedIcon from '@mui/icons-material/WorkOutlineRounded';
import ReportRoundedIcon from '@mui/icons-material/ReportRounded';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='sidebarWrapper'>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Dashboard</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem active'>
              <LineStyleRoundedIcon className='sidebarIcon ' fontSize='large' />
              Home
            </li>
            <li className='sidebarListItem'>
              <TimelineRoundedIcon className='sidebarIcon' fontSize='large' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <TrendingUpRoundedIcon className='sidebarIcon' fontSize='large' />
              Sales
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Quick Menu</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <PermIdentityRoundedIcon
                className='sidebarIcon'
                fontSize='large'
              />
              Users
            </li>
            <li className='sidebarListItem'>
              <StorefrontRoundedIcon className='sidebarIcon' fontSize='large' />
              Products
            </li>
            <li className='sidebarListItem'>
              <AttachMoneyRoundedIcon
                className='sidebarIcon'
                fontSize='large'
              />
              Transactions
            </li>
            <li className='sidebarListItem'>
              <BarChartRoundedIcon className='sidebarIcon' fontSize='large' />
              Reports
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Notifications</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <MailOutlineRoundedIcon
                className='sidebarIcon'
                fontSize='large'
              />
              Mail
            </li>
            <li className='sidebarListItem'>
              <DynamicFeedRoundedIcon
                className='sidebarIcon'
                fontSize='large'
              />
              Feedback
            </li>
            <li className='sidebarListItem'>
              <ChatBubbleOutlineRoundedIcon
                className='sidebarIcon'
                fontSize='large'
              />
              Messages
            </li>
          </ul>
        </div>
        <div className='sidebarMenu'>
          <h3 className='sidebarTitle'>Staff</h3>
          <ul className='sidebarList'>
            <li className='sidebarListItem'>
              <WorkOutlineRoundedIcon
                className='sidebarIcon'
                fontSize='large'
              />
              Manage
            </li>
            <li className='sidebarListItem'>
              <TimelineRoundedIcon className='sidebarIcon' fontSize='large' />
              Analytics
            </li>
            <li className='sidebarListItem'>
              <ReportRoundedIcon className='sidebarIcon' fontSize='large' />
              Reports
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
