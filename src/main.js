/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumOperations = function (nums) {

    let operations = -1

    while (nums.length > 0) {
        nums = nums.filter((num) => {
            return num > 0
        })

        let min = Math.min(...nums)

        nums = nums.map((num) => {
            return num - min
        })

        operations += 1
    }

    return operations;
};

console.log(minimumOperations([1, 5, 0, 3, 5]));