import axios from 'axios'
import { useEffect, useState } from 'react'
import Cards from '../components/cards'

const Home = () => {
	const [product, setproduct] = useState(null)
	const [loading, setloading] = useState(true)
	// eslint-disable-next-line no-unused-vars
	const [error, seterror] = useState(null)
	useEffect(() => {
		const getProducts = async () => {
			try {
				const res = await axios.get('https://dummyjson.com/products')
				setproduct(res.data.products)
			} catch (error) {
				console.log(error)
			} finally {
				setloading(false)
			}
		}
		getProducts()
	}, [])

	if (loading) return <h1 className='text-center mt-[50vh] text-2xl'>Yuklanmoqda</h1>
	if (error) return <p>Xatolik: {error}</p>
	console.log(product);
	
	return (
		<>
			{loading ? (
				<p>Yuklanvoti..Beeep...Beep.</p>
			) : (
				<div className='flex flex-wrap gap-20 '>
					{
						product.map((e) => (
							<Cards thumbnail={e.thumbnail} title={e.title} description={e.description}  id={e.id} />
						))
					}
				</div>
			)}
		</>
	)
}

export default Home
