import React, {useContext} from 'react';

// Components
import Product from './Product';
import {ProductContext} from '../contexts/ProductContext'

const Products = () => {
	const {products, addItem} = useContext(ProductContext);

	return (
		<div className="products-container">
			<products>
			{products.map(product => (
				<Product
					key={product.id}
					product={product}
					addItem={addItem}
				/>
			))}
			</products>
		</div>
	);
};

export default Products;
