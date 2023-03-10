
export const getAvailableProducts = async () => {

	const res = await fetch(
		"https://localhost:7039/products"
	)

	return await res.json()
}

export const getShoppingCart = async () => {


	const res = await fetch(
		"https://localhost:7039/shopping-cart"
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
		"https://localhost:7039/add-item",
		requestOptions
	)
	console.log(res);
}
