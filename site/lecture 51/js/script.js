// Closures
function makeMltiplier (multiplier) {
	function b() {
		console.log("Multiplier is: " + multiplier);
	}
	b();

	return (
		function (x) {
			return multiplier * x;
		}
	);
}

var doubleAll = makeMltiplier(2);
console.log(doubleAll(10));