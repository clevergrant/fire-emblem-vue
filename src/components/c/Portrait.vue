<script lang='ts'>

	import { Component, Vue, Prop } from 'vue-property-decorator'

	@Component
	export default class Portrait extends Vue {

		@Prop({ default: 1}) readonly size!: number
		@Prop({ default: 0}) readonly x!: number
		@Prop({ default: 0}) readonly y!: number

		get style() {
			return {
				'--test-height': `${this.size * 80}px`,
				'--test-width': `${this.size * 96}px`,
				'--test-background-size': `${this.size * 896}px ${this.size * 3024}px`,
				'--test-background-position': `${this.x * -128 * this.size}px ${this.y * -112 * this.size}px`,
			}
		}
	}

</script>

<template>
	<div id='portrait' :style='style'>

	</div>
</template>

<style scoped>
#portrait {
	height: var(--test-height);
	width: var(--test-width);

	background: url(~@/assets/portraits.png) no-repeat top left;

	background-size: var(--test-background-size);
	background-position: var(--test-background-position);

	image-rendering: pixelated;
}
</style>
