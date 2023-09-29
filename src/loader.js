import url from "./url"

// Index Loader:

export const indexLoader = async ()=>{
    const response = await fetch(url)
    const allCheese = await response.json()
    return allCheese
}

export const showLoader = async({params})=>{
    const id = params.id
    const response = await fetch(url + id)
    const oneCheese = await response.json()
    return oneCheese
}

