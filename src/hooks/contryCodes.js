export function addCode(phoneNumber) {
	if (!phoneNumber) return '';

	const strippedPhoneNumber = phoneNumber.replace(/^0+/, ''); // remove all leading 0s
	const countryCode = '+234';

	if (strippedPhoneNumber.startsWith(countryCode)) {
		return strippedPhoneNumber;
	} else {
		return `${countryCode}${strippedPhoneNumber}`;
	}
}

export function removeCountryCode(phoneNumber) {
	if (!phoneNumber) return '';
	// Remove any non-digit characters from the phone number
	const digitsOnly = phoneNumber.replace(/\D/g, '');

	// Check if the phone number starts with +234
	if (digitsOnly.startsWith('2340')) {
		// Remove the +234 and add a 0
		return `0${digitsOnly.slice(3)}`;
	}

	// Check if the phone number starts with 234
	if (digitsOnly.startsWith('234')) {
		// Remove the 234 and add a 0
		return `0${digitsOnly.slice(3)}`;
	}

	// Check if the phone number starts with 0
	if (digitsOnly.startsWith('0')) {
		// Phone number already has a 0 at the beginning, return as is
		return digitsOnly;
	}

	// If the phone number has no country code and no 0 at the beginning, add a 0
	return `0${digitsOnly}`;
}
