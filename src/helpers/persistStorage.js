export const persistStorage = (name, data) => {
	if (data) {
		typeof data === 'object'
			? localStorage.setItem(name, JSON.stringify(data))
			: localStorage.setItem(name, data);
	} else {
		const localData = localStorage.getItem(name);
		if (localData === null) return null;
		return localData.match(/"/g) === null
			? localData
			: JSON.parse(localData);
	}
};
