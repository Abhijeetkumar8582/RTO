const inital_Value = 10

const ModalProgess = (state=inital_Value,action)=>{
    if(action.type==='Modal_Progress'){
        return state = action.payload
    }else{
        return state
    }
}
export default ModalProgess;