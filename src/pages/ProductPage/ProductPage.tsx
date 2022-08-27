import React, { useState, useEffect } from 'react';

import ProductList from '@components/ProductList';
import SearchBar from '@components/SearchBar';
import axios from 'axios';

import styles from './ProductPage.module.scss';

const ProductPage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      try {
        const getProducts = await axios.get(
          'https://fakestoreapi.com/products'
        );
        setProducts(
          getProducts.data.map(
            (i: {
              id: number;
              image: string;
              category: string;
              title: string;
              description: string;
              price: number;
            }) => ({
              id: i.id,
              image: i.image,
              category: i.category,
              title: i.title,
              description: i.description,
              price: i.price,
            })
          )
        );
      } catch (error) {
        alert('server disabled');
      }
    };

    fetch();
  }, []);

  return (
    <main className="Container">
      <section className={styles.TitleWrapper}>
        <h1 className="title-h1">Products</h1>
        <div className={styles.TitleWrapper__description}>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </div>
      </section>
      <SearchBar />
      <ProductList products={products} items={0} />
    </main>
  );
};

export default ProductPage;
