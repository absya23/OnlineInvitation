export const isVietnamesePhoneNumber = (number) => {
	return /^(?:\+84|0084|0)(?:3\d|5\d|7\d|8\d|9\d)\d{7}$/.test(number);
};

export const vietnamesePhoneRegex =
	/^(?:\+84|0084|0)(?:3\d|5\d|7\d|8\d|9\d)\d{7}$/;
