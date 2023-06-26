import React, { useEffect, useState } from 'react';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import { useSelector } from 'react-redux';

function ModalHeader() {
  const progress = useSelector(state => state.ModalProgess);
  const [mobileColor, setMobileColor] = useState('black');
  const [otpColor, setOtpColor] = useState('black');
  const [addressColor, setAddressColor] = useState('black');

  useEffect(() => {
    if (progress === 10) {
      setMobileColor('blue');
      setOtpColor('grey');
      setAddressColor('grey')
    } else if (progress === 33) {
        setMobileColor('green');
        setOtpColor('blue');
        setAddressColor('grey')
    } else if (progress === 60) {
        setMobileColor('green');
        setOtpColor('green');
        setAddressColor('blue')
    }
  }, [progress]);

  return (
    <div className='Modal_header_section'>
      <div className='mobile_header_innerSection'>
        <h5 className='mobile_header_innerSection_mobile' style={{ color: mobileColor }}>Mobile</h5>
        <h5 className='mobile_header_innerSection_OTP' style={{ color: otpColor }}>OTP</h5>
        <h5 className='mobile_header_innerSection_Address' style={{ color: addressColor }}>Address</h5>
        <h5 className='mobile_header_innerSection_Pay'>Pay</h5>
      </div>
      <Box sx={{ width: '100%' }}>
        <LinearProgress variant="determinate" color="success" value={progress} />
      </Box>
    </div>
  );
}

export default ModalHeader;
