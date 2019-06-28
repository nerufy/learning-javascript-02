// FizzBuzz

// サンプル: "1" という文字列を出力
for(var i=1; i <=15; i++ ){
    if(!(i%3)&&(i%5)){
        process.stdout.write("Fizz");
        console.log("")
    }else if(!(i%5)&&(i%3)){
        process.stdout.write("Buzz");
        console.log("")
    }else if(!(i%15)){
        process.stdout.write("FizzBuzz");
        console.log("")
    }else{
        console.log(i);
    }
}

// サンプル: "FizzBuzz" という文字列を出力
// (process.stdout.write で改行なしの出力ができる)
