import axios from "axios";

const URL = "/src/data/products.json"

export const getProducts = async () => {
    const res = await axios.get(URL)
    return res.data
}

export const getProductsByCategory = async (category) => {
    const res = await axios.get(URL)
    const products = res.data.filter((product)=>{
        return product.category.id === category
    })
    return products
}

export const getProductById = async (id) => {
    const res = await axios.get(URL)
    const product = res.data.find((p)=>{
        return p.id === Number(id)
    })
    return product
}