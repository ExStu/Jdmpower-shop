import { Months } from '@/constants/date.constants'

export function formatDate(dateString: string) {
	const date = new Date(dateString)

	const day = String(date.getDate()).padStart(2, '0')
	// let month = String(date.getMonth() + 1).padStart(2, '0')
	let month = (date.getMonth() + 1)
	const year = date.getFullYear()

  // Object.keys(Months).some(x => {
  //   if (x === month) {
  //     console.log(x, month);
  //     month = Months
  //   }
  // })
  const convertMonth = Months[month]
  console.log(convertMonth);

	return `${day}.${month}.${year}`
}
