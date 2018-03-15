const downloadCSV = services => {
  const csvContent = converter(services)

  const encodedUri = encodeURI(csvContent)
  window.open(encodedUri)
}
