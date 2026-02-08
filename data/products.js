export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
      if (product.id === productId) {
          matchingProduct = product;
      }
  });
 return matchingProduct; 
}

export const products = [{
  id: 'pd1',
  image: '/images/strawberry & blueberry.jpg',
  name: 'Strawberry & Blueberry',
  price: 5200
}, {
  id: 'pd2',
  image: '/images/apple.jpg',
  name: 'apple',
  price: 3500
}, {
  id: 'pd3',
  image: '/images/banana.jpg',
  name: 'banana',
  price: 3200
}, {
  id: 'pd4',
  image: '/images/berrries.jpg',
  name: 'berrries',
  price: 4200
}, {
  id: 'pd5',
  image: '/images/blueberry & raspberry.jpg',
  name: 'blueberry & raspberry',
  price: 6200
}, {
  id: 'pd6',
  image: '/images/granola with greek.jpg',
  name: 'granola with greek',
  price: 5000
}, {
  id: 'pd7',
  image: '/images/granola.jpg',
  name: 'granola',
  price: 4500
}, {
  id: 'pd8',
  image: '/images/greek yogurt.jpg',
  name: 'greek yogurt',
  price: 3000
}, {
  id: 'pd9',
  image: '/images/kiwi.jpg',
  name: 'kiwi',
  price: 4500
}, {
  id: 'pd10',
  image: '/images/layered.jpg',
  name: 'layered',
  price: 4000
}, {
  id: 'pd11',
  image: '/images/mango.jpg',
  name: 'mango',
  price: 4000
}, {
  id: 'pd12',
  image: '/images/yogurt, blue&raspberry and grano.jpg',
  name: 'yogurt,blue&raspberry and granola',
  price: 6500
}];



