import { useState } from "react";
import { goods } from "../data/goods";
import Search from "./Search";
import GoodsList from "./GoodsList";
import Header from "./Header";
import { Container, Divider } from "@mui/material";
import Basket from "./Basket";
import Snack from "./Snack";
import Footer from "./Footer";

function App() {
  const [order, setOrder] = useState([]);
  const [search, setSearch] = useState("");
  const [products, setProducts] = useState(goods);
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [isSnackOpen, setIsSnackOpen] = useState(false);

  const handleCloseSnack = () => {
    setIsSnackOpen(false);
  };

  const handleOpenCart = () => {
    setIsCardOpen(true);
  };

  const handleChange = (e) => {
    if (!e.target.value) {
      setProducts(goods);
      setSearch("");
      return;
    }

    setSearch(e.target.value);
    setProducts(
      products.filter((good) =>
        good.name.toLowerCase().includes(e.target.value.toLowerCase()),
      ),
    );
  };

  const addToOrder = (goodsItem) => {
    let quantity = 1;

    const indexInOrder = order.findIndex((item) => item.id === goodsItem.id);

    if (indexInOrder > -1) {
      quantity = order[indexInOrder].quantity + 1;

      setOrder(
        order.map((item) => {
          if (item.id !== goodsItem.id) return item;

          return {
            id: item.id,
            name: item.name,
            price: item.price,
            quantity,
            poster: item.poster,
          };
        }),
      );
    } else {
      setOrder([
        ...order,
        {
          id: goodsItem.id,
          name: goodsItem.name,
          price: goodsItem.price,
          quantity,
          poster: goodsItem.poster,
        },
      ]);
    }
    setIsSnackOpen(true);
  };

  const removeFromOrder = (goodsItem) => {
    setOrder(order.filter((item) => item.id !== goodsItem));
  };

  return (
    <>
      <Header orderLen={order.length} handleOpenCart={handleOpenCart} />
      <Container sx={{ mt: 2 }}>
        <Search value={search} onChange={handleChange} />
        <GoodsList goods={products} setOrder={addToOrder} />
      </Container>
      <Snack isOpen={isSnackOpen} handleClose={handleCloseSnack} />
      <Basket
        order={order}
        removeFromOrder={removeFromOrder}
        cartOpen={isCardOpen}
        closeCard={() => setIsCardOpen(false)}
      />
      <Divider sx={{ mt: 3 }} />
      <Footer />
    </>
  );
}

export default App;
