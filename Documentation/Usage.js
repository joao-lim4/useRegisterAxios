import axios from "axios"; //import axios
import { useRegisterAxios } from "./Interceptors/Interceptors";
import { onRejectStatu422, onRejectStatus401 } from './Handlers/Handlers';

const AxiosInstance = axios.create({
    baseURL: "", //sua base url
});




// tipos de objetos que pode ser passado para o hook
// let types = [
//     {type: "request", useOrReject: "use", handleInterceptor: () => console.log("my handler")},
//     {type: "request", useOrReject: "eject", ejectId: 0},
//     {type: "response", useOrReject: "use", handleInterceptor: () => console.log("my handler")},
//     {type: "response", useOrReject: "eject", ejectId: 0},
// ]

// useRegisterAxios(AxiosInstance, [...types]);

/**
 * Usando o hook useRegisterAxios
 * 
*/
useRegisterAxios(AxiosInstance, [
    {type: "response", useOrReject: "use", handleInterceptor: onRejectStatu422},
    {type: "response", useOrReject: "use", handleInterceptor: onRejectStatus401}
]);

export default AxiosInstance;