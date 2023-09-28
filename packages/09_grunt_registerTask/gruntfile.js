/**
 * Grunt 入口文件
 * 用于定义一些需要grunt执行的任务
 * 需要导出一个函数
 */

module.exports = grunt => {

	grunt.initConfig({
		"init_single_a": "hello",
		"init_muity_b": {
			css: "css 任务",
			js: "js 任务"
		}
	})

	// 运行yarn grun foo。 会执行该函数 打印foo
	grunt.registerTask('foo', () => {
		console.log('foo');
	})

	// 运行yarn grun bar。 registerTask第二个参数如果是字符串，表示任务的描述字段
	grunt.registerTask('bar', "我是任务描述", () => {
		console.log('bar');
	})

	// 运行yarn grun。 default表示grunt的默认执行任务，可简写成yarn grunt, 会一次执行上面foo,bar两个任务
	// grunt.registerTask('dafault', ["foo", "bar"]) // 新版这个好像会报错
	
	// 运行yarn grun async。 grunt执行异步任务
	grunt.registerTask('async', function() {
		const done = this.async();
		setTimeout(() => {
			console.log("async");
			done()
		}, 1000)
	})

	// 运行yarn grun bad。 grunt 同步任务可以通过 return false 表示任务出错(也会中断后面的任务)
	grunt.registerTask("bad", () => {
		console.log('bad');
		return false
	})

	// 运行yarn grun async-bad。 grunt 异步任务可以通过 done(false) 表示任务出错
	grunt.registerTask('async-bad', function() {
		const done = this.async();
		setTimeout(() => {
			console.log("async-bad");
			done(false)
		}, 1000)
	})

	// 运行yarn grun init_single_a。 获取grunt initConfig的值
	grunt.registerTask("init_single_a", () => {
		const value = grunt.config("init_single_a")
		console.log(value);
	})

	// 运行 yarn grun init_muity_b。多目标任务模式，会一次同时执行css, js任务,
	// 也可以单独执行 yarn grun init_muity_b:css / yarn grun init_muity_b:js
	grunt.registerMultiTask("init_muity_b",  function() {
		console.log(`target: ${this.target}; data: ${this.data}`);
	})
}