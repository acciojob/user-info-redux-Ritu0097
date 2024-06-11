import { changeReducer } from "./reducer/changeReducer";
import { createStore } from "redux";



export let store= createStore(changeReducer)

