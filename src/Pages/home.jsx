import axios from 'axios'
import { useEffect, useState } from 'react'
import Cards from '../components/cards'

const Home = () => {
	const [product, setproduct] = useState([])

	const [value, Setvalue] = useState('')
	useEffect(() => {
		const getProducts = async () => {
		
				const res = await axios.get('https://dummyjson.com/products')
				setproduct(res.data.products)
				
			}
			getProducts()
		}, [])
		
		const filteredProducts = product.filter((elem) =>  elem.title.toLowerCase().includes(value.toLowerCase()))



	console.log(product);
	
	return (
		<div>
					<input  onChange={(e) => Setvalue(e.target.value) } value={value}  className='input input-ghost my-20 mx-[730px]' placeholder='Search' type="text" />
				<div className='flex flex-wrap gap-20 '>
					{
						filteredProducts && filteredProducts.map((e) => (
							<Cards thumbnail={e.thumbnail} title={e.title} description={e.description}  id={e.id} />
						))
					}
				</div>
			
		</div>
	)
}

export default Home
