import axios from 'axios'
import { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

const CardDetail = () => {
	const { id } = useParams()
	const [datale, setdatale] = useState({})

	const idproduct = async () => {
		const res = await axios.get(`https://dummyjson.com/products/${id}`)
		setdatale(res.data)
	}

	useEffect(() => {
		idproduct()
	}, [id])
	if (!CardDetail) return null
	return (
		<div className='mx-auto my-6 flex max-w-3xl flex-col items-center gap-6 rounded-2xl bg-[#1e1e2a] p-5 text-gray-100 shadow-xl sm:flex-row sm:items-start'>
			<img
				className='h-auto w-full max-w-[260px] shrink-0 rounded-xl object-cover sm:h-80 sm:w-56'
				src={datale.thumbnail}
				alt={datale.title}
			/>

			<div className='flex flex-col gap-3'>
				<h2 className='text-3xl font-bold'>{datale.title}</h2>
				<div className='flex flex-col items-start gap-3 text-sm text-gray-400'>
					<div className='rounded-full bg-violet-600 px-3 py-0.5 text-xs text-white'>
						{datale.title}
					</div>
					<ul className='flex flex-col gap-8'>
						<li className='text-accent'>
							⭐ {datale.discountPercentage ?? 'N/A'}
						</li>
						<li className='text-accent'>⭐ rating {datale.rating ?? 'N/A'}</li>
						<li className='text-accent'>{datale.category ?? '?'} category</li>
						<li className='text-accent'>{datale.stock ?? '?'} stock</li>
						
					</ul>
				</div>

				<p className='line-clamp-6 leading-relaxed'>{datale.synopsis}</p>

				<Link to={'/'}>
					{' '}
					<button className='self-start rounded-lg bg-violet-600 px-5 py-2.5 text-white transition-colors hover:bg-violet-700'>
						back
					</button>
				</Link>
			</div>
		</div>
	)
}

export default CardDetail
