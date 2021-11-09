export const onRejectStatus422 = (err) => {
    let response = err.response;
    
    if (422 === response.status) {
        //faca algo
    }

    return Promise.reject(err);
}

export const onRejectStatus401 = (err) => {
    let response = err.response;
    if (401 === response.status) {
        //faca algo
    }
    return Promise.reject(err);
}