
function permAlone(str) {
  var arr=str.split('');
  var perms=[];

  function constructPerm(usable,perm){
    if(perm.length===str.length){
      perms.push(perm);
    }else {
      for(var i=0;i<usable.length;i++){
        var leftUsable=[];
        for  (var j=0;j<usable.length;j++){
          if(i!=j){
            leftUsable.push(usable[j]);
          }
        }
        constructPerm(leftUsable,perm+usable[i]);
      }
    }
  }
  constructPerm(arr,'');
  var resultArr=perms.filter(function(element,index){
    return !element.match(/(.)\1+/);
  });
  return resultArr.length;
}

permAlone('a');
