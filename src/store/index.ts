import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import { RootState } from './types'

Vue.use(Vuex)

const store: StoreOptions<RootState> = {
	state: {
		slot: 1,
		selected: {},
	},
	mutations: {
		CHANGE_SLOT(state, payload) {
			state.slot = payload
		},
	},
	actions: {
		changeSlot({ commit }, payload: { slot: number }) {
			const { slot } = payload
			commit(`CHANGE_SLOT`, slot)
			return { slot }
		},
	},
	modules: {
	},
	getters: {
	},
}

export default new Vuex.Store<RootState>(store)
