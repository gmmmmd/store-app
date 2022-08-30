import React, { useEffect, useState } from 'react';

import Loader from '@components/Loader';
import { LoaderSize } from '@components/Loader/Loader';
import ProductFullCard from '@components/ProductFullCard';
import RelatedItems from '@components/RelatedItems';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProductPage: React.FC = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<string>();
  const [relatedProducts, setRelatedProducts] = useState<[]>();
  const [product, setProduct] = useState<[]>();

  useEffect(() => {
    const fetch = async () => {
      try {
        const getFullProduct = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(getFullProduct.data);
        setCategory(getFullProduct.data.category);
        setIsLoading(false);
      } catch (error) {
        alert('server disabled');
      }
    };
    fetch();
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (category) {
      const fetchCategory = async () => {
        try {
          const getCategory = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
          );
          setRelatedProducts(getCategory.data);
          setIsLoading(false);
        } catch (error) {
          alert('server disabled');
        }
      };
      fetchCategory();
    }
  }, [category]);

  if (isLoading) {
    return <Loader size={LoaderSize.l} />;
  }

  return (
    <main className="Container">
      {product && <ProductFullCard product={product} />}
      {relatedProducts && <RelatedItems relatedProducts={relatedProducts} />}
    </main>
  );
};

export default SingleProductPage;
