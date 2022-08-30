import React from 'react';

import ProductCard, {
  ProductCardProps,
} from '@components/ProductCard/ProductCard';

import styles from './RelatedItems.module.scss';

export type RelatedProductsProps = {
  relatedProducts: ProductCardProps[];
};

const RelatedItems: React.FC<RelatedProductsProps> = ({ relatedProducts }) => {
  return (
    <section>
      <div className={styles.Block}>
        <h2 className={`${styles.Block__title} title-h2`}>Related Items</h2>
        <div className={styles.Block__items}>
          {relatedProducts &&
            relatedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedItems;
