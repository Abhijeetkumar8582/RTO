import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Modal_Progress } from '../Redux/Action/Index';
import ModalHeader from "./ModalHeader";

function OTP() {
    const displayPhone_Numeber = useSelector(state=>state.user_phone_state)
    const dispatch=useDispatch()
//    const otp = 000000
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
    return (
        <>
        <div className="modal fade modal-xl" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2" tabIndex="-1">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
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
                    <button className="btn btn-success px-4 validate"
                     data-bs-target="#exampleModalToggle3" data-bs-toggle="modal" onClick={()=>dispatch(Modal_Progress(60))} >Validate</button>
                    <button className="btn btn-danger px-4 validate" data-bs-target="#exampleModalToggle" data-bs-toggle="modal" onClick={()=>dispatch(Modal_Progress(10))}>Edit</button>
              
                    </div>
            </div>  </div>
            </div></div>
        </>
    )
}

export default OTP