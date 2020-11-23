const defaulState  = {
    randomNumber:0,
    name:'Quân'
}
const randomReducer = ( state = defaulState, action ) =>{
    switch (action.type){
        case 'UP_NUMBER':{
            let a = Math.floor(Math.random()*100);
            while(a>state){a = Math.floor(Math.random()*100)}
            return a;
        };
        case 'DOWN_NUMBER':{
            let a = Math.floor(Math.random()*100);
            while(a<state){a = Math.floor(Math.random()*100)}
            return a;
        };
        default:
            return state;

    }
}

export default randomReducer;