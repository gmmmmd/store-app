import React, { useEffect, useState } from 'react';

import Loader from '@components/Loader';
import { LoaderSize } from '@components/Loader/Loader';
import ProductFullCard from '@components/ProductFullCard';
import RelatedItems from '@components/RelatedItems';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProductPage: React.FC = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [category, setCategory] = useState();
  const [relatedProducts, setRelatedProducts] = useState();
  const [product, setProduct] = useState({
    id: null,
    image: '',
    category: '',
    title: '',
    description: '',
    price: null,
    rating: {
      rate: null,
      count: null,
    },
  });

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
      <ProductFullCard
        id={product.id}
        image={product.image}
        category={product.category}
        title={product.title}
        description={product.description}
        price={product.price}
        rate={product.rating.rate}
        count={product.rating.count}
      />
      {relatedProducts && <RelatedItems relatedProducts={relatedProducts} />}
    </main>
  );
};

export default SingleProductPage;
