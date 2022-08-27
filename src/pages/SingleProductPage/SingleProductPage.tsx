import React, { useEffect, useState } from 'react';

import ProductFullCard from '@components/ProductFullCard';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const SingleProductPage = () => {
  const { id } = useParams();
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
        setProduct({ ...getFullProduct.data });
      } catch (error) {
        alert('server disabled');
      }
    };

    fetch();
  }, [id]);

  if (!product) {
    return <div>Загрузка</div>;
  }

  return (
    <main className="Container">
      <ProductFullCard
        image={product.image}
        category={product.category}
        title={product.title}
        description={product.description}
        price={product.price}
        id={product.id}
        rate={product.rating.rate}
        count={product.rating.count}
      />
    </main>
  );
};

export default SingleProductPage;
