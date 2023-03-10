
export const getAvailableProducts = async () => {

	const res = await fetch(
		"http://shoppingcartapi-env.eba-pn2hibqp.eu-central-1.elasticbeanstalk.com/products"
	)

	return await res.json()
}

export const getShoppingCart = async () => {


	const res = await fetch(
		"http://shoppingcartapi-env.eba-pn2hibqp.eu-central-1.elasticbeanstalk.com/shopping-cart"
	)

	return await res.json()
}

export const addItem = async (productName) => {
	const requestOptions = {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Credentials': 'true'
		},
		body: JSON.stringify({ ProductName: productName })
	};


	const res = await fetch(
		"http://shoppingcartapi-env.eba-pn2hibqp.eu-central-1.elasticbeanstalk.com/add-item",
		requestOptions
	)
	console.log(res);
}
