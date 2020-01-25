<script lang="ts">

	import { Component, Vue } from 'vue-property-decorator'

	import { Tab, Tabs } from '@/components'

	import 'normalize.css'

	@Component({
		components: {
			Tabs,
			Tab,
		},
	})
	export default class Main extends Vue {}

</script>

<template>
	<div id='main'>
		<Tabs />
		<Tab />
	</div>
</template>

<style>
#main {
	height: 100vh;
	width: 100vw;
	background: url(~@/assets/background.png) no-repeat center;
	background-size: cover;

	display: flex;
	justify-content: center;
	align-items: center;
}

@font-face {
	font-family: 'fire-emblem-outer';
	src: url(~@/fonts/fire-emblem-outer.ttf) format('truetype');
}

@font-face {
	font-family: 'fire-emblem-inner';
	src: url(~@/fonts/fire-emblem-inner.ttf) format('truetype');
}
</style>
