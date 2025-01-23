import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shoesData from '../../assets/shoes.json';

/* */
const ShoesList = ({ category, size, color, onAddToCart }) => {
  const [selectedColors, setSelectedColors] = useState(
    shoesData.shoes.map(shoe => shoe.colors[0])
  );
  const [selectedSizes, setSelectedSizes] = useState(
    shoesData.shoes.map(shoe => shoe.size[0])
  );

  const handleColorChange = (shoeIndex, color) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[shoeIndex] = color;
    setSelectedColors(newSelectedColors);
  };

  const handleSizeChange = (shoeIndex, size) => {
    const newSelectedSizes = [...selectedSizes];
    newSelectedSizes[shoeIndex] = size;
    setSelectedSizes(newSelectedSizes);
  };

  const filteredShoes = shoesData.shoes.filter(shoe => {
    return (
      (category === '' || shoe.category === category) &&
      (size === '' || shoe.size.includes(parseInt(size))) &&
      (color === '' || shoe.colors.includes(color))
    );
  });

  useEffect(() => {
    setSelectedColors(filteredShoes.map(shoe => shoe.colors[0]));
    setSelectedSizes(filteredShoes.map(shoe => shoe.size[0]));
  }, [category, size, color]);

  
  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredShoes.map((shoe, index) => {
        const currentColor = selectedColors[index] || shoe.colors[0];
        const currentSize = selectedSizes[index] || shoe.size[0];
        const currentColorImage = shoe.images[currentColor] || shoe.images["default"];
        return (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={currentColorImage} alt={shoe.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{shoe.name}</h3>
              <p className="text-gray-600">Category: {shoe.category}</p>
              <p className="text-gray-600">Material: {shoe.material}</p>
              <p className="text-gray-600">Season: {shoe.season}</p>
              <div className="mt-2">
                <label className="block text-gray-700">Size:</label>
                <select
                  value={currentSize}
                  onChange={(e) => handleSizeChange(index, e.target.value)}
                  className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm rounded-md"
                >
                  {shoe.size.map((size, idx) => (
                    <option key={idx} value={size}>
                      {size}
                    </option>
                  ))}
                </select>
              </div>
              <div className="flex space-x-2 mt-2">
                {shoe.colors.map((color, idx) => (
                  <span
                    key={idx}
                    className={`inline-block w-6 h-6 rounded-full border border-gray-300 cursor-pointer ${selectedColors[index] === color ? 'border-black' : ''}`}
                    style={{ backgroundColor: color }}
                    onClick={() => handleColorChange(index, color)}
                  ></span>
                ))}
              </div>
              <button
                onClick={() => onAddToCart({ ...shoe, selectedColor: currentColor, selectedSize: currentSize })}
                className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Order
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

ShoesList.propTypes = {
  category: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  onAddToCart: PropTypes.func.isRequired,
};

export default ShoesList;