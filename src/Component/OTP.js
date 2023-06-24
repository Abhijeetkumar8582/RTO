import React from 'react'

function OTP() {
    return (
        <>
            <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalToggleLabel2">Modal 2</h1>
                {/* <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
            </div>
            <div className="modal-body">
                Please enter the one time password to verify your account
                <div id="otp" className="inputs d-flex flex-row justify-content-between">
                    <input className="m-2 text-center form-control rounded" type="text" id="first" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="second" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="third" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="fourth" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="fifth" maxLength="1" />
                    <input className="m-2 text-center form-control rounded" type="text" id="sixth" maxLength="1" />
                </div>

                <div className="mt-4 d-flex justify-content-between">
                    <button className="btn btn-success px-4 validate" data-bs-target="#exampleModalToggle3" data-bs-toggle="modal">Validate</button>
                    <button className="btn btn-danger px-4 validate" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Edit</button>
                </div>
            </div>
        </>
    )
}

export default OTP