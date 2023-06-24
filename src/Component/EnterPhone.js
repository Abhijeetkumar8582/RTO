import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from 'react-redux';
import { User_Phone_Nmber } from '../Redux/Action/Index'

function EnterPhone() {
    const [isInputError, setInputError] = useState(false);
    const [userNumber, setUserNumber] = useState(0)
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);

    const dispatch = useDispatch()
    // const user_phoneNumber = useSelector(state => state.user_phone_state)

    const numberEnter = (e) => {
        let value = e.target.value;
        if (isNaN(value)) {
            setInputError(true);
        } else {
            setInputError(false);
            setUserNumber(value)

        }
    };

    useEffect(() => {
        function handleKeyDown(event, inputs, index) {
            if (event.key === 'Backspace') {
                inputs[index].value = '';
                if (index !== 0) inputs[index - 1].focus();
            } else {
                if (index === inputs.length - 1 && inputs[index].value !== '') {
                    return true;
                } else if (event.keyCode > 47 && event.keyCode < 58) {
                    inputs[index].value = event.key;
                    if (index !== inputs.length - 1) inputs[index + 1].focus();
                    event.preventDefault();
                } else if (event.keyCode > 64 && event.keyCode < 91) {
                    inputs[index].value = String.fromCharCode(event.keyCode);
                    if (index !== inputs.length - 1) inputs[index + 1].focus();
                    event.preventDefault();
                }
            }
        }

        function OTPInput() {
            const inputs = document.querySelectorAll('#otp > *[id]');
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener('keydown', (event) => {
                    handleKeyDown(event, inputs, i);
                });
            }
        }

        OTPInput();
    }, []);


    const Handle_btn_click = () => {
        if (isTermsAccepted) {
            dispatch(User_Phone_Nmber(userNumber));
        } else {
            console.log(isTermsAccepted)
            console.log('Please accept the terms and conditions.error');
        }
    }

    const coupons = [
        {
            title: 'Coupon 1',
            code: 'ABC123',
            discount: 10,
            expirationDate: '2023-07-31',
        },
        {
            title: 'Coupon 2',
            code: 'DEF456',
            discount: 20,
            expirationDate: '2023-08-15',
        },
        {
            title: 'Coupon 3',
            code: 'GHI789',
            discount: 15,
            expirationDate: '2023-09-30',
        }];

    return (
        <>
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel">
                    Mobile
                </h1>
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div className='phone-coupon-div'>
                <div className="modal-body-phone">
                    <div className="mobile_header_bar">
                        <div className="moblie_bar_2nd_section">
                            <div className="enter_phone_text text-center">
                                <h5 >Enter Mobile Number</h5>
                            </div>
                            <div className='enter_phone_number_div'>
                                <TextField
                                    error={isInputError ? "Invalid input" : null}
                                    className="enter_phone_number"
                                    onChange={(e) => numberEnter(e)}
                                    fullWidth
                                    label="Phone Number"
                                    id="fullWidth"
                                />
                            </div>

                            <div className="form-check">
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id="exampleCheck1"
                                    value={isTermsAccepted}
                                    onChange={() => setIsTermsAccepted(true)}
                                />
                                <label className="form-check-label" htmlFor="exampleCheck1"  >
                                    I have read and accept the terms of contract
                                </label>
                            </div>
                            <div className='phone_submit_btn'>
                                <button className="custom-btn btn-2" onClick={Handle_btn_click} data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Continue </button>
                            </div>
                        </div>
                        <div className="footer_mobile_div">
                            <div>Terms and condition || 2124313</div>
                            <div className="precify_commerce_text">
                                Powered by <strong>Precify Commerce</strong>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='apply_coupon_div'>
                    <div className='apply-coupon-text'>
                        <h4 >Apply Coupon</h4>
                    </div>
                    <div className="wrap text-center">
                        {coupons.map((element, i) => (
                            <div className='render_coupoun'>
                                <div className="coupon" key={i}>
                                    <div className="coupon-left">{element.title}</div>
                                    <div className="coupon-con">
                                        <div className='coupon-con-child'>
                                            {element.code}
                                            {element.discount}
                                            {element.expirationDate}
                                        </div>
                                    </div>
                                </div>
                                <button className='apply_coupon_btn'>Apply</button>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    )
}

export default EnterPhone