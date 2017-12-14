
function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
  var obj1 = arr1.reduce(function(prev,curr){prev[curr[1]]=curr[0];return prev;},{});
  var obj2 = arr2.reduce(function(prev,curr){prev[curr[1]]=curr[0];return prev;},{});
  var obj3=obj1;

  for(var key in obj2){
    if (!obj1.hasOwnProperty(key)){
      obj3[key]=obj2[key];
    }
    else {
      if(obj2[key]>obj1[key]){
        obj3[key]=obj2[key]+obj1[key];
      }
    }
  }
  //turn result object into array
  var arr3=[];
  var i=0;
  for (key in obj3){
    arr3[i]=[key,obj3[key]];
    i++;
  }
  //sort the array
  arr3=arr3.sort();

  //reverse the array
  for(i=0;i<arr3.length;i++){
    arr3[i]=arr3[i].reverse();
  }

  return arr3;
}

updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
// Example inventory lists
/*var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

updateInventory(curInv, newInv);
*/
