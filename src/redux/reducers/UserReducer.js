const initialSate={
  user:[
    {
      id:Math.random(),
      name:"Ram",
      lastMesege:"okkk"
    }
  ]
}
const UserReducer=(state=initialSate,action)=>{
   switch(action.type){

   }
   return state;
}

export default UserReducer