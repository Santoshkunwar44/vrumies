import * as React from 'react';

import Rating from '@mui/material/Rating';

const ReviewRating = ({rating,handleChange}) => {
      // const [value, setValue] = React.useState(rating);
  return (
    <div>
           <Rating
        // disabled
        name="simple-controlled"
        value={rating}
        max={10}
        onChange={(event, newValue) => {
          // setValue(newValue);
          handleChange("rating",newValue)

        }}
      />
    </div>
  )
}

export default ReviewRating