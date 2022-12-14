//importo los productos
import { productList } from '../prod/productos.js';

const getById = (id, array) => array.find((el) => el.id === id);

// promesas
const getProducts = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(productList);
  }, 2000);
});

//Async Await que setea mi hook de estado
const getAllProductsFromDB = async (setState) => {
  try {
    const result = await getProducts;
    setState(result);
  } catch (error) {
    console.log(error);
    alert('No podemos mostrar los productos en este momento');
  }
};

//Async Await que setea mi hook de estado
//Esta función recibe el id y la función setProduct para setear product con el producto correspondiente al id. 
const getProductById = async (id, setState) => {
  try {
    const result = await getProducts;
    setState(getById(id, result));
  } catch (error) {
    console.log(error);
  }
};

export { getAllProductsFromDB, getProductById };