import React, { useEffect, useContext, useState } from 'react';

import Loader from '@components/Loader';
import { LoaderSize } from '@components/Loader/Loader';
import ProductList from '@components/ProductList';
import SearchBar from '@components/SearchBar';
import { Meta } from '@utils/meta';
import { observer } from 'mobx-react-lite';
import { IProduct } from 'src/types/productType';

import { ProductPageContext } from './../../App/App';
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
  const context = useContext(ProductPageContext);
  const { ProductsStore } = context;

  useEffect(() => {
    if (context) {
      ProductsStore.getProductsList();
    }
  }, [ProductsStore, context]);

  useEffect(() => {
    ProductsStore.getCategories();
  }, []);

  useEffect(() => {
    if (ProductsStore.searchCategory) {
      ProductsStore.getSearchCategory();
    }
  }, [ProductsStore, ProductsStore.searchCategory]);

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
      {ProductsStore.meta === Meta.loading ? (
        <Loader size={LoaderSize.l} className={styles.Loader} />
      ) : (
        <ProductList products={ProductsStore.productsList} items={0} />
      )}
    </main>
  );
};

export default observer(ProductPage);
