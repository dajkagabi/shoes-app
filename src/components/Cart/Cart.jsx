import PropTypes from 'prop-types';

const Cart = ({ cartItems, onRemoveItem }) => {
  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <p className="text-gray-700 text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index} className="flex justify-between items-center mb-4">
                  <div>
                    <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                    <p className="text-gray-700">Color: {item.selectedColor}</p>
                    <p className="text-gray-700">Size: {item.selectedSize}</p>
                    <p className="text-gray-700">Quantity: {item.quantity}</p>
                    <p className="text-gray-700">Price: ${item.price?.toFixed(2) || 'N/A'}</p>
                  </div>
                  <button
                    onClick={() => onRemoveItem(item.id, item.selectedColor, item.selectedSize)}
                    className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-500"
                  >
                    Remove
                  </button>
                </li>
              ))}
            </ul>
            <div className="text-right mt-6">
              <h2 className="text-2xl font-bold text-gray-800">Total: ${totalPrice.toFixed(2)}</h2>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selectedColor: PropTypes.string.isRequired,
      selectedSize: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
