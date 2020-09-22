export const addMesseges=(data)=>{
  return{
     type:'ADDMESSEGE',
     payload:data
  }
}
export const deleteMessege=(data)=>{
  return{
    type:'DELETE',
    payload:data

  }
}
export const serchFilter=(data)=>{
  return{
    type:'SEARCH',
    payload:data
    
  }
}
