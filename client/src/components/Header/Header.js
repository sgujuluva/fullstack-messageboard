import React, {useState, useContext} from "react";
import {MessageContext} from "../context.js";
import {Link} from "react-router-dom";
import { Box } from "@mui/system";
import { Alert, Button, IconButton, Tab, Tabs,Typography ,Tooltip, Divider, ListItemIcon, MenuItem, Menu,Avatar } from "@mui/material";
//styles
import style from "../Header/Header.css";

function Header() {
    const { user, handleLogout } = useContext(MessageContext);
    const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={style.mainHeader}>
      <div className={style.headerLeft}>
        {/* <img alt="logo." src={logo} /> */}
        <h1>Message Board</h1>
      </div>
      <div>
        {!user && (
          <Link to="/login">
            <button className={style.button}>Login</button>
          </Link>
        )}
        {user && (
          <React.Fragment>
            <Box
              sx={{
                display: "flex",
                justifyContent:"flex-end",
                alignItems: "center",
                textAlign: "center",
              }}
            >
              <Typography sx={{ mt: 2, minWidth: 100 }}>
                {user.firstname} {user.lastname}
              </Typography>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ mr: 3 }}
                  aria-controls={open ? "account-menu" : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                >
                  <Avatar
                    sx={{ width: 52, height: 52 }}
                    src={user.avatar}
                  ></Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: "visible",
                  filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                  mt: 1.5,
                  "& .MuiAvatar-root": {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  "&:before": {
                    content: '""',
                    display: "block",
                    position: "absolute",
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: "background.paper",
                    transform: "translateY(-50%) rotate(45deg)",
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              {/* <MenuItem onClick={handleLogout}>
                <ListItemIcon>
                  <Logout fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem> */}
            </Menu>
          </React.Fragment>
        )}
      </div>
    </div>
  );
}

export default Header;
