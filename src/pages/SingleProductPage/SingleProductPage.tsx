import React, { useContext, useEffect, useState } from 'react';

import Loader from '@components/Loader';
import { LoaderSize } from '@components/Loader/Loader';
import ProductFullCard from '@components/ProductFullCard';
import RelatedItems from '@components/RelatedItems';
import { Meta } from '@utils/meta';
import { observer } from 'mobx-react-lite';
import { useParams } from 'react-router-dom';
import { IProduct } from 'src/types/productType';

import { StoreContext } from './../../App/App';

const SingleProductPage: React.FC = () => {
  const context = useContext(StoreContext);
  const { SingleProductStore } = context;

  const { id } = useParams();

  useEffect(() => {
    SingleProductStore.setId(id);

    SingleProductStore.getFullProduct();

    window.scrollTo(0, 0);
  }, [SingleProductStore, id]);

  useEffect(() => {
    if (SingleProductStore.category) {
      SingleProductStore.getRelatedProducts();
    }
  }, [SingleProductStore, SingleProductStore.category]);

  return (
    <main className="Container">
      {SingleProductStore.meta === Meta.loading ? (
        <Loader size={LoaderSize.l} />
      ) : (
        <ProductFullCard />
      )}
      <RelatedItems />
    </main>
  );
};

export default observer(SingleProductPage);
