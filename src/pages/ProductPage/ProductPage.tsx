import React, { useState, useEffect } from 'react';

import Loader from '@components/Loader';
import { LoaderSize } from '@components/Loader/Loader';
import ProductList from '@components/ProductList';
import SearchBar from '@components/SearchBar';
import axios from 'axios';
import { IProduct } from 'src/types/productType';

import styles from './ProductPage.module.scss';

export type ProductItem = {
  id: number;
  image: string;
  category: string;
  title: string;
  description: string;
  price: number;
};

const ProductPage: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [searchCategory, setSearchCategory] = useState<string>('');
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetch = async () => {
      try {
        const productData = await axios.get(
          'https://fakestoreapi.com/products'
        );
        const result = productData.data;
        setProducts(result);
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
        const categoriesData = await axios.get(
          'https://fakestoreapi.com/products/categories'
        );
        setCategories(categoriesData.data);
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
