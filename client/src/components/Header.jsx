import {styled} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';

const Header = () => {
  const [anchorMenu, setAnchorMenu] = useState(false);
  const handleOpenUserMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  
  const handleCloseUserMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <AppBar
     sx={{
      background:'linear-gradient(90deg, rgba(77, 76, 76, 1) 2%, rgba(166, 165, 164, 1) 36%, rgba(77, 76, 76, 1) 100%)',
     }}
    >
      <Container maxWidth='x1'>
        <Toolbar disableGutters sx={{justifyContent:'space-between'}}>
          <Box
            sx={{
              display:'flex',
              flexDirection:'row',
              alignItems:'center'
            }}
          >
            <LightbulbIcon
              sx={{
                display:'flex',
                mr:1,
                color:'#fcea97'
              }}
            />
            <Typography
              variant='h6'
              noWrap
              href='/'
              sx={{
                mr: 2,
                display: 'flex',
                fontFamily: 'monospace',
                fontWeight: 700,
                letterSpacing: '.2rem',
                textDecoration: 'none',
              }}
            >
              POINT BLOG
            </Typography>
          </Box>
          <Box
          sx={{
            justifySelf:'flex-end',
            display:{ xs:'none', md:'flex'}
            }}
        >
          <ButtonStyled>
            Login
          </ButtonStyled>
          <ButtonStyled>
            Register
          </ButtonStyled>
        </Box>
        <Box 
          sx={{ 
              flexGrow: 0,
              display:{ xs:'flex', md:'none'}
            }}
        >
          <Tooltip title="Open settings">
            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              <MenuIcon
                sx={{
                  color:'white'
                }}
              />
            </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorMenu)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Login</Typography>
              </MenuItem>
              <MenuItem onClick={handleCloseUserMenu}>
                <Typography textAlign="center">Register</Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

const ButtonStyled = styled(Button)`
  padding: 5px;
  border-radius: 5px;
  margin: 5px;
  font-size: 12px;
  color: black;
  background-color: white;
  &:hover {
    background-color: #a19d9d;
  }
`;
export default Header;