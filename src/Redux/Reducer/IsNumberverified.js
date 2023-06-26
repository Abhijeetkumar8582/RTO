const inital_Value = 'notVerified'

const is_Number_verified = (state=inital_Value,action)=>{
    if(action.type==='isNumberVerified'){
        return state = action.payload
    }else{
        return state
    }
}
export default is_Number_verified;