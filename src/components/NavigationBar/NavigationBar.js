import React, {useState} from 'react';
import Logo from './skinpactful_logo_white.png';
// import {BsCart2} from 'react-icons/bs';
import {IconContext} from 'react-icons';
import {HiOutlineBars3} from 'react-icons/hi2';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import InfoIcon from '@mui/icons-material/Info';
import PhoneRoundedIcon from '@mui/icons-material/PhoneRounded';
import {Link} from 'react-router-dom';
// import {Routes, Route, Link} from 'react-router-dom';
// // import HomePage from '../HomePage/HomePage';
// import AboutPage from '../AboutPage/AboutPage';
// import AppointmentForm from '../AppointmentForm/AppointmentForm';

const NavigationBar = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const menuOptions = [
    {
      text: 'Home',
      icon: <HomeIcon />,
    },
    {
      text: 'About',
      icon: <InfoIcon />,
      path: '/about',
    },
    {
      text: 'Contact',
      icon: <PhoneRoundedIcon />,
    },
  ];
  return (
    <nav>
      <div className="navbar-container">
        <div className="nav-logo-container">
          <img src={Logo} alt="" />
        </div>
        <div className="navbar-links-container">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <a href="/contact">Contact</a>

          <Link
            to="https://calendly.com/inaniwin/30min" //need to change to tommy's calender link
            target="_blank"
            rel="noopener noreferrer">
            <button className="primary-button">Schedule Now</button>
          </Link>
        </div>
      </div>
      <div className="navbar-menu-container">
        <IconContext.Provider value={{color: 'black', size: '50px'}}>
          <HiOutlineBars3 onClick={() => setOpenMenu(true)} />
        </IconContext.Provider>
      </div>
      <Drawer open={openMenu} onClose={() => setOpenMenu(false)} anchor="right">
        <Box
          sx={{width: 250}}
          role="presentation"
          onClick={() => setOpenMenu(false)}
          onKeyDown={() => setOpenMenu(false)}>
          <List>
            {menuOptions.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton component={Link} to={item.path}>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider />
        </Box>
      </Drawer>
      {/* <Routes>
        <Route path="/about" element={<AboutPage />} />
      </Routes> */}
    </nav>
  );
};
// <div className="header">
//   <div className="logo">
//     <h1>Skinpactful</h1>
//   </div>
// {
//   /* <BrowserRouter> */
// }
// // <nav className="navigation">
// //   <ul>
// //     <li>
// //       <Link to="/">
// //         <h2>Home</h2>
// //       </Link>
// //     </li>
// //     <li>
// //       <Link to="/appointment">
// //         <h2>Appointment</h2>
// //       </Link>
// //     </li>
// //   </ul>
// // </nav>

// // <Routes>
// //   <Route path="/" element={<HomePage />} />
// //   <Route path="/appointment" element={<AppointmentForm />} />
// // </Routes>
// {
//   /* </BrowserRouter> */
// }
// </div>

export default NavigationBar;
