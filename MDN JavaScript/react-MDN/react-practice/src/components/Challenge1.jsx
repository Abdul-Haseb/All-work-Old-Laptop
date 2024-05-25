import { useState } from 'react';

const initialProducts = [
  {
    id: 0,
    name: 'Baklava',
    count: 1,
  },
  {
    id: 1,
    name: 'Cheese',
    count: 5,
  },
  {
    id: 2,
    name: 'Spaghetti',
    count: 2,
  },
];

export const Challenge1 = () => {
  const [product, setProduct] = useState(initialProducts);

  const handleIncremenetClick = (id) => {
    setProduct(
      product.map((prod) => {
        if (prod.id === id) {
          return { ...prod, count: prod.count + 1 };
        } else {
          return prod;
        }
      }),
    );
  };

  const handleDecrementClick = (id) => {
    setProduct(
      product.map((prod) => {
        if (prod.id === id) {
          return { ...prod, count: prod.count + 1 };
        } else {
          return prod;
        }
      }),
    );
  };
  return (
    <>
      <ul>
        {product.map((product) => (
          <li key={product.id}>
            {product.name}({product.count}){' '}
            <button
              className="mt-2 rounded-md bg-[#F08080] px-2"
              onClick={() => handleIncremenetClick(product.id)}
            >
              +
            </button>
            <button
              className="mt-2 rounded-md bg-[#F08080] px-2"
              onClick={() => handleDecrementClick(product.id)}
            >
              -
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};
