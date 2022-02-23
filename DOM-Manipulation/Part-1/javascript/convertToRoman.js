
function convertToRoman(num){
    let str = [];
    let multiplier = 10;

    while(num !==0){
        let rem = num % multiplier;
        multiplier = multiplier * 10;
        if(rem === 1){
            str.push('I');
        } else if(rem === 2){
            str.push('II');
        } else if(rem === 3){
            str.push('III');
        } else if(rem === 4){
            str.push('IV');
        } else if(rem === 5){
            str.push('V');
        } else if(rem === 6){
            str.push('VI');
        } else if(rem === 7){
            str.push('VII');
        } else if(rem === 8){
            str.push('VIII');
        } else if(rem === 9){
            str.push('IX');
        } else if(rem === 10){
            str.push('X');
        } else if(rem === 20){
            str.push('XX');
        } else if(rem === 30){
            str.push('XXX');
        } else if(rem === 40){
            str.push('XL');
        } else if(rem === 50){
            str.push('L');
        } else if(rem === 60){
            str.push('LX');
        } else if(rem === 70){
            str.push('LXX');
        } else if(rem === 80){
            str.push('LXXX');
        } else if(rem === 90){
            str.push('XC');
        } else if(rem === 100){
            str.push('C');
        } else if(rem === 200){
            str.push('CC');
        } else if(rem === 300){
            str.push('CCC');
        } else if(rem === 400){
            str.push('CD');
        } else if(rem === 500){
            str.push('D');
        } else if(rem === 600){
            str.push('DC');
        } else if(rem === 700){
            str.push('DCC');
        } else if(rem === 800){
            str.push('DCCC');
        } else if(rem === 900){
            str.push('CM');
        } else if(rem === 1000){
            str.push('M');
        }
        num = num -rem;
    }
    let ans = '';
        while(str != ''){
            ans += str.pop();
    }
    return ans;
}

let result = convertToRoman(2014);


console.log(result);