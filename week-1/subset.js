/*Question : https://leetcode.com/problems/subsets/ */
var arr = [1, 2, 3]
var subsets = function (arr) {

	var result = []
	result.push([]);
	arr.forEach(item => {

		var length = result.length, i = 0;

		while (i < length) {

			var temp = result[i].slice(0);
			temp.push(item);

			result.push(temp);
			i++;

		}
	})

	return result;
};