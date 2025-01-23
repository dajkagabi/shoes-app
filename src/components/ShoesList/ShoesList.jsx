import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import shoesData from '../../assets/shoes.json';

const ShoesList = ({ category, size, color }) => {
  const [selectedColors, setSelectedColors] = useState(
    shoesData.shoes.map(shoe => shoe.colors[0])
  );

  const handleColorChange = (shoeIndex, color) => {
    const newSelectedColors = [...selectedColors];
    newSelectedColors[shoeIndex] = color;
    setSelectedColors(newSelectedColors);
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
  }, [category, size, color]);

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
      {filteredShoes.map((shoe, index) => {
        const currentColor = selectedColors[index] || shoe.colors[0];
        const currentColorImage = shoe.images[currentColor] || shoe.images["default"];
        return (
          <div key={index} className="bg-white shadow-md rounded-lg overflow-hidden">
            <img src={currentColorImage} alt={shoe.name} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-bold text-gray-800">{shoe.name}</h3>
              <p className="text-gray-600">Category: {shoe.category}</p>
              <p className="text-gray-600">Material: {shoe.material}</p>
              <p className="text-gray-600">Season: {shoe.season}</p>
              <p className="text-gray-600">Sizes: {shoe.size.join(", ")}</p>
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
};

export default ShoesList;