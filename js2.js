function numbers(numArray, key){
    let lenArr = numArray.length;

    let changeToArray = key => Number(key);
    const keyArr = Array.from(String(key),changeToArray);
    let lenKey = keyArr.length;

    const letters = [];
    
    rep = Math.floor(lenArr / lenKey);
    res = lenArr % lenKey;


    if(lenArr <= lenKey){
        for(var i = 0 ; i < lenArr; i++){
            var letter = numArray[i] - keyArr[i];
            letters.push(letter);
        }
        return letters;
    }
    else{
        var j = 0;
        while(j < lenArr){
            for(var k = 0; k < rep; k++){
                for(var l = 0; l < lenKey; l++){
                    var letter = numArray[j] - keyArr[l];
                    letters.push(letter);
                    j++;
                }
            }
            for(var m = 0; m < res; m++){
                var letter = numArray[j] - keyArr[m];
                letters.push(letter);
                j++;
            }
        }
    }
    
    const word = [];
    for(var i = 0; i < letters.length; i++){
        let char = String.fromCharCode(letters[i]+96);
        word.push(char);
    }
    var result = word.join("")
    return result;
};
 
console.log(numbers([6,4,1,3,9,20],100))