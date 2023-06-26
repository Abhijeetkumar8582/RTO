const inital_Value = ''

const CouponSelectedID = (state=inital_Value,action)=>{
    if(action.type==='CouponSelectedID'){
        return state = action.payload
    }else{
        return state
    }
}
export default CouponSelectedID;