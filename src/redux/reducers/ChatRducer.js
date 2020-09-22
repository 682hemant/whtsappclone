const initialState={
  messege:[
    {
      id:Math.random(),
      chat:"hii",
      isDeleted:false
    }
  ],
  messegeRecieved:[
    {
      id:1,
      chat:"hii",
    }
  ],
 
}
const Chatreducer=(state=initialState,action)=>{
     switch(action.type){
       case 'ADDMESSEGE':
         return{
           ...state,
           messege:state.messege.concat({id:Math.random(),chat:action.payload})
         }
         case 'DELETE':
           console.log('deleting');
         return{
           ...state,
           messege:state.messege.map(messeg=>messeg.id===action.payload?{...messeg,isDeleted:true}: messeg),
         }
     }
     return state;
}

export default Chatreducer;