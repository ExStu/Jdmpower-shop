'use client'

import { useQuery } from '@tanstack/react-query'
import { FC } from 'react'

import Heading from '@/ui/Heading'
import Loader from '@/ui/Loader'

import { convertPrice } from '@/utils/convertPrice'

import styles from './Dashboard.module.scss'
import { StatisticsService } from '@/services/statistics.service'
import Container from '@/ui/Container'
import AdminNavbar from './AdminNavbar'

const Dashboard: FC = () => {
	const { data, isFetching } = useQuery(
		['statistics'],
		() => StatisticsService.getMain(),
		{
			select: ({ data }) => data
		}
	)

	return (
		<>
    <Container>
      <AdminNavbar/>
			<Heading className='mb-8'>Dashboard</Heading>
			{isFetching ? (
				<Loader />
			) : data?.length ? (
				<div className={styles.wrapper}>
					{data.map((item, index) => (
						<div key={item.name} className={styles.item}>
							<div>{item.name}</div>
							<div>
								{index === data.length - 1
									? convertPrice(item.value || 0)
									: item.value}
							</div>
						</div>
					))}
				</div>
			) : (
				<div>Statistics not loaded!</div>
			)}
    </Container>
		</>
	)
}

export default Dashboard
