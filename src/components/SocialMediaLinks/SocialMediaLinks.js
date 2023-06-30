import React from 'react';
import {Box, Typography} from '@mui/material';
import {Link} from 'react-router-dom';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import './SocialMediaLinks.css';

const SocialMediaLinks = () => {
  const linkStyles = {
    textDecoration: 'none', // Removes the underline
    color: 'inherit', // Inherits the color from the parent
  };
  return (
    <div className="socialMediaContainer">
      <Box display="flex" alignItems="center">
        <Link
          to="https://www.facebook.com/people/Skinpactful-Coaching/100094029978273/"
          style={linkStyles}>
          <FacebookIcon sx={{fontSize: 30, marginRight: '0.5rem'}} />
        </Link>
        <Typography variant="h6">
          <Link
            to="https://www.facebook.com/people/Skinpactful-Coaching/100094029978273/"
            style={linkStyles}>
            Facebook
          </Link>
        </Typography>
      </Box>
      <Box display="flex" alignItems="center">
        <Link
          to="https://www.instagram.com/skinpactful_coaching/"
          style={linkStyles}>
          <InstagramIcon sx={{fontSize: 30, marginRight: '0.5rem'}} />
        </Link>
        <Typography variant="h6">
          <Link
            to="https://www.instagram.com/skinpactful_coaching/"
            style={linkStyles}>
            Instagram
          </Link>
        </Typography>
      </Box>
    </div>
  );
};

export default SocialMediaLinks;
