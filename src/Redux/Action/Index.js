export const User_Phone_Nmber =(phone)=>{
    return {
        type:"user_phone_number",
        payload:phone
    }
}
export const isNumberVerified =(verified)=>{
    return {
        type:"isNumberVerified",
        payload:verified
    }
}
export const couponSelected =(verified)=>{
    return {
        type:"CouponSelectedID",
        payload:verified
    }
}
export const Modal_Progress =(verified)=>{
    return {
        type:"Modal_Progress",
        payload:verified
    }
}