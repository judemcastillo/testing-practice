export function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.slice(1);
}
export function reverseString(str) {
	return str.split("").reverse().join("");
}
export function calculator(a, b) {
	return {
		add: () => a + b,
		subtract: () => a - b,
		multiply: () => a * b,
		divide: () => a / b,
	};
}

export function caesarCipher(str, shift) {
	return str
		.split("")
		.map((char) => shiftChar(char, shift))
		.join("");
}

function shiftChar(char, shift) {
	if (isUpperCase(char)) {
		return shiftWithinRange(char, shift, "A".charCodeAt(0));
	} else if (isLowerCase(char)) {
		return shiftWithinRange(char, shift, "a".charCodeAt(0));
	} else {
		return char; // Leave non-alphabetic characters unchanged
	}
}

function isUpperCase(char) {
	return char >= "A" && char <= "Z";
}

function isLowerCase(char) {
	return char >= "a" && char <= "z";
}

function shiftWithinRange(char, shift, baseCharCode) {
	const offset = char.charCodeAt(0) - baseCharCode;
	const newOffset = (offset + shift) % 26;
	return String.fromCharCode(baseCharCode + ((newOffset + 26) % 26)); // Ensures wraparound on negative shifts
}
export function analyzeArray(arr) {
	if (!Array.isArray(arr) || arr.length === 0) {
		throw new Error("Input must be a non-empty array of numbers.");
	}

	const sum = arr.reduce((total, num) => total + num, 0);
	const average = sum / arr.length;
	const min = Math.min(...arr);
	const max = Math.max(...arr);
	const length = arr.length;

	return {
		average,
		min,
		max,
		length,
	};
}
