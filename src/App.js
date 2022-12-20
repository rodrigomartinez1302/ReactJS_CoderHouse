import MainNavBar from "./components/navBar/NavBar";
import ItemListContainer from "./components/itemListContainer/ItemListContainer";

function App() {
  return (
    <body>
      <header>
        <div className="mainNavbar">
          <MainNavBar cartCount={10} />
        </div>
      </header>
      <main>
        <ItemListContainer message="Earn For Your Shots" />
      </main>
    </body>
  );
}
export default App;
