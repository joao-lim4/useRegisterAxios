<p align="center">
    <a href="https://github.com/joao-lim4">
        <img src="./react-logo.png" alt="Logo" width="300">
    </a>
    <br/>
    <h3 align="center">Hook para registrar interceptor no axios</h3>
    <br/>
    <p align="center">
        console.log('☕☕');
        <br />
        <a href="https://github.com/joao-lim4/useRegisterAxios"><strong> << View Doc >></strong></a>
    </p>
</p>


## Sobre
useRegisterAxios é um hook que pode registrar um array de interptors no seu axios em tempo de execucao.

### Instalação

1. Clonando o repo
```sh
    git clone https://github.com/joao-lim4/useRegisterAxios.git
```




## Usando

1. Copie o codigo do arquivo useRegisterAxios que está dentro de src ou copie o arquivo e cole em seu diretorio.

## Funções de exemplo

```js

import axios from "axios"; //import axios
import { useRegisterAxios } from "./Interceptors/Interceptors";
import { onRejectStatus422, onRejectStatus401 } from './Handlers/Handlers';

const AxiosInstance = axios.create({
    baseURL: "", //sua base url
});

/**
 * Maneira convencional de registrar um interceptor no axios.
*/

AxiosIntance.interceptors.response.use(res => res, onRejectStatus422);
AxiosIntance.interceptors.response.use(res => res, onRejectStatus401);

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
    {type: "response", useOrReject: "use", handleInterceptor: onRejectStatus422},
    {type: "response", useOrReject: "use", handleInterceptor: onRejectStatus401}
]);



export default AxiosInstance;

```


## Obteve algum erro?
Entre em contato comigo me falando do erro, que resolverei assim que possível.

## Contato
[INSTAGRAM](https://www.instagram.com/joao_lim4/)
<br/>
[WHATSAPP](https://api.whatsapp.com/send/?phone=%2B5531989013076&text=Ola%20vim%20pelo%20seu%20primeiro%20projeto%20react&app_absent=0&lang=pt_br)
<br/>
limas.devs@gmail.com



