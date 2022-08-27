import React, { useState } from 'react';

import Button from '@components/Button';
import Input from '@components/Input';
import Select from '@components/Select';

import styles from './SearchBar.module.scss';

export type SearchBarProps = {
  isSelectOpen?: boolean;
};

const SearchBar: React.FC<SearchBarProps> = () => {
  const [values, setValues] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setValues(value);
  };

  return (
    <section className={styles.Block}>
      <div className={styles.Block__wrapper}>
        <form className={styles.Block__form}>
          <Input
            type="text"
            value={values}
            onChange={handleChange}
            placeholder={'Search property'}
            className={styles.Block__input}
          />
          <Button type="submit" className={styles.Block_button}>
            Find Now
          </Button>
        </form>{' '}
      </div>
      <Select className={styles.Block__select} />
    </section>
  );
};

export default SearchBar;
