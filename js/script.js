
const dogsWeight = [22, 8, 13, 32];

const dogsFood = dogsWeight.map(function (value, index, array) {
    return Math.round(value**0.75*28);
});

const food = dogsFood.map(function (value, index, array) {
     if (value>200) {
        return value;
    } else {
        return 0;
    }
});

const averageFood = food.reduce(function (acc, value) {
    let cem = acc+value;
    return cem/2;
}, 0)


console.log(dogsFood)
console.log(food)
console.log(averageFood)