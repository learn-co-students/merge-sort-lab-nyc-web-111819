function findMinAndRemoveSorted (array) {
    return array.shift()
}

function merge (leftArr, rightArr) {
    let sortedArr = []

    while (leftArr.length && rightArr.length) {
        if (leftArr[0] < rightArr[0]) {
            sortedArr.push(findMinAndRemoveSorted(leftArr))
        } else {
            sortedArr.push(findMinAndRemoveSorted(rightArr))
        }
    }

    return [...sortedArr, ...leftArr, ...rightArr]
}

function mergeSort (array) {
    if (array.length === 1) {
        return array
    }

    let midpoint = Math.floor(array.length / 2)
    let firstHalf = array.slice(0, midpoint)
    let secondHalf = array.slice(midpoint)

    return merge(mergeSort(firstHalf), mergeSort(secondHalf))
}
