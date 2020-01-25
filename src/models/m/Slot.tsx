export default class Slot {

	public portrait = 0
	public class = 0
	public level = 0
	public experience = 0
	public hiddenStatus = 0

	public hitPoints: {
		maximum: number
		current: number
	} = {
		maximum: 0,
		current: 0
	}

	public attributes: {
		strength: number
		skill: number
		speed: number
		defense: number
		luck: number
		constitution: number
	} = {
		strength: 0,
		skill: 0,
		speed: 0,
		defense: 0,
		luck: 0,
		constitution: 0
	}

	public rescue = 0
	public move = 0

	public items: {
		type: number
		quantity: number
		quantityType: number
	}[] = [
		{
			type: 0,
			quantity: 0,
			quantityType: 0
		},
		{
			type: 0,
			quantity: 0,
			quantityType: 0
		},
		{
			type: 0,
			quantity: 0,
			quantityType: 0
		},
		{
			type: 0,
			quantity: 0,
			quantityType: 0
		},
		{
			type: 0,
			quantity: 0,
			quantityType: 0
		}
	]

	public skills: {
		sword: number
		lance: number
		axe: number
		bow: number
		staff: number
		anima: number
		light: number
		dark: number
	} = {
		sword: 0,
		lance: 0,
		axe: 0,
		bow: 0,
		staff: 0,
		anima: 0,
		light: 0,
		dark: 0
	}

}
