export const isTrustString = ( strings ) => {

    if(typeof strings === "string") return true;

    if(typeof strings === "object" && strings.length){
        for(let i in strings) {
            if(typeof i !== "string") return false;
        }

        return true;
    }

    return false;
}

export const isTrustNumber = ( numbers ) => {
    if(typeof numbers === "number") return true;

    if(typeof numbers === "object" && numbers.length){
        for(let i in numbers) {
            if(typeof i !== "number") return false;
        }

        return true;
    }

    return false;
}