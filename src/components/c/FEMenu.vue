<script lang='ts'>

	import { Vue, Component, Prop } from 'vue-property-decorator'

	import store from '@/store'

	@Component
	export default class FEMenu extends Vue {
		@Prop(Boolean) readonly top!: boolean
		@Prop(Boolean) readonly right!: boolean
		@Prop(Boolean) readonly bottom!: boolean
		@Prop(Boolean) readonly left!: boolean
		@Prop({ default: 1 }) readonly size!: number

		get slot() {
			return store.state.slot
		}

		get style() {
			return {
				'--grid-template-columns': `${this.left ? `16px ` : ``}auto${this.right ? ` 20px` : ``}`,
				'--grid-template-rows': `${this.top ? `16px ` : ``}auto${this.bottom ? ` 20px` : ``}`,
				'--grid-template-areas': `
					'${this.top && this.left ? `tl ` : ``}${this.top ? `t` : ``}${this.top && this.right ? ` tr` : ``}'
					'${this.left ? `l ` : ``}mid${this.right ? ` r` : ``}'
					'${this.bottom && this.left ? `bl ` : ``}${this.bottom ? `b` : ``}${this.bottom && this.right ? ` br` : ``}'
				`,
				'--mid-padding': `${this.size}rem`,
			}
		}
	}

</script>

<template>
	<div id='fe-menu' :style='style'>
		<div id='tl'></div>
		<div id='t'></div>
		<div id='tr'></div>
		<div id='l'></div>
		<div id='mid' class='fe-menu-body'>
			<slot />
		</div>
		<div id='r'></div>
		<div id='bl'></div>
		<div id='b'></div>
		<div id='br'></div>
	</div>
</template>

<style scoped>
#fe-menu {
	user-select: none;
	display: grid;

	grid-template-columns: var(--grid-template-columns);
	grid-template-rows: var(--grid-template-rows);
	grid-template-areas: var(--grid-template-areas);
}

#tl {
	grid-area: tl;
	background: url(~@/assets/menu/menu-tl.png) no-repeat top left;
}

#t {
	grid-area: t;
	background: url(~@/assets/menu/menu-t.png) repeat-x top left;
}

#tr {
	grid-area: tr;
	background: url(~@/assets/menu/menu-tr.png) no-repeat top left;
}

#l {
	grid-area: l;
	background: url(~@/assets/menu/menu-l.png) repeat-y top left;
}

#r {
	grid-area: r;
	background: url(~@/assets/menu/menu-r.png) repeat-y top left;
}

#bl {
	grid-area: bl;
	background: url(~@/assets/menu/menu-bl.png) no-repeat top left;
}

#b {
	grid-area: b;
	background: url(~@/assets/menu/menu-b.png) repeat-x top left;
}

#br {
	grid-area: br;
	background: url(~@/assets/menu/menu-br.png) no-repeat top left;
}

#mid {
	grid-area: mid;

	background: url(~@/assets/menu/menu-mid.png) repeat top left;

	display: flex;
	align-items: center;

	padding: var(--mid-padding);

	position: relative;
}

</style>
