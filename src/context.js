import React, { Component } from 'react';
import { storeProducts, detailProduct } from './data';

const ProductContext = React.createContext();

// Provider will provide all info for app
class ProductProvider extends Component {
	state = {
		products: [],
		detailProduct
	};
	componentDidMount() {
		this.setProducts();
	}
	setProducts = () => {
		let tempProducts = [];
		storeProducts.forEach((item) => {
			const singleItem = { ...item };
			tempProducts = [
				...tempProducts,
				singleItem
			];
		});
		this.setState(() => {
			return { products: tempProducts };
		});
	};
	handleDetail = () => {
		console.log('hello from deatil');
	};
	addToCart = () => {
		console.log('hello from cart');
	};
	render() {
		return (
			<ProductContext.Provider
				value={{
					...this.state,
					handleDetail: this.handleDetail,
					addToCart: this.addToCart
				}}
			>
				{this.props.children}
			</ProductContext.Provider>
		);
	}
}

// Consumer will use all the info from app
const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
