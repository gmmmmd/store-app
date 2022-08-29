import React, { useState, useEffect } from 'react';

import Loader from '@components/Loader';
import { LoaderSize } from '@components/Loader/Loader';
import ProductList from '@components/ProductList';
import SearchBar from '@components/SearchBar';
import axios from 'axios';

import styles from './ProductPage.module.scss';

const ProductPage: React.FC = () => {
  const [categories, setCategories] = useState();
  const [searchCategory, setSearchCategory] = useState('');
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
        setIsLoading(false);
      } catch (error) {
        alert('server disabled');
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    const fetch = async () => {
      try {
        const getCategoryes = await axios.get(
          'https://fakestoreapi.com/products/categories'
        );
        setCategories(getCategoryes.data);
        setIsLoading(false);
      } catch (error) {
        alert('server disabled');
      }
    };

    fetch();
  }, []);

  useEffect(() => {
    if (searchCategory) {
      const fetch = async () => {
        try {
          const getCategoryes = await axios.get(
            `https://fakestoreapi.com/products/category/${searchCategory}`
          );
          setProducts(getCategoryes.data);
          setIsLoading(false);
        } catch (error) {
          alert('server disabled');
        }
      };
      fetch();
    }
  }, [searchCategory]);

  return (
    <main className="Container">
      <section className={styles.TitleWrapper}>
        <h1 className="title-h1">Products</h1>
        <div className={styles.TitleWrapper__description}>
          We display products based on the latest products we have, if you want
          to see our old products please enter the name of the item
        </div>
      </section>
      <SearchBar
        categories={categories}
        searchCategory={searchCategory}
        setSearchCategory={setSearchCategory}
      />
      {isLoading ? (
        <Loader size={LoaderSize.l} className={styles.Loader} />
      ) : (
        <ProductList products={products} items={0} />
      )}
    </main>
  );
};

export default ProductPage;
