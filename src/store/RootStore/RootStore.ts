import ProductsStore from '@store/ProductsStore';
import SingleProductStore from '@store/SingleProductStore';

export default class RootStore {
  ProductsStore: ProductsStore;
  SingleProductStore: SingleProductStore;

  constructor() {
    this.ProductsStore = new ProductsStore();
    this.SingleProductStore = new SingleProductStore();
  }
}
