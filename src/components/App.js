import React, { useState } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { PackingList } from "./PackingList";
import { Stats } from "./Stats";

const App = () => {
  const [items, setItems] = useState([]);

  function handleAdditems(item) {
    setItems((currentItem) => [...currentItem, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : { ...item }
      )
    );
  }
  function deleteAllItem() {
    const confirmed = window.confirm(
      "Are you sure you want to delete all items?"
    );
    if (confirmed) setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItem={handleAdditems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItems}
        onToggleItem={handleToggleItem}
        onDeleteAll={deleteAllItem}
      />
      <Stats items={items} />
    </div>
  );
};

export default App;
