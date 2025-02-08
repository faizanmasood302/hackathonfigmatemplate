import { type SchemaTypeDefinition } from 'sanity'
import product from './product'
import category from './category'
import chef from './chef'
import cart from './cart'
import user from './user'
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [product, category,chef,cart,user],
}
