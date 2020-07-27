import ReactStars from 'react-rating-stars-component';
import React from 'react';

const thirdExample = {
  size: 40,
  count: 7,
  isHalf: false,
  value: 4,
  color: 'blue',
  activeColor: 'red',
  onChange: (newValue) => {
    console.log(`Example 3: new value is ${newValue}`);
  },
};

function star() {
  return <ReactStars {...thirdExample} />;
}
export default star;

//not implemented
