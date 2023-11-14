import ItemListContainer from "./components/ItemListContainer"
import NavBar from "./components/NavBar"

const App = () => {
  return (
    <div className="bg-zinc-900 min-h-screen w-screen text-white">
      <header>
        <NavBar/>
      </header>
      <main className="mx-auto max-w-[1400px] pt-[100px]">
        <ItemListContainer greeting={"Welcome to Gaming Components!"}/>
      </main>
    </div>
  )
}

export default App