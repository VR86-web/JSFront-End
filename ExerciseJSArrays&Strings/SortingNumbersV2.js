function sortingNumbers(arr) {
    const sorted = [...arr].sort((a,b) => a - b)
    const result = []

    let left = 0
    let right = sorted.length - 1

    for(let index = 0; index < sorted.length; index++) {
        result.push(index % 2 === 0 ? sorted[left++] : sorted[right--])
    }

    return result
}