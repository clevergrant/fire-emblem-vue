<script lang='ts'>

	import { Component, Vue } from 'vue-property-decorator'

	import { FEMenu, Portrait } from '@/components'

	@Component({
		components: {
			FEMenu,
			Portrait,
		},
	})
	export default class Tab extends Vue {}

</script>

<template>
	<div id='tab'>
		<FEMenu top right bottom left>
			<Portrait x='0' y='0' size='3' />
			<Portrait x='2' y='1' size='2' />
			<Portrait x='5' y='2' size='1' />
			<Portrait x='3' y='3' size='.5' />
		</FEMenu>
	</div>
</template>

<style scoped>
#tab {
	position: relative;
}

#tab >>> .fe-menu-body {
	min-height: 40rem;
	min-width: 40rem;
	align-items: flex-start;
}
</style>
