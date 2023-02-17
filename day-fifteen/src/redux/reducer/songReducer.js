import { GET_SONG } from "../action"

const initialState = {
    song:[],
    
}
 const songReducer=(state=initialState, action)=>
 {
   switch(action.type){
    case  GET_SONG:
      return {
        ...state,
        song:[].concat(...state.song,action.payload)
      }

      default:
      return state
 }
 }

 export default songReducer