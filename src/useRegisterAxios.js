import { isTrustString, isTrustNumber } from './Helpers/TypeHelpers';

const validateTrustEject = (useOrReject, ejectId) => {
    if(useOrReject.toUpperCase() === "EJECT"){
        if(isTrustNumber(ejectId)) {
            return true;
        }
        return false;
    };
    return false;
}

const validateArguments = (type, useOrReject, handleInterceptor, ejectId) => {
    if(!isTrustString(type) || !isTrustString(useOrReject)) {
        throw(`Tipo do argumento invalido, o tipo passado foi ${typeof type} é aceito somente o tipo string.`);
    }

    if(validateTrustEject(useOrReject, ejectId)) {
        if(!isTrustNumber(ejectId)) {
            throw(`Error, tipo do eject id invalido. o tipo aceito é number foi passado ${typeof ejectId}.`);
        }
    } else {
        if(typeof handleInterceptor !== "function") {
            throw(`Tipo do argumento handleInterceptor invalido , foi passado ${typeof handleInterceptor} é aceito somente o tipo string.`);
        }
    }

    return true;
}

/**
 * 
 * @param {string} type request | response 
 * @param {string} useOrReject use | eject
 * @param {function} handleInterceptor 
 */
const RegisterInterceptors = (...args) => {
    if(args.length === 5) {
        let [ApiInstance, type, useOrEject, handleInterceptor, ejectId] = args;
        if(validateArguments(type,useOrEject, handleInterceptor)) {
            if(validateTrustEject(useOrEject, ejectId)) {
                ApiInstance.interceptors[type][useOrEject](ejectId);
            }else{
                ApiInstance.interceptors[type][useOrEject](res => res, handleInterceptor);
            }
        }
    }
}

/**
 * 
 * @param {array} interceptorsData
 * @param {Axios} AxiosInstance
 * exemple payload [
 *      {
 *          type: "request" | "response",
 *          useOrReject: "use" | "eject",
 *          handlerInterceptor: function,
 *          ejectId: useOrReject === "eject" ? ejectId : default null
 *      }
 * ]
 *  
 */
const useRegisterAxios = (...args) => {
    if(args.length === 2) {
        let [ApiInstance, interceptorsData] = args;
        
        if(typeof ApiInstance.interceptors === "undefined") {
            throw(`O argumento passado no index 0 não é uma instancia do axios, é preciso passar a instancia do axios como argumento para essa funcao.`);
        }

        if(interceptorsData.length) {
            interceptorsData.forEach(interceptor => {
                RegisterInterceptors(
                    ApiInstance,
                    interceptor.type, 
                    interceptor.useOrReject, 
                    interceptor.handleInterceptor,
                    interceptor.ejectId ?? interceptor.ejectId     
                );
            });
        }

    } else {
        throw(`Esperado dois argumento, [0] => Axios instance, [1] => interceptorData`);
    }
}


export { useRegisterAxios };