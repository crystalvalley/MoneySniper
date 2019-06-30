interface IAction {
    type: string,
    val: string
}

function createInputReducer <T>(){
    return (state:T,action:IAction) =>{
        //console.log(action)
        return {
            ...state,
            [action.type]: action.val
        }; 
    }
}

export default createInputReducer;
