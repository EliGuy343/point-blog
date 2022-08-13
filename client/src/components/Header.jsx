import {styled, Tab, Tabs} from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { logoutUser } from '../store';

const Header = () => {
  const [anchorMenu, setAnchorMenu] = useState(false);
  const [tab, setTab] = useState(false);
  const user = useSelector((state)=>state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOpenUserMenu = (event) => {
    setAnchorMenu(event.currentTarget);
  };
  const handleCloseUserMenu = () => {
    setAnchorMenu(null);
  };
  const onButtonClick = () => {
    setTab(false);
  };
  const onLogoutClick = () => {
    dispatch(logoutUser());
    setAnchorMenu(null);
    localStorage.removeItem('token');
    navigate('/login');
  }

  return (
    <AppBar
      position='sticky'
      sx={{
       backgroundColor:'#65cfb6'
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
            {user.isLoggedIn && 
              <Tabs 
                value={tab}
                onChange={(e, val)=>setTab(val)}
                textColor='inherit'
                TabIndicatorProps={{
                  style: {
                    backgroundColor: 'white', 
                    height: '2px',
                    color:'white'
                  }
                }}
                sx={{ 
                  display:{ xs:'none', md:'flex'},
                  "& button.Mui-selected":{color:'white'}
                }}
              >
                <TabStyled LinkComponent={Link} to='/blogs' label='all blogs'/>
                <TabStyled LinkComponent={Link} to={`/blogs/${user.id}`} label='my blogs'/>
              </Tabs>
            }
          </Box>
          <Box
            sx={{
              justifySelf:'flex-end',
              display:{ xs:'none', md:'flex'}
              }}
          >
          {!user.isLoggedIn && <>
            <ButtonStyled
              LinkComponent={Link}
              to='/login'
              onClick={onButtonClick}
            >
              Login
           </ButtonStyled>
           <ButtonStyled
              LinkComponent={Link}
              to='/register'
              onClick={onButtonClick}
           >
            Register
           </ButtonStyled>
          </>
          }
          {user.isLoggedIn && 
            <ButtonStyled onClick={onLogoutClick}>
              Logout
           </ButtonStyled>
          }
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
              {!user.isLoggedIn && 
                <LinkStyled to='/login' style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Login</Typography>
                  </MenuItem>
                </LinkStyled>
              }
              {!user.isLoggedIn &&
                <LinkStyled to='/register' style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">Register</Typography>
                  </MenuItem>
                </LinkStyled>
              }
              {user.isLoggedIn &&
                <LinkStyled to='/blogs' style={{ textDecoration: 'none' }}>
                  <MenuItem onClick={handleCloseUserMenu}>
                    <Typography textAlign="center">All Blogs</Typography>
                  </MenuItem>
                </LinkStyled>
              }
              {user.isLoggedIn &&
                <MenuItem onClick={handleCloseUserMenu}>
                  <LinkStyled to={`/blogs/${user.id}`} style={{ textDecoration: 'none' }}>
                    <Typography textAlign="center">My Blogs</Typography>
                  </LinkStyled>
                </MenuItem>
              }
              {user.isLoggedIn &&
                <MenuItem onClick={onLogoutClick}>
                    <Typography textAlign="center">Logout</Typography>
                </MenuItem>
              }
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

const TabStyled = styled(Tab)`
  color: white;
  font-weight: 600;
`;

const LinkStyled = styled(Link)`
    text-decoration: none;

    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: inherit;
    }
`;
export default Header;