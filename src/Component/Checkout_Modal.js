import * as React from "react";
import "../App.css";
import SelectAddress from './SelectAddress'
import Cart from "./Cart";
import EnterPhone from "./EnterPhone";
import OTP from "./OTP";
// import {  useSelector } from 'react-redux';
import ModalHeader from "./ModalHeader";

export default function KeepMountedModal() {
    // const isNumberVerify = useSelector(state => state.is_Number_verified)


    return (
        <div>
            {/* Enter Phone Number Text */}
            <div className="modal fade modal-xl" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel" tabIndex="-1" >
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <EnterPhone />
                    </div>
                </div>
            </div>


            {/* Enter OTP Component */}
            <div className="modal fade modal-xl" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <OTP />
                    </div>

                </div>
            </div>


            <div className="modal fade modal-xl" id="exampleModalToggle3" aria-hidden="true" aria-labelledby="exampleModalToggleLabel3" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <ModalHeader />
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            <div className="container_address">
                                <div className='container-address-select-address'>
                                    <SelectAddress />
                                </div>
                                <div className='container-address-cart'>
                                    <Cart />
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" data-bs-dismiss="modal">Back to first</button>
                        </div>
                    </div>
                </div>
            </div>




            <button
                className="btn btn-primary"
                data-bs-target="#exampleModalToggle"
                data-bs-toggle="modal"
            >
                Open first modal

            </button>

        </div>

    );
}
