function findMinAndRemoveSorted(array){
let min = array[0]
let minIndex = 0

for(let i = 0; i < array.length; i++){

    if(array[i] < min){
        min = array[i]
        i = minIndex
    }

}
array.splice(minIndex, 1)
return min
}


function merge(firstSubarray, secondSubarray){
    let merged = []
    while (firstSubarray.length != 0 && secondSubarray.length != 0){
    if(firstSubarray[0] < secondSubarray[0]){
        merged.push(findMinAndRemoveSorted(firstSubarray))
    }
    else if (secondSubarray[0] <= firstSubarray[0]){
        merged.push(findMinAndRemoveSorted(secondSubarray))

    }
    }
    return merged.concat(firstSubarray).concat(secondSubarray)

}

function mergeSort(array){
    let midPoint = array.length/2
    let firstHalf = array.slice(0, midPoint)
    let secondHalf = array.slice(midPoint, array.length)
    let sorted
    if(array.length < 2){
        return array
    }
else {
   sorted = merge(mergeSort(firstHalf), mergeSort(secondHalf))
    }
    return sorted
}