import { Link } from 'react-router-dom'

const Header = () => {
	return (
		<div>
			<div className='container mx-auto px-4'>
				<div className='navbar bg-base-100 shadow-sm'>
					<div className='flex-1'>
						<Link to={'/'} className='btn btn-ghost text-xl'>daisyUI</Link>
					</div>
					<div className='flex-none'>
						<ul className='menu menu-horizontal px-1'>
							<li>
								<details>
									<summary>Parent</summary>
									<ul className='bg-base-100 rounded-t-none p-2'>
										<li>
											<Link to={'/'}>Home</Link>
										</li>
										<li>
											<Link to={'/aboute'}>aboute</Link>
										</li>
									</ul>
								</details>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Header
