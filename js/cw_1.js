// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
    if(array.length == 0){
        return array.length;
    }else{
        let average = array.reduce((i,x)=> i + x)
        average = average/array.length
        return average;
    }
}

console.log(findAverage([1,1,1]))
console.log(findAverage([1,2,3]))
console.log(findAverage([1,14,23]))
console.log(findAverage([]))