
export const getItems = () => {
	return [
		{ name: "Iceberg", price: "2.17 €" },
		{ name: "Tomato", price: "0.73 €" }
	];
}

export const getShoppingCart = () => {
	return {
		"TotalQuantity": 3,
		"ShoppingCartProducts": [
			{
				"Product": {
					"Name": "Iceberg",
					"FinalPrice": 2.17
				},
				"Quantity": 1
			},
			{
				"Product": {
					"Name": "Tomato",
					"FinalPrice": 0.73
				},
				"Quantity": 2
			}
		],
		"TotalPrice": "3.63 \u20AC"
	}
}

export const addItem = (itemName) => {

}