export default class Cheat {
	address: number
	codeString: string
	description: string
	enabled: number
	rawaddress: number
	size: number
	status: number
	type: number
	value: number

	constructor(
		address: number,
		codeString: string,
		description: string,
		enabled: number,
		rawaddress: number,
		size: number,
		status: number,
		type: number,
		value: number
	) {
		this.address = address
		this.codeString = codeString
		this.description = description
		this.enabled = enabled
		this.rawaddress = rawaddress
		this.size = size
		this.status = status
		this.type = type
		this.value = value
	}
}