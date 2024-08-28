import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import { useState } from "react";

function App() {
  const [items, setItems] = useState([
    { id: 1, checked: false, item: "Milk" },
    { id: 2, checked: false, item: "Bread" },
    { id: 3, checked: false, item: "Eggs" },
  ]);

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem("shoppingList", JSON.stringify(listItems));
  }

  const handleDelete = (id) => {
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  return (
    <div className="App">
      <Header title="Shopping List" />
      <Content items={items} handleCheck={handleCheck} handleDelete={handleDelete} />
      <Footer length={items.length} />
    </div>
  );
}

export default App;
