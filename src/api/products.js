import data from './data.json'

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(data)
        },300)
    })
}

export const getProductsByCategory = async (category) => {
    const products = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve(data)
        },300)
    })
    const filteredProducts = products.filter((product)=>{
        return product.category.id === category
    })
    return filteredProducts
}

export const getProductById = async (id) => {
    const products = await new Promise((resolve) => {
        setTimeout(()=>{
            resolve(data)
        },300)
    })
    const product = products.find((p)=>{
        return p.id === Number(id)
    })
    return product
}