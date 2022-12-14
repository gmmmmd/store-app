import React, { useEffect, useState } from 'react';

import ProductCard from '@components/ProductCard';
import { IProduct } from 'src/types/productType';

import styles from './ProductList.module.scss';

export type ProductsListProps = {
  products: IProduct[];
  product?: IProduct;
  items: number;
};

const ProductList: React.FC<ProductsListProps> = ({ products, items }) => {
  const [amount, setAmount] = useState<number>(items);

  useEffect(() => {
    setAmount(products.length);
  }, [products, products.length]);

  if (!products) return null;

  return (
    <section className={styles.ProductList}>
      <div className={styles.ProductList__header}>
        <h2 className="title-h2">Total Product</h2>
        <span className={styles.ProductList__amount}>{amount}</span>
      </div>
      <div className={styles.ProductList__items}>
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
