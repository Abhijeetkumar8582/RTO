import React, { useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { useDispatch, useSelector } from "react-redux";
import { User_Phone_Nmber, isNumberVerified, couponSelected, Modal_Progress } from "../Redux/Action/Index";
import InputAdornment from "@mui/material/InputAdornment";
import ModalHeader from "./ModalHeader";

function EnterPhone({ handleOTPModalToggle }) {
    const [isInputError, setInputError] = useState(false);
    const [userNumber, setUserNumber] = useState("");
    const [isTermsAccepted, setIsTermsAccepted] = useState(false);
    const [numberApiResult, setNumberApiResult] = useState(false);
    const dispatch = useDispatch();
    const coupon_selected = useSelector(state => state.CouponSelectedID)

    const numberEnter = (e) => {
        let value = e.target.value;
        if (isNaN(value)) {
            setInputError(true);
        } else {
            setInputError(false);
            setUserNumber(value);
        }
    };


    useEffect(() => {
        function handleKeyDown(event, inputs, index) {
            if (event.key === "Backspace") {
                inputs[index].value = "";
                if (index !== 0) inputs[index - 1].focus();
            } else {
                if (index === inputs.length - 1 && inputs[index].value !== "") {
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
            const inputs = document.querySelectorAll("#otp > *[id]");
            for (let i = 0; i < inputs.length; i++) {
                inputs[i].addEventListener("keydown", (event) => {
                    handleKeyDown(event, inputs, i);
                });
            }
        }

        OTPInput();
    }, []);

    const Handle_btn_click = () => {
        if (isTermsAccepted) {
            dispatch(User_Phone_Nmber(userNumber));
            dispatch(Modal_Progress(33));
            if (numberApiResult) {
                setNumberApiResult(true)
                dispatch(isNumberVerified("verified"));
            } else {
                dispatch(isNumberVerified("notVerified"));
            }
        } else {
            dispatch(Modal_Progress(33));
            dispatch(User_Phone_Nmber(userNumber));
        }
    };

    const coupons = [
        {
            title: "Coupon 1",
            code: "ABC123",
            discount: 10,
            expirationDate: "2023-07-31",
        },
        {
            title: "Coupon 1",
            code: "ABC123",
            discount: 10,
            expirationDate: "2023-07-31",
        },
        {
            title: "Coupon 2",
            code: "DEF456",
            discount: 20,
            expirationDate: "2023-08-15",
        },
        {
            title: "Coupon 3",
            code: "GHI789",
            discount: 15,
            expirationDate: "2023-09-30",
        },
    ];
    const coupon_selected_function = (id) => {
        dispatch(couponSelected(id))
    }
    return (
        <>
            <div className="modal-header">
                <ModalHeader />
                <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                ></button>
            </div>
            <div className="phone-coupon-div">
                <div className="modal-body-phone">
                    <div className="mobile_header_bar">
                        <div className="moblie_bar_2nd_section">
                            <div className="enter_phone_text text-center">
                                <h5 style={{ fontFamily: 'monospace' }}>Enter Mobile Number</h5>
                            </div>
                            <div className="enter_phone_number_div">
                                <TextField
                                    error={isInputError ? "Invalid input" : null}
                                    className="enter_phone_number"
                                    onChange={(e) => numberEnter(e)}
                                    fullWidth
                                    InputProps={{
                                        startAdornment: (
                                            <InputAdornment position="start">+91</InputAdornment>
                                        ),
                                    }}
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
                                <label className="form-check-label" htmlFor="exampleCheck1">
                                    &nbsp; I have read and accept the terms of contract
                                </label>
                            </div>
                            <div className="phone_submit_btn">
                                <button
                                    className="custom-btn btn-2"
                                    onClick={Handle_btn_click}
                                    data-bs-target="#exampleModalToggle2"
                                    data-bs-toggle="modal"
                                >
                                    Continue{" "}
                                </button>
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
                <div className="apply_coupon_div">
                    <div className="apply-coupon-text">
                        <h5 style={{ fontFamily: 'monospace' }}>Apply Coupon</h5>
                    </div>
                    {coupon_selected === '' ? null : (
                        <div class="alert alert-primary" role="alert">
                            A simple primary alert—check it out!
                        </div>
                    )}

                    <div className="add_user_coupon">
                        <TextField id="standard-basic" className="user_input_coupon_code" label="Discount Code" variant="outlined" />
                        <button className="add_user_coupon_btn ">Apply</button>
                    </div>

                    <div className="wrap text-center">
                        {coupons.map((element, i) => (
                            <div className="render_coupoun" key={i}>
                                <div className="coupon">
                                    <div className="coupon-left">{element.title}</div>
                                    <div className="coupon-con">
                                        <div className="coupon-con-child">
                                            <p className="coupoun-con-child-text"> {element.code}</p>
                                            <p className="coupoun-con-child-text">{element.discount}</p>
                                            <p className="coupoun-con-child-text">{element.expirationDate}</p>
                                        </div>
                                    </div>
                                    <button className="add_user_coupon_btn" onClick={() => coupon_selected_function(element.title)}>Apply</button>
                                </div>

                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}

export default EnterPhone;
