import React from 'react'

function TestModal() {
    return (
        <>
            <div className="modal fade" id="exampleModal4" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLongTitle">Invalid Number </h5>
                        </div>
                        <div className="modal-body">
                            You have Enter wrong Phone Number please try again
                        </div>
                        <div className="modal-footer">
                            <button
                                className="btn btn-primary"
                                data-bs-target="#exampleModalToggle"
                                data-bs-toggle="modal"
                            >
                                Edit
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TestModal