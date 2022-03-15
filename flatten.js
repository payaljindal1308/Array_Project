

module.exports = function flatten(elements, depth){
    let arr = [];
      if (elements){
        for (let index = 0; index < elements.length; index++){
            if (Array.isArray(elements[index])) {
                arr = arr.concat(flatten(elements[index]));
            }
            else{
                if(elements[index]){
                    arr.push(elements[index]);
                }
            }
            }
        return arr;
      }
    return [];
}

