export const placeOrderReducer = (state={},action)=>{
    switch(action.type){
        case "PLACE_ORDER_REQUEST":
          return{
            loading:true
          }
          case "PLACE_ORDER_SUCCESS":
          return{
            loading:false,
            SUCCESS:true
          }
          case "PLACE_ORDER_ERROR":
            return{
                loading:false,
                error:action.payload
            }
            default:
                return state;
    }
}
export const getOrderReducer = (state={orders:[]},action)=>{
    switch(action.type){
        case "USER_ORDER_REQUEST":
          return{
            loading:true
          }
          case "USER_ORDER_SUCCESS":
          return{
            loading:false,
            SUCCESS:true,
            orders : action.payload
          }
          case "USER_ORDER_ERROR":
            return{
                loading:false,
                error:action.payload
            }
            default:
                return state;
    }
}