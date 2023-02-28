// vue-router插件编写

let Vue;

class XVueRouter {
	constructor(options) {
		this.$options = options

		// 因为this.current不是响应式的，即使改变了this.current, router-view组件还是没法动态渲染
		Vue.util.defineReactive(this, 'current', window.location.hash.slice(1) || "/")

		window.addEventListener("hashchange", this.onHashChange)
	}

	onHashChange = () => {
		this.current = window.location.hash.slice(1)
	}
}


XVueRouter.install = function (_Vue) {
	Vue = _Vue

	Vue.mixin({
		beforeCreate() {
			// 只需要根实例执行一次
			if (this.$options.router) {
				Vue.prototype.$router = this.$options.router
			}
		}
	})

	// 注册两个全局组件：router-link, router-view
	Vue.component("router-link", {
		props: {
			to: {
				type: String,
				required: true,
			}
		},

		render(h) {
			/**
			 * 这里也可以返回jsx形式，这里为了方便扩展还是使用h函数方式
			 * return <a href={this.t}>{this.$slots.default}</a>
			 */
			return h("a", {
				attrs: {
					href: `#${this.to}`
				}
			}, this.$slots.default)
		}
	})

	Vue.component("router-view", {
		render(h) {
			let component = null
			const route = this.$router.$options.routes.find(route  => route.path === this.$router.current)
			if (route) {
				component = route.component
			}
			return h(component)
		}
	})
}

export default XVueRouter
