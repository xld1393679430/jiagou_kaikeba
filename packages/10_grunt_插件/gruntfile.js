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

}