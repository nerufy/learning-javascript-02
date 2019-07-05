// FizzBuzz

// サンプル: "1" という文字列を出力
for(var i=1; i <=15; i++ ){
    if((i%5 && i%3)){
        console.log(i);
        continue
    }if(!(i%3)){
        process.stdout.write("Fizz");
    }if(!(i%5)){
        process.stdout.write("Buzz");
    }
    process.stdout.write("\n")
}

// サンプル: "FizzBuzz" という文字列を出力
// (process.stdout.write で改行なしの出力ができる)
