import React from 'react';
import { Meteor } from 'meteor/meteor';
import { ProductsHeader, ProductsLayout } from './products.style';
import { StyledPostList, StyledPostListItem } from '../home/home.style';
import { Product } from '../../components/products';
import { AddProducts } from './add-products/add-products';
import { Spin } from 'antd';
import { IProductsCollection } from '../../../api/db/products/products.collection';
import { IMessageCollection } from '/imports/api/db/messages/message.collection';

interface ProductsContent {
  price: string;
  image?: string;
  title: string;
  messages: IMessageCollection[];
}
interface ProductsProps {
  isLoading: boolean;
  products: IProductsCollection[];
  addProduct: (content: ProductsContent) => void;
}

function Products({
  isLoading,
  products,
  addProduct,
}: ProductsProps): JSX.Element {
  if (isLoading) {
    <Spin />;
  }

  return (
    <ProductsLayout>
      <ProductsHeader>Products Catalog</ProductsHeader>

      {!products.length && <p>There are no products</p>}
      <StyledPostList>
        {products.map(({ _id, author, price, title, messages }) => (
          <StyledPostListItem key={_id}>
            <Product
              _id={_id}
              ownerName={author?.username ?? 'anonymous'}
              body={price}
              title={title}
              messages={messages}
            />
          </StyledPostListItem>
        ))}
      </StyledPostList>
      <AddProducts addProductHandler={addProduct} />
    </ProductsLayout>
  );
}
export { Products };
