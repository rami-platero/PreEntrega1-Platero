const ItemListContainer = ({greeting}) => {
  return (
    <section className="flex flex-col items-center">
        <h1 className="text-2xl">{greeting}</h1>
    </section>
  )
}

export default ItemListContainer