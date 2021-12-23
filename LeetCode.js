// 1480. Running Sum of 1d Array
// Given an array nums. We define a running sum of an array as runningSum[i] = sum(nums[0]...nums[i]).
// Return the running sum of nums.
// Input: nums = [1,2,3,4]
// Output: [1,3,6,10]
// Explanation: Running sum is obtained as follows: [1, 1+2, 1+2+3, 1+2+3+4].

var runningSum = function (nums) {
    let newArray = [];
    newArray[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
        newArray[i] = newArray[i - 1] + nums[i];
    }
    return newArray;
};

//
// 1108. Defanging an IP Address
// Given a valid (IPv4) IP address, return a defanged version of that IP address.
// A defanged IP address replaces every period "." with "[.]".
// Input: address = "255.100.50.0"
// Output: "255[.]100[.]50[.]0"

var defangIPaddr = function (address) {
    return address.replace(/\./g, "[.]");
};

//
// 2011. Final Value of Variable After Performing Operations
// ++X and X++ increments the value of the variable X by 1.
// --X and X-- decrements the value of the variable X by 1.
// Initially, the value of X is 0.
// Given an array of strings operations containing a list of operations, return the final value of X after performing all the operations.
// Input: operations = ["++X","++X","X++"]
// Output: 3
// Explanation: The operations are performed as follows:
// Initially, X = 0.
// ++X: X is incremented by 1, X = 0 + 1 = 1.
// ++X: X is incremented by 1, X = 1 + 1 = 2.
// X++: X is incremented by 1, X = 2 + 1 = 3.

var finalValueAfterOperations = function (operations) {
    let result = 0;
    for (let i = 0; i < operations.length; i++) {
        operations[i].includes("++") ? result++ : result--;
    }
    return result;
};

//
// 1672. Richest Customer Wealth
// You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the i​​​​​​​​​​​th​​​​ customer has in the j​​​​​​​​​​​th​​​​ bank. Return the wealth that the richest customer has.
// A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
// Input: accounts = [[1,5],[7,3],[3,5]]
// Output: 10
// Explanation:
// 1st customer has wealth = 6
// 2nd customer has wealth = 10
// 3rd customer has wealth = 8
// The 2nd customer is the richest with a wealth of 10.

var maximumWealth = function (accounts) {
    let maxsum = 0;
    for (let i = 0; i < accounts.length; i++) {
        let sum = 0;
        for (let j = 0; j < accounts[i].length; j++) {
            sum += accounts[i][j];
        }
        maxsum = maxsum > sum ? maxsum : sum; // Проверяем текущее значение больше чем предыдущее или нет (перезаписываем)
    }
    return maxsum;
};

//
// 1470. Shuffle the Array
// Given the array nums consisting of 2n elements in the form [x1,x2,...,xn,y1,y2,...,yn].
// Return the array in the form [x1,y1,x2,y2,...,xn,yn].
// Input: nums = [2,5,1,3,4,7], n = 3
// Output: [2,3,5,4,1,7]
// Explanation: Since x1=2, x2=5, x3=1, y1=3, y2=4, y3=7 then the answer is [2,3,5,4,1,7].

var shuffle = function (nums, n) {
    let arr = [];
    for (let i = 0; i < nums.length - n; i++) {
        arr.push(nums[i]);
        arr.push(nums[i + n]);
    }
    return arr;
};

//
// 1431. Kids With the Greatest Number of Candies
// There are n kids with candies. You are given an integer array candies, where each candies[i] represents the number of candies the ith kid has, and an integer extraCandies, denoting the number of extra candies that you have.

// Return a boolean array result of length n, where result[i] is true if, after giving the ith kid all the extraCandies, they will have the greatest number of candies among all the kids, or false otherwise.

// Note that multiple kids can have the greatest number of candies.
// Input: candies = [2,3,5,1,3], extraCandies = 3
// Output: [true,true,true,false,true]

// Псевдокод:
// Найдем максимальное число конфет в массиве candies.
// От максимального отнимаем extraCandies.
// Проходим по массиву и смотрим если наш элемент плюс extraCandies >= maxCandies
// Все числа что ниже maxCandies - false. Остальные - true.

// Отличное решение по сложности

var kidsWithCandies = function (candies, extraCandies) {
    let maxCandies = Math.max(...candies);
    return candies.map((item) => item + extraCandies >= maxCandies);
};

//
// 771. Jewels and Stones
// You're given strings jewels representing the types of stones that are jewels, and stones representing the stones you have. Each character in stones is a type of stone you have. You want to know how many of the stones you have are also jewels.

// Letters are case sensitive, so "a" is considered a different type of stone from "A".
// Input: jewels = "aA", stones = "aAAbbbb"
// Output: 3

// Псевдокод:
// Разбиваю jewels и stones на массивы со значениями
// Через двойной цикл сравниваю значения двух массивов

// Плохое решение по сложности

var numJewelsInStones = function (jewels, stones) {
    let jew = jewels.split("");
    let sto = stones.split("");
    let counter = 0;
    for (let i = 0; i < jew.length; i++) {
        for (let j = 0; j < sto.length; j++) {
            if (jew[i] === sto[j]) {
                counter++;
            }
        }
    }
    return counter;
};
// Рефакторинг решения
var numJewelsInStones = function (jewels, stones) {
    let counter = 0;
    for (let i = 0; i < stones.length; i++) {
        if (jewels.includes(stones[i])) {
            counter += 1;
        }
    }
    return counter;
};

// 1365. How Many Numbers Are Smaller Than the Current Number
// Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it. That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i].

// Return the answer in an array.
// Input: nums = [8,1,2,2,3]
// Output: [4,0,1,1,3]

// Псевдокод: Создал новый массив куда пушу значние result () которое я получаю проходясь по массиву два раза и сравнивая два значения

// Плохое решение по сложности(On2) Можно решить длинне но лучше по сложности
var smallerNumbersThanCurrent = function (nums) {
    let array = [];
    for (let i = 0; i < nums.length; i++) {
        let result = 0;
        for (let j = 0; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                result++;
            }
        }
        array.push(result);
    }
    return array;
};
