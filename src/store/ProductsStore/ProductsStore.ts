import { Meta } from '@utils/meta';
import axios from 'axios';
import {
  action,
  computed,
  makeObservable,
  observable,
  runInAction,
} from 'mobx';
import { IProduct } from 'src/types/productType';

type PrivateFields =
  | '_productsList'
  | '_meta'
  | '_categories'
  | '_searchCategory';

export default class ProductsStore {
  private _productsList: IProduct[] = [];
  private _meta: Meta = Meta.initial;
  private _categories: string[] = [];
  private _searchCategory: string = '';

  constructor() {
    makeObservable<ProductsStore, PrivateFields>(this, {
      _productsList: observable.ref,
      _meta: observable,
      _categories: observable.ref,
      _searchCategory: observable,
      getCategories: action.bound,
      getProductsList: action.bound,
      getSearchCategory: action.bound,
      setSearchCategory: action.bound,
      meta: computed,
      productsList: computed,
      categories: computed,
      searchCategory: computed,
    });
  }

  get productsList(): IProduct[] {
    return this._productsList;
  }

  get meta(): Meta {
    return this._meta;
  }

  get categories(): string[] {
    return this._categories;
  }

  get searchCategory(): string {
    return this._searchCategory;
  }

  getProductsList = async () => {
    if (this.meta === Meta.loading || this.meta === Meta.success) {
      return;
    }

    this._meta = Meta.loading;
    this._productsList = [];

    try {
      const productData = await axios.get('https://fakestoreapi.com/products');
      runInAction(() => {
        this._productsList = productData.data;
        this._meta = Meta.success;
      });
    } catch (error) {
      this._meta = Meta.error;
      alert('server disabled');
    }
  };

  getCategories = async (): Promise<void> => {
    this._categories = [];
    try {
      const categoriesData = await axios.get(
        'https://fakestoreapi.com/products/categories'
      );
      this._categories = categoriesData.data;
    } catch (error) {
      alert('server disabled');
    }
  };

  setSearchCategory = (item: string): void => {
    this._searchCategory = item;
  };

  getSearchCategory = async (): Promise<void> => {
    try {
      const getCategoryes = await axios.get(
        `https://fakestoreapi.com/products/category/${this._searchCategory}`
      );
      this._productsList = getCategoryes.data;
    } catch (error) {
      alert('server disabled');
    }
  };
}
