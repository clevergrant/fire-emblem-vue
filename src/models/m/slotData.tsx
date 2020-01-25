import Datum from './Datum'

/**
 * CodeBreaker codes types: (based on the CBA clone "Cheatcode S" v1.1)
 *
 * 0000AAAA 000Y - Game CRC (Y are flags: 8 - CRC, 2 - DI)
 * 1AAAAAAA YYYY - Master Code function (store address at ((YYYY << 0x16) + 0x08000100))
 * 2AAAAAAA YYYY - 16-bit or
 * 3AAAAAAA YYYY - 8-bit constant write
 * 4AAAAAAA YYYY - Slide code
 * XXXXCCCC IIII   (C is count and I is address increment, X is value incr.)
 * 5AAAAAAA CCCC - Super code (Write bytes to address, 2*CCCC is count)
 * BBBBBBBB BBBB
 * 6AAAAAAA YYYY - 16-bit and
 * 7AAAAAAA YYYY - if address contains 16-bit value enable next code
 * 8AAAAAAA YYYY - 16-bit constant write
 * 9AAAAAAA YYYY - change decryption (when first code only?)
 * AAAAAAAA YYYY - if address does not contain 16-bit value enable next code
 * BAAAAAAA YYYY - if 16-bit value at address  <= YYYY skip next code
 * CAAAAAAA YYYY - if 16-bit value at address  >= YYYY skip next code
 * D00000X0 YYYY - if button keys ... enable next code (else skip next code)
 * EAAAAAAA YYYY - increase 16/32bit value stored in address
 * FAAAAAAA YYYY - if 16-bit value at address AND YYYY = 0 then skip next code
 */

const slotData = {
	portrait: new Datum(16, `8`, 33733968),
	class: new Datum(16, `8`, 33733972),
	level: new Datum(8, `3`, 33733976),
	experience: new Datum(8, `3`, 33733977),
	hiddenStatus: new Datum(8, `3`, 33733981),

	hitPoints: {
		maximum: new Datum(8, `3`, 33733986),
		current: new Datum(8, `3`, 33733987)
	},

	attributes: {
		strength: new Datum(8, `3`, 33733988),
		skill: new Datum(8, `3`, 33733989),
		speed:new Datum(8, `3`, 33733990),
		defense: new Datum(8, `3`, 33733991),
		luck: new Datum(8, `3`, 33733993),
		constitution: new Datum(8, `3`, 33733994)
	},

	rescue: new Datum(8, `3`, 33733995),
	move: new Datum(8, `3`, 33733997),

	items: [
		{
			type: new Datum(8, `3`, 33733998),
			quantity: new Datum(8, `3`, 33733999),
			quantityType: new Datum(16, `8`, 33733998)
		},
		{
			type: new Datum(8, `3`, 33734000),
			quantity: new Datum(8, `3`, 33734001),
			quantityType: new Datum(16, `8`, 33734000)
		},
		{
			type: new Datum(8, `3`, 33734002),
			quantity: new Datum(8, `3`, 33734003),
			quantityType: new Datum(16, `8`, 33734002)
		},
		{
			type: new Datum(8, `3`, 33734004),
			quantity: new Datum(8, `3`, 33734005),
			quantityType: new Datum(16, `8`, 33734004)
		},
		{
			type: new Datum(8, `3`, 33734006),
			quantity: new Datum(8, `3`, 33734007),
			quantityType: new Datum(16, `8`, 33734006)
		}
	],

	skills: {
		sword: new Datum(8, `3`, 33734008),
		lance: new Datum(8, `3`, 33734009),
		axe: new Datum(8, `3`, 33734010),
		bow: new Datum(8, `3`, 33734011),
		staff: new Datum(8, `3`, 33734012),
		anima: new Datum(8, `3`, 33734013),
		light: new Datum(8, `3`, 33734014),
		dark: new Datum(8, `3`, 33734015)
	}
}

export default slotData
