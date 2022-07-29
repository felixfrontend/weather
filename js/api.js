export const getWeatherData = async (city) => {
	//ee29bca75f6ecd96b84fe0bf662403dd
	try {
		const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=ee29bca75f6ecd96b84fe0bf662403dd&lang=ru&units=metric`)
		const data = await res.json()

		return await data
	} catch (error) {
		console.log(error)
	}
}