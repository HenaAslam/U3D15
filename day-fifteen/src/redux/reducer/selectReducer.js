import { SELECT_SONG } from "../action"


const initialState = {
    selectedSong:null,
    
}
 const selectReducer=(state=initialState, action)=>
 {
   switch(action.type){
    case  SELECT_SONG:
      return {
        ...state,
        selectedSong:action.payload
      }

      default:
      return state
 }
 }

 export default selectReducer