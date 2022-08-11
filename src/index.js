module.exports = function towelSort (matrix) {
	let resArr = [];
  if(matrix){
		matrix.map((item, i) => {
			(i%2 === 0) ? resArr.push(...item) : resArr.push(...item.reverse());
		});
		return resArr;
  }
	return resArr;
}