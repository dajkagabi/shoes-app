import PropTypes from 'prop-types';

// Cart komponens, amely megjeleníti a kosár tartalmát és kezeli a tételek eltávolítását
const Cart = ({ cartItems, onRemoveItem }) => {
  // A teljes ár kiszámítása a kosárban lévő tételek alapján
  const totalPrice = cartItems.reduce((total, item) => total + (item.price || 0) * item.quantity, 0);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 p-6">
      <div className="bg-white shadow-md rounded-lg w-full max-w-2xl p-6">
        <h1 className="text-4xl font-bold text-gray-800 mb-6 text-center">Shopping Cart</h1>
        {cartItems.length === 0 ? (
          // Ha a kosár üres, megjelenik egy üzenet, hogy a kosár üres
          <p className="text-gray-700 text-center">Your cart is empty.</p>
        ) : (
          <div>
            <ul>
              {cartItems.map((item, index) => (
                // A kosárban lévő tételek listázása
                <li key={index} className="flex justify-between items-center mb-4">
                  <div className="flex items-center space-x-4">
                    <img
                      // A kép megjelenítése a kiválasztott szín alapján, vagy az alapértelmezett kép
                      src={item.images[item.selectedColor] || item.images.default}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-md"
                    />
                    <div>
                      <h2 className="text-xl font-bold text-gray-800">{item.name}</h2>
                      <p className="text-gray-700">Color: {item.selectedColor}</p>
                      <p className="text-gray-700">Size: {item.selectedSize}</p>
                      <p className="text-gray-700">Quantity: {item.quantity}</p>
                      <p className="text-gray-700">Price: ${item.price?.toFixed(2) || 'N/A'}</p>
                    </div>
                  </div>
                  <button
                    // A tétel eltávolítása a kosárból
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

// PropTypes használata 
Cart.propTypes = {
  cartItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      selectedColor: PropTypes.string.isRequired,
      selectedSize: PropTypes.string.isRequired,
      quantity: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      images: PropTypes.object.isRequired 
    })
  ).isRequired,
  onRemoveItem: PropTypes.func.isRequired,
};

export default Cart;
