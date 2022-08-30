import { ModelInit, MutableModel, PersistentModelConstructor } from "@aws-amplify/datastore";





type ProductMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

type ShopMetaData = {
  readOnlyFields: 'createdAt' | 'updatedAt';
}

export declare class Product {
  readonly id: string;
  readonly name: string;
  readonly image_url?: string | null;
  readonly description?: string | null;
  readonly price: number;
  readonly shopID: string;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Product, ProductMetaData>);
  static copyOf(source: Product, mutator: (draft: MutableModel<Product, ProductMetaData>) => MutableModel<Product, ProductMetaData> | void): Product;
}

export declare class Shop {
  readonly id: string;
  readonly name: string;
  readonly image_url: string;
  readonly categories: string;
  readonly price: number;
  readonly minDeliveryTime: number;
  readonly maxDeliveryTime: number;
  readonly reviews?: number | null;
  readonly rating?: number | null;
  readonly review_count?: number | null;
  readonly latitude: number;
  readonly longitude: number;
  readonly Products?: (Product | null)[] | null;
  readonly createdAt?: string | null;
  readonly updatedAt?: string | null;
  constructor(init: ModelInit<Shop, ShopMetaData>);
  static copyOf(source: Shop, mutator: (draft: MutableModel<Shop, ShopMetaData>) => MutableModel<Shop, ShopMetaData> | void): Shop;
}