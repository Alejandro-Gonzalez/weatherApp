export const getGeolocation = () => {
	return new Promise((resolve, reject) => {
		const geolocation = navigator && navigator.geolocation;

		const success = ({ coords = {} }) => {
			const { latitude, longitude } = coords;
			return resolve([latitude, longitude]);
		};

		geolocation.getCurrentPosition(success, reject, { enableHighAccuracy: true });
	});
};
