import React, { useState, useEffect } from 'react';
import './Filtercard.css';
import { products } from '../products'; 

const Filtercard = () => {
  const [filteredProducts, setFilteredProducts] = useState(products); 
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1); 
  const [productsPerPage] = useState(5); 

  const categories = ['All', 'Electronics', 'Bags', 'Mobiles']; 
  const priceRanges = ['Below $50', '$50-$100', 'Above $100'];
  const reviews = ['1+ stars', '2+ stars', '3+ stars'];

  const handleFilterChange = (category) => {
    setLoading(true);
    setSelectedCategory(category);
    const filtered = category === 'All'
      ? products
      : products.filter(product => product.category === category);
    setFilteredProducts(filtered);
    setLoading(false);
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="row">
      <div className="container first-box">
        <h3>Filters</h3>
        <div className="filter-category">
          <h4>Categories</h4>
          <ul>
            {categories.map((category) => (
              <li key={category} onClick={() => handleFilterChange(category)}>
                {category}
              </li>
            ))}
          </ul>

          <h4>Price</h4>
          <ul>
            {priceRanges.map((range) => (
              <li key={range}>
                {range}
              </li>
            ))}
          </ul>

          <h4>Reviews</h4>
          <ul>
            {reviews.map((review) => (
              <li key={review}>
                {review}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="container second-box">
        <h3>Products</h3>
        {loading ? <div className="loader"></div> : (
          <div className="product-list">
            {currentProducts.map((product, index) => (
              <div key={index} className="product-cards">
                <img src={product.image} alt={product.name} />
                <h4>{product.name}</h4>
                <p>{product.description}</p>
                <p>Price: ${product.price}</p>
              </div>
            ))}
          </div>
        )}

        <div className="pagination">
          {[...Array(Math.ceil(filteredProducts.length / productsPerPage))].map((_, i) => (
            <button key={i} onClick={() => handlePageChange(i + 1)}>
              {i + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtercard;
