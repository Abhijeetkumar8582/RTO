const inital_Value = ''

const user_phone_state = (state=inital_Value,action)=>{
    if(action.type==='user_phone_number'){
        return state = `+91${action.payload}`
    }else{
        return state
    }
}
export default user_phone_state;