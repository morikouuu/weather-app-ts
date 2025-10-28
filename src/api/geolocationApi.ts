import type { LocationData } from "../types/weather";
export const getCurrentLocation = async (): Promise<LocationData> => {
	try {
		const position = await new Promise<GeolocationPosition>(
			(resolve, reject) => {
				if (!navigator.geolocation) {
					console.error(Error);
					reject(new Error("位置情報がサポートされていません"));
					return reject;
				}
				navigator.geolocation.getCurrentPosition(resolve, reject, {
					enableHighAccuracy: true,
					timeout: 10000,
					maximumAge: 300000,
				});
			}
		);
		console.log("latitude:", position.coords.latitude);
		console.log("longitude:", position.coords.longitude);
		return {
			lat: position.coords.latitude,
			lon: position.coords.longitude,
		};
	} catch (error) {
		console.error(error);

		throw new Error("位置情報の所得に失敗しました");
	}
};
