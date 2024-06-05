export const getPayloadSize = (value: string): number => {
	console.log("buff")
	const encoder = new TextEncoder()
	return encoder.encode(value).length
	// return Buffer.from(value).length
}
