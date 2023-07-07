const timestampToHoursMinutes = (timestemp: number) => {
  const date = new Date(timestemp)
  return `${date.toTimeString().slice(0, 5)}`
}

const formatDate = (date: string): string => {
  return `${date.slice(0, 10)}`
}

const getLastMonthDates = (): string[] => {
  const endDate = new Date()
  const startDate = new Date()
  startDate.setMonth(startDate.getMonth() - 1)

  const dates: string[] = []

  while (startDate <= endDate) {
    dates.push(formatDate(new Date(startDate).toISOString()))
    startDate.setDate(startDate.getDate() + 1)
  }

  return dates
}

export { formatDate, getLastMonthDates, timestampToHoursMinutes }
