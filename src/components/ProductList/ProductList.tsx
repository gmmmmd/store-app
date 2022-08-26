import React, { useEffect, useState } from 'react';

import ProductCard from '@components/ProductCard';
import { ProductCardProps } from '@components/ProductCard/ProductCard';

import styles from './ProductList.module.scss';

export type ProductsListProps = {
  products: ProductCardProps[];
  items: number;
};

const ProductList: React.FC<ProductsListProps> = ({ products, items }) => {
  const [amount, setAmount] = useState(items);
  useEffect(() => {
    setAmount(products.length);
  }, [products.length]);
  return (
    <section className={styles.ProductList}>
      <div className={styles.ProductList__header}>
        <h2 className="title-h2">Total Product</h2>
        <span className={styles.ProductList__amount}>{amount}</span>
      </div>
      <div className={styles.ProductList__items}>
        {products.map((product) => (
          <ProductCard
            id={product.id}
            image={product.image}
            category={product.category}
            title={product.title}
            description={product.description}
            price={product.price}
          />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
