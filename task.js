
const Feed = {
	"1588291200-a": {
		"id": "J8iXjOxI0fWJWckJK8cGjZzm7Rd2",
		"message": "old"
	},
	"1593580504-d": {
		"id": "J8iXjOxI0fWJWckJK8cGjZzm7Rd2",
		"message": "hello"
	},
}

for (let key in Feed) {
	let count = parseInt(key);
	Feed[key].time = count;
}

let json = JSON.stringify(Feed);
console.log(json);




