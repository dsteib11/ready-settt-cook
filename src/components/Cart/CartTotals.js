import React from 'react';
import { Link } from 'react-router-dom';

export default function CartTotals({ value }) {
	const { cartSubTotal, cartTax, cartTotal, clearCart } = value;
	return (
		<React.Fragment>
			<div className="container">
				<div className="row">
					<div className="col-10 mt-2 ml-sm-5 text-right ml-md-auto col-sm-8 text-capitalize text-right">
						<Link to="/">
							<button className="btn btn-black text-uppercase mb-3 px-3" type="button">
								back to store
							</button>
						</Link>
						<Link to="/">
							<button
								className="btn clear-btn mx-2 text-uppercase mb-3 px-3"
								type="button"
								onClick={() => clearCart()}
							>
								clear cart
							</button>
						</Link>
						<h5>
							<span className="text-title">subtotal :</span>
							<strong>$ {cartSubTotal}</strong>
						</h5>
						<h5>
							<span className="text-title">tax :</span>
							<strong>$ {cartTax}</strong>
						</h5>
						<h5>
							<span className="text-title">total :</span>
							<strong>$ {cartTotal}</strong>
						</h5>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
}
