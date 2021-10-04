//this file is for general functions
export function bingMe () {
    console.log('bing');
}

export function palidrome(inVal: string){
    const val:string = inVal;
    const arrayVal = val.split('');
    const arrayLen = arrayVal.length;
    console.log(arrayVal);
    const newArray = val.split('');
    newArray.reverse();
    for(let i=0; i<arrayLen; i++){
        const front = arrayVal[i];
        const back = newArray[i];
        console.log(front);
        console.log(back);
        if(front !== back ){
            console.log('false')
            return;
        }

    }
    console.log('true');
}
// for example: 'kayak' => true
// 'radar' => true
// 'lisabonetatenobasil' => true
// 'abc' => false
