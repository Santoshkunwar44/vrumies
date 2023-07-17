import React from 'react'
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

const SearchUser = ({usersArr,isOpen}) => {
      const [anchorEl, setAnchorEl] = React.useState(null);
    //   const [o ]
      const open = Boolean(anchorEl);
const id = open ? 'simple-popover' : undefined;
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
   const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
     <Button aria-describedby={id} variant="contained" onClick={handleClick}>
        Open Popover
      </Button>
          <Popover
          disableAutoFocus
        id={id}
        open={open && isOpen  }
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
            vertical: 'bottom',
          horizontal: 'left',
        }}
      >
        <Typography sx={{ p: 2 }}>Vrumies Users</Typography>
        <div>
        {
            usersArr.map((user)=><div>
                {user.username}
                </div>)
        }
        </div>
      </Popover>
        </>
  )
}

export default SearchUser