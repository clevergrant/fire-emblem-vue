<script lang='ts'>

	import { Component, Vue } from 'vue-property-decorator'
	import store from '@/store'

	import { FEMenu, FEText } from '@/components'

	@Component({
		components: {
			FEMenu,
			FEText,
		},
	})
	export default class Tabs extends Vue {

		slots = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]

		get currentSlot() {
			return store.state.slot
		}

		changeSlot = (slot: number) => {
			store.dispatch(`changeSlot`, { slot })
		}
	}

</script>

<template>
	<div id='tabs'>
		<FEMenu top bottom left>
			<ul>
				<li v-for='slot in slots' :key='slot' @click='changeSlot(slot)'>
					<FEText>
						<span :class='[slot === currentSlot ? "fe-text-green" : ""]'>Slot {{ slot }}</span>
					</FEText>
				</li>
			</ul>
		</FEMenu>
	</div>
</template>

<style scoped>
#tabs {
	position: relative;
}

ul {
	list-style: none;
	padding: 0;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: flex-end;
}

ul > li {
	width: 6rem;
	display: flex;
	justify-content: flex-end;
	align-items: center;
	cursor: pointer;
}
</style>
