import { 
  AppBar, 
  Toolbar, 
  Box, 
  Button, 
  Avatar,
  Container,
  Menu,
  MenuItem
} from '@mui/material';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Navbar = () => {
  // Add state for menu
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  
  // Handle menu open
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  // Handle menu close
  const handleClose = () => {
    setAnchorEl(null);
  };

  // Menu items array
  const menuItems = ['Home', 'Products', 'Resources', 'Pricing'];

  return (
    <AppBar 
      position="static" 
      color="transparent" 
      elevation={0}
      sx={{
        width:"100%",
        borderBottom: '1px solid #e0e0e0',
        display:{xs:"flex"},
        justifyContent:{xs:"space-evenly"},
        alignItems:{xs:"flex-end"}
      }}
    >
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          {/* Logo */}
          <Box sx={{ flexGrow: 0 }}>
            <img 
              src="/images/company_logo.png" 
              alt="Logo" 
              style={{ height: 40 }}
            />
          </Box>

          {/* Navigation Links */}
          <Box sx={{ 
            flexGrow: 1, 
            display: { lg: "flex", md: "flex", sm: "flex", xs:"none"}, 
            justifyContent: 'center', 
            gap: 4 
            }}>
            <Button color="inherit">Home</Button>
            <Button color="inherit">Products</Button>
            <Button color="inherit">Resources</Button>
            <Button color="inherit">Pricing</Button>
          </Box>

          {/* Modified MenuIcon section */}
          <Box sx={{
            display:{lg:"none",md:"none",sm:"none",xs:"flex"},
            ml:{xs:"80%"},
            mr:{xs:"20px"}
          }}>
            <IconButton
              onClick={handleClick}
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <MenuIcon />
            </IconButton>
            
            {/* Add Menu component */}
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              {menuItems.map((item) => (
                <MenuItem key={item} onClick={handleClose}>
                  {item}
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 0, display:{lg:"flex",md:"flex",sm:"flex",xs:"none"} }}>
            <Avatar 
              src="https://i.pravatar.cc/300" 
              alt="User photo" 
            />
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;