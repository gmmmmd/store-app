import React, { useContext, useEffect, useState } from 'react';

import ProductCard from '@components/ProductCard';
import { observer } from 'mobx-react-lite';
import { IProduct } from 'src/types/productType';

import { StoreContext } from './../../App/App';
import styles from './ProductList.module.scss';

export type ProductsListProps = {
  products?: IProduct[];
  product?: IProduct;
};

const ProductList: React.FC<ProductsListProps> = () => {
  const [amount, setAmount] = useState<number>(0);

  const context = useContext(StoreContext);
  const { ProductsStore } = context;

  useEffect(() => {
    setAmount(ProductsStore.productsList.length);
  }, [ProductsStore.productsList, ProductsStore.productsList.length]);

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
