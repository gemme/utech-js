// objeto js
const objeto = {
	name: 'Gabriel',
	getName: function() {
		return 'Gabriel'
	}
};

// json
const objeto2 = {
	"name": "Gabriel",
	"getName": 123,
	"isFalse": true
};
// Json
const objeto3 = {
	name: "Gabriel",
	getName: 123,
	isFalse: true,
	fn: () => {}
};
const obj3 = JSON.stringify(objeto3)
console.log(obj3);
const obj4 = JSON.parse(obj3);
console.log(obj4);
