export const formatPrice = (price) => {
    const updatedPrice = price - 0.01
    return `$ ${updatedPrice.toLocaleString("en-US")}`
}