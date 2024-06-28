
import axios from "axios"
import { base_url } from "../Constant"


export let get_api = async (endpoint) => {
    let res = await axios.get(base_url + endpoint)
    return res;
}

export let Post_api = async (endpoint, product) => {
    let res = await axios.post(base_url + endpoint, product)
    return res;
}
export let Delete_api = async (endpoint, id) => {
    let res = await axios.delete(base_url + endpoint + `/${id}`)
    console.log(res);
}
export let update_api = async (endpoint, product) => {
    let res = await axios.put(base_url + endpoint + `/$(product.id)`, product)
    console.log(res);
}