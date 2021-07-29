import { Meteor } from 'meteor/meteor';
import React from 'react';
import { useParams } from 'react-router-dom';
import { useTracker } from 'meteor/react-meteor-data';

import { ProductsContent } from './products.type';
import { Products } from '/imports/ui/pages/products/products';
import { ProductsCollection, IProductsCollection } from '../../../api/db/products/products.collection';

function ProductsContainer(): JSX.Element {
  const { id } = useParams<{ id: string }>();
  const { products, isLoading } = useTracker(() => {
    const productsHandler = Meteor.subscribe('getProducts');

    if (!productsHandler.ready()) {
      return { isLoading: true, products: [] };
    }

    const products : IProductsCollection[]= ProductsCollection.find().fetch();

    return { isLoading: false, products };
  });

  const addProduct = (content: ProductsContent) => {
    Meteor.call('createProduct', {
      content: { title: content.title, price: content.price },
      author: Meteor.user(),
    });
  };

  return React.createElement(Products, {
    isLoading,
    products,
    addProduct,
  });
}

export { ProductsContainer };
