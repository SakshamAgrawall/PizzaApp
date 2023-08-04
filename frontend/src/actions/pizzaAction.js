import axios from "axios";


export const getAllPizzas = () => async (dispatch) => {
  dispatch({ type: "GET_PIZZAS_REQUEST" })
  try {
    const res = await axios.get('https://pizza-app-2z7k.onrender.com/api/pizzas/getAllPizzas')
    dispatch({ type: "GET_PIZZAS_SUCCESS", payload: res.data })
  } catch (error) {
    dispatch({ type: "GET_PIZZAS_FAIL", payload: error })
  }
}