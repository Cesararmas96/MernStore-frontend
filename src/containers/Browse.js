import React from 'react'
import FilterPrice from '../components/FilterPrice'
import Menu from '../components/Menu'
import FilterBy from '../components/FilterBy'
const Browse = () => {
	return(
		<div>
			<Menu/>
			<FilterBy/>
			<FilterPrice/>
		</div>	
	)
}

export default Browse