const Http = {
  get: (url, params, token) => {
    if (params) {
      url = URI(url)
        .search(params)
        .normalize()
        .valueOf()
    }

    const secureHeader = token ? { 'SECURE-TOKEN': token } : {}

    return
    fetch(url, {
      headers: secureHeader,
    })
  },
}


// Http.get("https://api.spacexdata.com/v2/launches/all", "", "")
// Http.get("https://api.spacexdata.com/v2/launches/all")

// Http.get("https://api.spacexdata.com/v2/launches", {
//   launch_year: 2017,
//   rocket_id: "falcon9",
//   core_reuse: true,
//   core_serial: "B1029"
// })
// Http.get(
//   "https://api.spacexdata.com/v2/launches/upcoming",
//   "",
//   "YOU_ROCK_ELON"
// )
