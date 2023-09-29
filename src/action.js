import url from "./url";
import { redirect } from "react-router-dom";

export const createAction = async({request})=>{
    const formData = await request.formData()
    const newCheese = {
        name: formData.get("name"),
        origin: formData.get("origin"),
        type: formData.get("type")

    } 
    await fetch(url, {
        method: "post",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(newCheese)
    })

    return redirect("/")
}



export const updateAction = async({request, params}) =>{
    const id = params.id
    const formData = await request.formData()

    const updatedCheese = {
        name: formData.get("name"),
        origin: formData.get("origin"),
        type: formData.get("type")
    }

    await fetch(url+id, {
        method: "put",
        headers: {"Content-Type":"application/json"},
        body: JSON.stringify(updatedCheese)
    })
    return redirect(`/cheese/${id}`)
}



export const deleteAction = async({params})=>{
    const id = params.id
    await fetch(url+id,{
        method:"delete"
    })
    return redirect("/")
}