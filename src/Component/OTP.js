import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal_Progress } from '../Redux/Action/Index';
import ModalHeader from "./ModalHeader";

function OTP() {
    const displayPhone_Numeber = useSelector(state=>state.user_phone_state)
    const dispatch=useDispatch()

    return (
        <>
            <div className="modal-header">
               <ModalHeader/>
                 </div>
            <div className="modal-body">
            Hey! Welcome back Please enter the one time password to verify your account {displayPhone_Numeber} 
                <div id="otp" className="Otp_inputs  d-flex flex-row justify-content-between">
                    <input className="m-2 text-center form-control rounded" type="text" id="first" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="second" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="third" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxLength="1" />
                </div>

                <div className="mt-4 d-flex justify-content-between">
                    <button className="btn btn-success px-4 validate" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" onClick={()=>dispatch(Modal_Progress(60))} >Validate</button>
                    <button className="btn btn-danger px-4 validate" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={()=>dispatch(Modal_Progress(10))}>Edit</button>
                </div>
            </div>
        </>
    )
}

export default OTP