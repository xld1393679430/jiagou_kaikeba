class Person {
	name: string;
	private sex: string;
	protected age: number

	constructor(name: string, sex: string, age: number) {
		this.name = name;
		this.sex = sex;
		this.age = age;
	}
}

const p = new Person("张三", "男", 20)

// console.log(p.sex); // private属性只能在类“Person”中访问

// console.log(p.age); // protected属性只能在类“Person”及其子类中访问。
