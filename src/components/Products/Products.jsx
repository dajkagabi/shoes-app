import  { useState } from 'react';
import ShoesList from '../ShoesList/ShoesList';

const Products = () => {
  const [category, setCategory] = useState('');
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setColor(event.target.value);
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Products</h1>
      <div className="flex space-x-4 mb-6">
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={category}
          onChange={handleCategoryChange}
        >
          <option value="">All Categories</option>
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kids">Kids</option>
        </select>
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={size}
          onChange={handleSizeChange}
        >
          <option value="">All Sizes</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
        <select
          className="p-2 border border-gray-300 rounded-lg"
          value={color}
          onChange={handleColorChange}
        >
          <option value="">All Colors</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="pink">Pink</option>
          <option value="blue">Blue</option>
          <option value="brown">Brown</option>
          <option value="grey">Grey</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
        </select>
      </div>
      <ShoesList category={category} size={size} color={color} />
    </div>
  );
};

export default Products;
