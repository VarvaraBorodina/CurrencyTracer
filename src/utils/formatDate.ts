const timestampToHoursMinutes = (timestemp: number) => {
  const date = new Date(timestemp)
  return `${date.toTimeString().slice(0, 5)}`
}

export { timestampToHoursMinutes }
