/**
 * 此文件作为Generator的核心入口
 * 需要导出一个继承自 Yeoman Generator 的类型
 * Yeoman Generator 在工作时会自动调用我们在此类型中定义的一些生命周期方法
 */

const Generator = require('yeoman-generator')

class Index extends Generator {
	prompting() {
		// Yeoman 在询问用户环节会自动调用此方法
		return this.prompt([
			{
				type: "input",
				name: "name",
				message: "Your Project Name",
				default: this.appname, // appname是当前目录文件夹的名字
			}
		]).then(answers => {
			console.log(answers, '-----');
			this.answers = answers
		})
	}

	writing() {
		// Yeoman 自动在生成文件阶段调用此方法, 我们在此尝试往项目目录中文件
		// this.fs.write(
		// 	this.destinationPath('/test/temp.txt'),
		// 	Math.random().toString()
		// )

		// 通过模板方式写入文件
		// 模版文件路径
		const  tmpl = this.templatePath('foo.txt') 
		// 输出目标路径
		const outpubt = this.destinationPath('./new_tmpl/foo2.txt')
		// 模版数据上下文
		const context = this.answers

		this.fs.copyTpl(tmpl, outpubt, context)

	}

}

module.exports = Index