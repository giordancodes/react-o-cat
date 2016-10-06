module.exports = function (i) {
	console.log("cat selected!", i);
	this.setState({ activeImage: i });
}