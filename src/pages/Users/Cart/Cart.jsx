import {useState} from "react";
import {CheckoutButton,ColumnLabels,Label,Product,ShoppingCartContainer,Totals} from "./CartStyle"
import { Link } from "react-router-dom";
const ShoppingCart = () => {
    const [cart, setCart] = useState([
      {
        id: 1,
        title: "Dingo Dog Bones",
        description:
          "The best dog bones of all time. Holy crap. Your dog will be begging for these things! I got curious once and ate one myself. I'm a fan.",
        price: 12.99,
        quantity: 2,
        image: "https://s.cdpn.io/3/dingo-dog-bones.jpg",
      },
      {
        id: 2,
        title: "Nutro™ Adult Lamb and Rice Dog Food",
        description:
          "Who doesn't like lamb and rice? We've all hit the halal cart at 3am while quasi-blackout after a night of binge drinking in Manhattan. Now it's your dog's turn!",
        price: 45.99,
        quantity: 1,
        image:
          "https://s.cdpn.io/3/large-NutroNaturalChoiceAdultLambMealandRiceDryDogFood.png",
      },
    ]);
  
    const taxRate = 0.05;
    const shippingRate = 15.0;
  
    const recalculateCart = () => {
      let subtotal = cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      let tax = subtotal * taxRate;
      let total = subtotal + tax + shippingRate;
  
      return {
        subtotal: subtotal.toFixed(2),
        tax: tax.toFixed(2),
        shipping: shippingRate.toFixed(2),
        total: total.toFixed(2),
      };
    };
  
    const totals = recalculateCart();
  
    const updateQuantity = (id, quantity) => {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: quantity } : item
        )
      );
    };
  
    const removeItem = (id) => {
      setCart((prevCart) => prevCart.filter((item) => item.id !== id));
    };
  
    return (
      <ShoppingCartContainer>
        <h1>Shopping Cart</h1>
  
        <ColumnLabels>
          <Label>Image</Label>
          <Label>Product</Label>
          <Label>Price</Label>
          <Label>Quantity</Label>
          <Label>Remove</Label>
          <Label>Total</Label>
        </ColumnLabels>
  
        {cart.map((product) => (
          <Product key={product.id}>
            <div className="product-image">
              <img src={product.image} alt={product.title} />
            </div>
            <div className="product-details">
              <div className="product-title">{product.title}</div>
              <p className="product-description">{product.description}</p>
            </div>
            <div className="product-price">${product.price}</div>
            <div className="product-quantity">
              <input
                type="number"
                value={product.quantity}
                min="1"
                onChange={(e) =>
                  updateQuantity(product.id, parseInt(e.target.value, 10))
                }
              />
            </div>
            <div className="product-removal">
              <button onClick={() => removeItem(product.id)}>Remove</button>
            </div>
            <div className="product-line-price">
              ${(product.price * product.quantity).toFixed(2)}
            </div>
          </Product>
        ))}
  
        <Totals>
          <div className="totals-item">
            <label>Subtotal</label>
            <div>${totals.subtotal}</div>
          </div>
          <div className="totals-item">
            <label>Tax (5%)</label>
            <div>${totals.tax}</div>
          </div>
          <div className="totals-item">
            <label>Shipping</label>
            <div>${totals.shipping}</div>
          </div>
          <div className="totals-item totals-item-total">
            <label>Grand Total</label>
            <div>${totals.total}</div>
          </div>
        </Totals>
  <Link to='/checkout'>
        <CheckoutButton>Checkout</CheckoutButton>
  </Link>
      </ShoppingCartContainer>
    );
  };
  
  export default ShoppingCart;