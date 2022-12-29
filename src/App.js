import MainNavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <div>
      <header>
          <MainNavBar cartCount={10} />
      </header>
      <main>
        <ItemListContainer message="Earn For Your Shots" />
      </main>
    </div>
  );
}
export default App;
