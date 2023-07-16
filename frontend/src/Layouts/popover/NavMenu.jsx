import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import styles from "./Popover.module.css"
import {FiSettings} from "react-icons/fi"
import { IoMdLogOut } from 'react-icons/io';
import { useDispatch } from 'react-redux';
import { logoutApi } from '../../utils/apis/user/userApi';
import { logoutUser } from '../../redux/actions/userAction';
import { setToastifyInfo } from '../../redux/actions/otherAction';
import {  useNavigate } from 'react-router-dom';
export default function NavMenu({children}) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const disptach = useDispatch()
  const open = Boolean(anchorEl);
  const navigate = useNavigate()

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

    const handleLogout = async () => {
        try {
            await logoutApi()
            disptach(logoutUser());
            disptach(setToastifyInfo({
                text: "Logged out successfully",
                type: "success"
            }))
        } catch (error) {
            console.log(error)
            disptach(setToastifyInfo({
                text: "Failded to logout",
                type: "error"
            }))
        }
        setAnchorEl(null)



    }
  return (
    <>
      <div
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        >
        {children}
      </div>
      <Menu
style={{padding:0}}
id="demo-positioned-menu"
aria-labelledby="demo-positioned-button"
anchorEl={anchorEl}
open={open}
onClose={handleClose}
anchorOrigin={{
    vertical: 'top',
    horizontal: 'left',
}}
transformOrigin={{
    vertical: 'top',
    horizontal: 'left',
}}
>
        <MenuItem 

        className={styles.menuItem}
            style={{background:"red"}}
        //   className={styles.menuNav}
        onClick={()=>navigate("/setting")}
        >
          <FiSettings/>
          <p>SETTING</p>
        </MenuItem>
        {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
        <MenuItem
        className={styles.menuItem}
        onClick={handleLogout}>
             <IoMdLogOut/>
          <p>LOGOUT</p>
        </MenuItem>
      </Menu>
    </>
  );
}
