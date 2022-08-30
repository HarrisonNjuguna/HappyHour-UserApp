// @ts-check
import { initSchema } from '@aws-amplify/datastore';
import { schema } from './schema';



const { Product, Shop } = initSchema(schema);

export {
  Product,
  Shop
};