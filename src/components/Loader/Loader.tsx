import React from 'react';

import loader from '@assets/images/loader.svg';
import classNames from 'classnames';

import styles from './Loader.module.scss';

export enum LoaderSize {
  s = 's',
  m = 'm',
  l = 'l',
}

export type LoaderProps = {
  loading?: boolean;
  size?: LoaderSize;
  className?: string;
};

export const Loader: React.FC<LoaderProps> = ({
  loading = 'true',
  size = 'm',
  className,
}) => {
  let loaderClasses = classNames(styles.Block, className, {
    [styles.Block_size_l]: LoaderSize.l === size,
    [styles.Block_size_m]: LoaderSize.m === size,
    [styles.Block_size_s]: LoaderSize.s === size,
  });
  if (loading) {
    return (
      <div className={loaderClasses}>
        <img src={loader} alt="" className={styles.Block__img} />
      </div>
    );
  }
  return null;
};

export default Loader;
