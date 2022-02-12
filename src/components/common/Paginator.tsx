import cn from 'classnames'
import { FC, useState } from 'react'
import classes from './Paginator.module.css'

type PropsType = {
	totalItemsCount: number
	limit: number
	onPageChanged: (pageNumber: number) => void
	currentPage: number
	portionSize?: number
}

const Paginator: FC<PropsType> = ({ totalItemsCount, limit, currentPage, portionSize = 3, onPageChanged }) => {
	console.log(totalItemsCount)
	const pagesCount = Math.ceil(totalItemsCount / limit)

	const pages = []

	for (let i = 1; i <= pagesCount; i++) {
		pages.push(i)
	}

	let portionCount = Math.ceil(pagesCount / portionSize)
	let [portionNumber, setPortionNumber] = useState(1)
	let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
	let rightPortionPageNumber = portionNumber * portionSize

	return (
		<div>
			{portionNumber > 1 &&
				<button onClick={() => { setPortionNumber(portionNumber - 1) }}>Prev</button>
			}
			{pages
				.filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
				.map((p) => <span key={p}
					className={cn({
						[classes.selectedPage]: currentPage === p
					}, classes.pageNumber)}
					onClick={(e) => onPageChanged(p)}>{p}</span>)}

			{portionCount > portionNumber &&
				<button onClick={() => { setPortionNumber(portionNumber + 1) }}>Next</button>}
		</div>
	)
}

export default Paginator