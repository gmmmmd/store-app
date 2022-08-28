import React from 'react';

import Button, { ButtonColor } from '@components/Button/Button';
import { ProductCardProps } from '@components/ProductCard/ProductCard';
import { useParams } from 'react-router-dom';

import styles from './ProductFullCard.module.scss';

const ProductFullCard: React.FC<ProductCardProps> = ({
  image,
  category,
  title,
  description,
  price,
  rate,
  count,
  onClick,
}) => {
  const { paramsId } = useParams();
  return (
    <section className={styles.Block}>
      <div key={paramsId} className={styles.Block__container}>
        <img
          src={image}
          alt=""
          width={600}
          height={600}
          loading="lazy"
          decoding="async"
          className={styles.Block__img}
        />
        <div className={styles.Block__info}>
          <div className={styles.Block__titleWrapper}>
            <h2 className={`${styles.Block__title} title-h2`}>{title}</h2>
            <span className={`${styles.Block__category} text-style`}>
              {category}
            </span>
          </div>
          <div className={styles.Block__ratingWrapper}>
            <span className={styles.Block__ratingTitle}>Rating</span>
            <div className={styles.Block__ratingInner}>
              <span>stars: {rate}</span>
              <span>count: {count}</span>
            </div>
          </div>
          <div className={`${styles.Block__description} text-style`}>
            {description}
          </div>
          <div className={`${styles.Block__price} title-h2`}>${price}</div>
          <div className={styles.Block__buttonWrapper}>
            <Button
              className={styles.Block__button}
              color={ButtonColor.primary}
            >
              Buy Now
            </Button>
            <Button
              className={styles.Block__button}
              color={ButtonColor.secondary}
            >
              Add to Chart
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductFullCard;
