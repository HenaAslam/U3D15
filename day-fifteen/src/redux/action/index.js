export const GET_SONG ="GET_SONG"
export const ADD_TO_FAVOURITE="ADD_TO_FAVOURITE"
export const REMOVE_FROM_FAVOURITE= "REMOVE_FROM_FAVOURITE"
export const SELECT_SONG="SELECT_SONG"


export const getSong = (search) => {
    return async (dispatch, getState) => {
      try {
       
        const resp = await fetch(
          "https://striveschool-api.herokuapp.com/api/deezer/search?q=" +search
        )
        if (resp.ok) {
            const data = await resp.json();
           
            
          dispatch({
            type: GET_SONG,
            payload: data,
          })
        
        } else {
            console.log("error")
         
         
        
        }
      } catch (error) {
        console.log(error.message)
       
      }
    }
  }



export const selectSongAction=(song)=>{
  return{
    type: SELECT_SONG,
    payload:song
  }

}


