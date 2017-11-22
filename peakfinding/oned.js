(function(){
  var arr = [1,2,3,4,2,5,6,8,9,6];
  var peaks = [];
  function findPeak(arr, left, right){
    if (right >= left) {
      var mid = Math.floor(left +(right-left)/2);
      if (arr[mid-1] && arr[mid+1] && (arr[mid] > arr[mid - 1]) && (arr[mid] > arr[mid+1])) {
        peaks.push(arr[mid])
        return arr[mid];
      }

      if (arr[mid] < arr[mid-1]) {
         findPeak(arr, left, mid - 1);
      }

      if (arr[mid] < arr[mid+1]) {
         findPeak(arr, mid+1, right);
      }
    }
    return -1;
    //base case, left >= Right or we meet the condition of peak
    // else we check if we need to scan left or right and call the function accordingly
  }

  var result = findPeak(arr, 0, arr.length - 1);
  console.log('peaks', peaks);
})();
