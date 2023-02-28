/**
 * 实现数组响应式
 */

const originProto = Array.prototype;
// 备份一份
const arrayProto = Object.create(originProto);

['push', 'pop', 'shift', 'unshift'].forEach(method => {
	arrayProto[method] = function () {
		originProto[method].apply(this, arguments)
		console.log("数组操作：" + method);
	}
})

function defineReactive(obj, key, value) {
	observe(value)
	Object.defineProperty(obj, key, {
		get() {
			return value
		},
		set(newValue) {
			if (newValue !== value) {
				value = newValue
			}
		}
	})
}

function observe(obj) {
	if (obj === null || typeof obj !== "object") {
		return;
	}

	if (Array.isArray(obj)) {
		// 覆盖数组的原型，替换原始的push，pop等操作
		obj.__proto__ = arrayProto
		const keys = Object.keys(obj)
		
		for (let i = 0; i < keys.length; i++) {

			observe(obj[i])
		}
	} else {
		Object.keys(obj).forEach(key => {
			defineReactive(obj, key, obj[key])
		})
	}
}

const obj = {
	list: [1, 2]
}

observe(obj)

obj.list.push(111)