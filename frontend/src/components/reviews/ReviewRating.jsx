import * as React from 'react';

import Rating from '@mui/material/Rating';

const ReviewRating = () => {
      const [value, setValue] = React.useState(4);
  return (
    <div>
           <Rating
        // disabled
        name="simple-controlled"
        value={value}
        max={10}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      />
    </div>
  )
}

export default ReviewRating