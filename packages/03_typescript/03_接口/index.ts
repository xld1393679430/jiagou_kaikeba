interface IPost {
	title: string 
	contnet: string;
	id: number,  // 这里可以写分号，也可以写逗号，也可以不写

}

function getData(post: IPost) {
	console.log(post.title);
}

export {}