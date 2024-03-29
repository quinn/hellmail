import { useEffect } from 'react'
import styles from './Root.module.css'
import { Button } from './ui/button'
import { BarChartIcon, TableIcon } from '@radix-ui/react-icons'
import { Link, Outlet } from 'react-router-dom'
import { Page } from '@/lib/types'

export function Root() {
	useEffect(() => {
		const root = window.document.documentElement
		root.classList.remove('light', 'dark')

		const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
			.matches
			? 'dark'
			: 'light'

		root.classList.add(systemTheme)
	}, [])

	return (
		<section className={styles.root}>
			<div className="row-span-3 p-3 border-r text-center">
				<div className="pb-3">🤑</div>
				<Button variant="ghost" size="icon" asChild>
					<Link to={Page.DEFAULT}>
						<TableIcon />
					</Link>
				</Button>
			</div>
			<Outlet />
		</section>
	)
}
