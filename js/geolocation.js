import { getWeatherData } from './api.js';
import { resetWeatherContent } from './helper.js';

export const handleWeatherByGeolocation = () => {
	const options = { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }

	const success = async (pos) => {
		const crd = pos.coords;
		const response = await fetch(
			`https://api.geoapify.com/v1/geocode/reverse?lat=${crd.latitude}&lon=${crd.longitude}&lang=ru&apiKey=7e1a190925ce4b9298985cf95948cdf4`
		)
		const result = await response.json()
		const featuresData = await result.features[0].properties.city
		const weather = await getWeatherData(featuresData)
		resetWeatherContent(featuresData, weather)
	}

	const error = (err) => {
		console.log(err.code + ' ' + err.message)
	}

	navigator.geolocation.getCurrentPosition(success, error, options)
}