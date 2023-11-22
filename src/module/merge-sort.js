function merge(leftArr, rightArr, mergeArr) {
    let leftArrIndex = 0;
    let rightArrIndex = 0;
    let mergeArrIndex = 0;

    const leftArrLength = leftArr.length;
    const rightArrLength = rightArr.length;



    while (leftArrIndex < leftArrLength && rightArrIndex < rightArrLength) {
        if(leftArr[leftArrIndex] < rightArr[rightArrIndex]) {
            mergeArr.splice(mergeArrIndex,1, leftArr[leftArrIndex]);
            
            mergeArrIndex += 1;
            leftArrIndex += 1;
        }
       
        else {
            mergeArr.splice(mergeArrIndex,1, rightArr[rightArrIndex]);
           
            mergeArrIndex += 1;
            rightArrIndex += 1;
        }
    }

    while(leftArrIndex < leftArrLength) {
        mergeArr.splice(mergeArrIndex,1, leftArr[leftArrIndex]);
       
        mergeArrIndex += 1;
        leftArrIndex += 1;
    }
    while(rightArrIndex < rightArrLength) {
        mergeArr.splice(mergeArrIndex,1, rightArr[rightArrIndex]);
        
        mergeArrIndex += 1;
        rightArrIndex += 1;
    }
    
    return mergeArr;
}

function sort(arr) {
    const start = 0;
    const end = arr.length;
    const mergeArr = [];

    
    if(end === 1) return arr;


    const mid = Math.ceil((start + end) / 2);

    const leftSlice = arr.slice(start, mid);
    const rightSlice = arr.slice(mid, end);

   
    sort(leftSlice);

    sort(rightSlice);

    merge(leftSlice,rightSlice, arr);
   
    return mergeArr.concat(arr);
}


export default function MergeSort(arr) {
    return sort(arr).filter((value, index, array) => array.indexOf(value) === index);
};