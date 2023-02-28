
/**
 * 1,声明一个Store类：维护响应式state,堡垒commit/dispatch
 * 2, install: 注册全局$store
 */
// import Vue from 'vue'


class Store {
	constructor(options) {
		this.$options = options

		this._mutations = options.mutations
		this._actions = options.actions
		this._vm = new Vue({
			data() {
				return {
					$$state: options.state
				}
			}
		})

		this.commit = this.commit.bind(this)
		this.dispatch = this.dispatch.bind(this)
	}

	get state() {
		console.log(this._vm, 'ssss')
		return this._vm._data.$$state
	}

	set state(v) {
		throw new Error("请通过commit/dispatch更改state")
	}

	commit(type, payload) {
		const fn = this._mutations[type]
		if (!fn) {
			console.error(`mutations ${type} 不存在`);
			return
		}
		fn(this.state, payload)
	}

	dispatch(type, payload) {
		const fn = this._actions[type]
		if (!fn) {
			console.error(`actions ${type} 不存在`);
			return
		}
		return fn(this, payload)
	}
}

let Vue;
function install(_Vue) {
	Vue = _Vue;

	// 注册store
	Vue.mixin({
		beforeCreate() {
			if (this.$options.store) {
				Vue.prototype.$store = this.$options.store
			}
		}
	})
}

export default { Store, install }