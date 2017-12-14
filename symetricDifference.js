
function sym(args) {
  //var arr = Array.prototype.slice.call(args);
  var arr = [].slice.call(arguments);
  function symetricDifference(arr1, arr2){
    var arr3=[];
    for (var i=0;i<arr1.length;i++){
      if ((!arr2.includes(arr1[i]))&&(!arr3.includes(arr1[i]))) arr3.push(arr1[i]);
    }
     for (i=0;i<arr2.length;i++){
      if ((!arr1.includes(arr2[i]))&&(!arr3.includes(arr2[i]))) arr3.push(arr2[i]);
    }
    return arr3;
  }
  var resultadoFinal=arr.reduce(symetricDifference);

  return resultadoFinal;
}

sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
