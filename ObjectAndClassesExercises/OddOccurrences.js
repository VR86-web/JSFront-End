function oddOccurrences(strings) {
    let stringsArr = strings.toLowerCase().split(' ')
    let result = {}

    for(let element of stringsArr){
        if(result.hasOwnProperty(element)){
            result[element] += 1
        }else{
            result[element] = 1
        }
    }

    let entries = Object.entries(result).sort((a,b) => b[1] - a[1])
    let finalResult = []
    for(let element of entries){
        if(element[1] % 2 !== 0){
            finalResult.push(element[0])
        }
    }

    console.log(finalResult.join(' '));
  
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')