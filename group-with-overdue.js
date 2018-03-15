const groupByDateWithOverdue = allServices => {
  const servicesByDate = groupBy(allServices, s => s.date)
  const servicesByDateWithOverdue = reduce(
    servicesByDate,
    (acc, services, date) => {
      const momentDate = moment(k)
      if (momentDate.isBefore(today)) {
        acc[OVERDUE] = acc[OVERDUE] ? acc[OVERDUE].concat(services) : services
      } else {
        acc[momentDate] = services
      }

      return acc
    },
    {},
  )

  return servicesByDateWithOverdue
}
