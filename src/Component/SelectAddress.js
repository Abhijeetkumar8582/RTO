import * as React from 'react';
import { useState, useRef, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Radio } from '@mui/material';


export default function AlignItemsList() {
  const addressRef = useRef(null);
  const [addAddress, setAddress] = useState(false)
  useEffect(() => {
    if (addAddress && addressRef.current) {
      addressRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [addAddress]);

  const [selectedOption, setSelectedOption] = useState('');
  const [insertAddress, setInsertAddress] = useState({})
  const [firstName, setfirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [adress, setaddress] = useState('')
  const [getpincode, setpincode] = useState('')
  const [addressName, setAddressName] = useState('Personal')

  const [fakeAddresses, setFakeAddresses] = useState([
    {
      address: 'Home',
      street: '789 Oak Avenue',
      city: 'Villageton',
      state: 'State',
      postalCode: '54321',
      country: 'Country',
    },
    {
      address: 'office',
      street: '987 Pine Street',
      city: 'Hamletville',
      state: 'State',
      postalCode: '13579',
      country: 'Country',
    },
    {
      address: 'friend Home',
      street: '321 Cedar Road',
      city: 'Suburbia',
      state: 'State',
      postalCode: '97531',
      country: 'Country',
    },
    {
      address: 'bangalore Home',
      street: '654 Maple Lane',
      city: 'Ruraltown',
      state: 'State',
      postalCode: '31975',
      country: 'Country',
    },
  ]);

  const handleOptionChange = (option) => {
    setSelectedOption(option);
  };
  const fieldFirstName = (e) => {
    setfirstName(e.target.value)
  }
  const fieldLastName = (e) => {
    setLastName(e.target.value)
  }

  const fieldAddress = (e) => {
    setaddress(e.target.value)
  }

  const fieldPincode = (e) => {
    setpincode(e.target.value)
  }
  const fieldAddressName = (e) => {
    setAddressName(e.target.value)
  }


  const addUserAddress = () => {
    setAddress(true)
  }
  const addressDetailsEntered = () => {
    const newAddress = {
      address: addressName,
      street: adress,
      city: "Ruraltown",
      state: "State",
      postalCode: getpincode,
      country: "Country",
    }

    setFakeAddresses([newAddress, ...fakeAddresses])
    setSelectedOption(`option${0}`)
    setAddress(false)
  }
  return (
    <>
      <h1>Please select your Address</h1>
      <List sx={{ width: '100%', maxWidth: 560, bgcolor: 'background.paper' }}>
        {fakeAddresses.map((element, i) => (
          <div key={i}>
            <ListItem alignItems="flex-start" >
              <ListItemAvatar>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={element.address}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: 'inline' }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {element.street}, {element.city}, {element.state}, {element.postalCode}, {element.country}
                    </Typography>
                  </React.Fragment>
                }
              />
              <Radio
                checked={selectedOption === `option${i}`}
                onChange={() => handleOptionChange(`option${i}`)}
              />
            </ListItem>
            <Divider variant="inset" component="li" />
            <Divider variant="inset" component="li" />
          </div>
        ))}




      </List>
      <div>
        <button onClick={addUserAddress}>Add Address</button>
        {addAddress === true ? (<div className="container">
          <h1>Shipping</h1>
          <p>Please enter your shipping details.</p>
          <hr />
          <div className="form" ref={addressRef} id='add-address-form'>

            <div className="fields fields--2">
              <label className="field">
                <span className="field__label" htmlFor="firstname">First name</span>
                <input className="field__input" type="text" onChange={(e) => fieldFirstName(e)} id="firstname" />
              </label>
              <label className="field">
                <span className="field__label" htmlFor="lastname">Last name</span>
                <input className="field__input" type="text" onChange={(e) => fieldLastName(e)} id="lastname" />
              </label>
            </div>
            <label className="field">
              <span className="field__label" htmlFor="address">Address</span>
              <input className="field__input" type="text" onChange={(e) => fieldAddress(e)} id="address" />
            </label>
            <label className="field">
              <span className="field__label" htmlFor="country" >Pincode</span>
              <input className="field__input" type="text" onChange={(e) => fieldPincode(e)} id="address" />
            </label>
            <div className="fields fields--3">
              <label className="field">
                <span className="field__label" htmlFor="zipcode">Address Name</span>
                <input className="field__input" type="text" onChange={(e) => fieldAddressName(e)} id="zipcode" />
              </label>
              <label className="field">
                <span className="field__label" htmlFor="city">City</span>
                <input className="field__input" type="text" id="city" />
              </label>
              {/* <label className="field">
                <span className="field__label" htmlFor="state">State</span>
                <select className="field__input" id="state">
                  <option value=""></option>
                </select>
              </label> */}
            </div>
          </div>
          <hr />
          <button className="button" onClick={addressDetailsEntered}>Continue</button>
        </div>
        ) : null}
      </div>
    </>
  );
}