
function rot13(str) {
    console.log(str.length);
    var arr = [];

	for(let i=0; i < str.length; i++){
            if(str.charAt(i) === 'A'){
            arr[i] = 'N';
        } else if(str.charAt(i) === 'B'){
            arr[i] = 'O';
        } else if(str.charAt(i) === 'C'){
            arr[i] = 'P';
        } else if(str.charAt(i) === 'D'){
            arr[i] = 'Q';
        } else if(str.charAt(i) === 'E'){
            arr[i] = 'R';
        } else if(str.charAt(i) === 'F'){
            arr[i] = 'S';
        } else if(str.charAt(i) === 'G'){
            arr[i] = 'T';
        } else if(str.charAt(i) === 'H'){
            arr[i] = 'U';
        } else if(str.charAt(i) === 'I'){
            arr[i] = 'V';
        } else if(str.charAt(i) === 'J'){
            arr[i] = 'W';
        } else if(str.charAt(i) === 'K'){
            arr[i] = 'X';
        } else if(str.charAt(i) === 'L'){
            arr[i] = 'Y';
        } else if(str.charAt(i) === 'M'){
            arr[i] = 'Z';
        } else if(str.charAt(i) === 'N'){
            arr[i] = 'A';
        } else if(str.charAt(i) === 'O'){
            arr[i] = 'B';
        } else if(str.charAt(i) === 'P'){
            arr[i] = 'C';
        } else if(str.charAt(i) === 'Q'){
            arr[i] = 'D';
        } else if(str.charAt(i) === 'R'){
            arr[i] = 'E';
        } else if(str.charAt(i) === 'S'){
            arr[i] = 'F';
        } else if(str.charAt(i) === 'T'){
            arr[i] = 'G';
        } else if(str.charAt(i) === 'U'){
            arr[i] = 'H';
        } else if(str.charAt(i) === 'V'){
            arr[i] = 'I';
        } else if(str.charAt(i) === 'W'){
            arr[i] = 'J';
        } else if(str.charAt(i) === 'X'){
            arr[i] = 'K';
        } else if(str.charAt(i) === 'Y'){
            arr[i] = 'L';
        } else if(str.charAt(i) === 'Z'){
            arr[i] = 'M';
        } else{
            arr[i] = str.charAt(i);
        }

     }
     let result =  arr.toString().replace(/,/g,'');
    return result;
}

var result = rot13('SERR CVMMN!');
 
console.log(result);
console.log(result.length);
