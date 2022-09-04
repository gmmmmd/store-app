import ProductsStore from '@store/ProductsStore';

export default class RootStore {
  ProductsStore: ProductsStore;

  constructor() {
    this.ProductsStore = new ProductsStore();
  }
}
