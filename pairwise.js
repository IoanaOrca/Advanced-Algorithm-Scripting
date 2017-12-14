function pairwise(arr, arg) {
  var sum=0;
  for(i=0;i<arr.length-1;i++){
    for(j=i+1;j<arr.length;j++){
      if((arr[i]>=0)&&(arr[j]>=0)&&(arr[i]+arr[j])===arg){
        arr[i]=-1;
        arr[j]=-1;
        sum+=i+j;
      }
    }
  }
  return sum;
}
pairwise([0, 0, 0, 0, 1, 1], 1);
//pairwise([1,4,2,3,0,5], 7);
