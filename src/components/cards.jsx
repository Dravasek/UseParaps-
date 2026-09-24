import { Link } from 'react-router-dom'

const Cards = Props => {
	return (
		<div>
			<div className="container mx-auto ">
				
			<div key={Props.id} className='card bg-base-100 w-96 shadow-sm mt-20'>
				<figure>
					<img
						src={Props.thumbnail}
						alt='Shoes'
					/>
				</figure>
				<div className='card-body'>
					<h2 className='card-title'>{Props.title}</h2>
					<p>{Props.dis}
					</p>
					<div className='card-actions justify-end'>
						<Link to={`/product/aboute/${Props.id}`}><button className='btn btn-primary'>Show more</button></Link>
					</div>
				</div>
			</div>
			</div>
		</div>
	)
}

export default Cards
