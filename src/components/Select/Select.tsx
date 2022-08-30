import React, { useState } from 'react';

import Button from '@components/Button';
import { ButtonColor } from '@components/Button/Button';
import classNames from 'classnames';

import styles from './Select.module.scss';

export type SelectProps = {
  className?: string;
  categories?: string[];
  searchCategory?: string;
  setSearchCategory?: (i: string) => void;
};

const Select: React.FC<SelectProps> = ({
  className,
  categories,
  searchCategory,
  setSearchCategory,
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const openChange = () => {
    setIsOpen(!isOpen);
  };
  const onChangeValue = (item: string) => {
    setSearchCategory?.(item);
    setIsOpen(!isOpen);
  };

  const selectClasses = classNames(styles.Block, className);
  if (!categories) return null;
  return (
    <div className={selectClasses}>
      <Button
        onClick={openChange}
        color={ButtonColor.secondary}
        className={classNames(styles.Block__button)}
      >
        {searchCategory ? searchCategory : 'Filter'}
      </Button>
      {isOpen && (
        <ul className={styles.Block__list}>
          {categories.map((item) => {
            return (
              <li key={item}>
                <Button
                  color={ButtonColor.secondary}
                  className={styles.Block__openButton}
                  onClick={() => onChangeValue(item)}
                >
                  {item}
                </Button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Select;
