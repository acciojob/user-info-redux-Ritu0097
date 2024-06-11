import { CHANGE_NAME,CHANGE_EMAIL } from "../actions/actionTypes"
let intitalstate={
    name:'',
    email:''
}

export let changeReducer= (state=intitalstate,action)=>{
    switch(action.type){
        case CHANGE_NAME: return {...state,name:action.payload}
        case CHANGE_EMAIL: return {...state,email:action.payload}
        default : return state
    }
}
