import {GETDATA} from "../search/search.actionType";
import axios from "axios";

// =========== GET DATA ===========
export const getDataFn = () => async(dispatch) => {
    try{
        await axios.get(`${process.env.REACT_APP_BACKEND_URL}/api/resources?populate=*`).then((res) => {
            // console.log(res.data.data);
            dispatch({type: GETDATA, payload: res.data.data})
        });
    }
    catch(e){
        console.log(e);
    }
}