<script lang='ts'>

	import { Component, Vue, Prop } from 'vue-property-decorator'

	@Component
	export default class FEText extends Vue {

		@Prop({ default: 1 }) readonly size!: number

		get style() {
			return {
				'--mid-font-size': `${this.size * 32}px`,
			}
		}
	}

</script>

<template>
	<div id='fe-text' :style='style'>
		<span class='outer'>
			<slot />
		</span>
		<span class='inner'>
			<slot />
		</span>
	</div>
</template>

<style scoped>
#fe-text {
	position: relative;
}

#fe-text a {
	text-decoration: none;
}

#fe-text span {
	font-size: var(--mid-font-size);
}

.inner {
	font-family: 'fire-emblem-inner', sans-serif;
	color: white;
}

.inner a,
.inner .fe-text-green {
	color: #48e820;
}

.inner :disabled,
.inner .fe-text-gray {
	color: #b8b0b0;
}

.outer {
	font-family: 'fire-emblem-outer', sans-serif;
	color: black;
	position: absolute;
	text-shadow: 0 0 1px black;
}

.outer a,
.outer .fe-text-green {
	color: #185818;
}

.outer :disabled,
.outer .fe-text-gray {
	color: #383028;
}
</style>
