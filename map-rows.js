const mapRows = (results, mapper) => {
  const mapped = []

  if (results && results.rows) {
    const len = results.rows.length

    for (let i = 0; i < len; i++) {
      const row = results.rows[i]
      mapped.push(mapper(row))
    }
  }

  return mapped
}
