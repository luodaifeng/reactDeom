export let defaultState ={
    count:0
}
export let CounterReducer =(state=defaultState,action)=>{
        return {...state,...action.payload}
}
