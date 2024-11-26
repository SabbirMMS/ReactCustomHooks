import { useAddPost } from "./hooks/Axios/useAddPost";
import { useCart } from "./hooks/useCart";
import { useFetch } from "./hooks/useFetch";
import { useForm } from "./hooks/useForm";
import { useWindowSize } from "./hooks/useWindowSize";

function App() {
  {
    /* Window Size */
  }
  const { width, height } = useWindowSize();

  {
    /* useForm */
  }
  const { values, handleChange, resetForm } = useForm({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    // handle form submission
    resetForm();
    console.log(values);
  };

  {
    /* use Fetch */
  }
  const { data, error, isLoading } = useFetch(
    "https://jsonplaceholder.typicode.com/users"
  );

  {
    /* use Cart */
  }
  const {
    cartItems,
    addItem,
    removeItem,
    updateQuantity,
    getTotalPrice,
    clearCart,
  } = useCart();
  const demoProducts = [
    { id: 1, name: "Product 1", price: 100, quantity: 1 },
    { id: 2, name: "Product 2", price: 200, quantity: 2 },
    { id: 3, name: "Product 3", price: 300, quantity: 3 },
  ];

  // ===========
  // Axios Class
  // ===========

  const requestData = {
    title: "foo",
    body: "bar",
    userId: 1,
  };

  // For Get Method
  //const { dataA, errorA, isLoadingA } = useAddPost("/users");
  // For Post Method
  /*const { dataA, errorA, isLoadingA } = useAddPost("/posts", requestData);*/
  // For Put Method & patch Method
  const { dataA, errorA, isLoadingA } = useAddPost("/posts/1", requestData);
  console.log(dataA);

  // --------------------------------------------------------
  return (
    <div>
      {/* Window Size */}
      <h2>Window Size</h2>
      <hr />
      <p>
        height:- {height}
        <br />
        width:- {width}
      </p>

      {/* useForm */}
      <h2>useForm</h2>
      <hr />
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={values.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Confirm Password:
          <input
            type="password"
            name="confirmPassword"
            value={values.confirmPassword}
            onChange={handleChange}
          />
        </label>
        <br />
        <input type="submit" value="Submit" />
        <br />
        <input type="reset" value="Reset" />
      </form>
      {/* Fetch Data */}
      <h2>Fetch Data</h2>
      <hr />
      {isLoading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>Error: {error}</p>
      ) : data ? (
        <div>
          {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
          {data.map((user) => (
            <div key={user.id}>
              <h2>
                {user.id} - {user.name}
              </h2>
              <p>{user.email}</p>
            </div>
          ))}
        </div>
      ) : null}

      {/* use Cart */}
      <h2>use Cart</h2>
      <hr />
      <div>
        <h4>Shopping Items</h4>
        <div>
          <pre>{JSON.stringify(demoProducts)}</pre>
          {demoProducts.map((product) => {
            return (
              <div key={product.id}>
                <h2>{product.name}</h2>
                <p>Price: {product.price}</p>
                <button onClick={() => addItem(product)}>Add to cart</button>
              </div>
            );
          })}
        </div>
        <h4>Cart Items</h4>
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <h2>{item.name}</h2>
              <p>Price: {item.price}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => removeItem(item.id)}>Remove</button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity - 1)}
              >
                Decrement
              </button>
              <button
                onClick={() => updateQuantity(item.id, item.quantity + 1)}
              >
                Increment
              </button>
            </div>
          ))}
          <h3>Total Price: {getTotalPrice()}</h3>
          <button onClick={clearCart}>Clear Cart</button>
        </div>
      </div>
    </div>
  );
}

export default App;
