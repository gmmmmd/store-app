import React, { useState } from 'react';

import Button from '@components/Button';
import { ButtonColor } from '@components/Button/Button';
import classNames from 'classnames';

import styles from './Select.module.scss';

export type SelectProps = {
  className?: string;
};

const Select: React.FC<SelectProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState(false);
  const openChange = () => {
    setIsOpen(!isOpen);
  };

  const selectClasses = classNames(styles.Block, className);

  return (
    <div className={selectClasses}>
      <Button
        onClick={openChange}
        color={ButtonColor.secondary}
        className={styles.Block__button}
      >
        Filter
      </Button>
    </div>
  );
};

export default Select;
