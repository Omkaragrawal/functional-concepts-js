const groupByConfirmedServices = services => {
  const confirmed = []
  for (let i = 0; i < services.length; i++) {
    if (services[i].confirmed) {
      confirmed.push(services[i])
    }
  }

  const grouped = {}
  for (let i = 0; i < confirmed.length; i++) {
    const day = confirmed[i].date
    const appointments = grouped[day] || []
    appointments.push(confirmed[i])
    grouped[day] = appointments
  }

  return grouped
}
