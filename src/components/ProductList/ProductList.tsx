import React, { useContext, useEffect, useState } from 'react';

import ProductCard from '@components/ProductCard';
import { observer } from 'mobx-react-lite';

import { StoreContext } from '../../App/App';
import styles from './ProductList.module.scss';

const ProductList: React.FC = () => {
  const [amount, setAmount] = useState<number>(0);

  const context = useContext(StoreContext);
  const { ProductsStore } = context;

  const searchList = ProductsStore.productsList.filter((product) => {
    return (
      product.title.toLowerCase().includes(ProductsStore.query) ||
      product.description.toLowerCase().includes(ProductsStore.query)
    );
  });

  useEffect(() => {
    setAmount(ProductsStore.productsList.length);
  }, [ProductsStore.productsList, searchList.length]);

  if (!ProductsStore.productsList) return null;

  return (
    <section className={styles.ProductList}>
      <div className={styles.ProductList__header}>
        <h2 className="title-h2">Total Product</h2>
        <span className={styles.ProductList__amount}>{amount}</span>
      </div>
      <div className={styles.ProductList__items}>
        {ProductsStore.productsList.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default observer(ProductList);
