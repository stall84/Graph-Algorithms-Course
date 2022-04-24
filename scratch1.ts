// let derper = new Promise((resolve, reject) => {
//     try {
//         setTimeout(() => {
//             resolve("Hi you intollerant asshat!");
//         }, 2000)
//     } catch {
//         reject(new Error('Oh Shit'));
//     }
// });

// derper.then((response) => {
//     console.log(response)
// }).catch((err) => console.error(err))

// function fibonator(fibNumberYouWant: number): number {

//     const fibonaci = (n: number): number => {
//        if ( n <= 1 ) return n;
       
//        return fibonaci( n - 1 ) + fibonaci( n - 2 );
//     }
//     const fibCache = Array(fibNumberYouWant+1);
//     console.log('fibCache ; ', fibCache.length)

//     let calcdFibNum = fibonaci(fibNumberYouWant);
//     return calcdFibNum;
// }


// console.log('10th fib element : ', fibonator(10))

// Reverse String using recurssion 

function recursReverse (input: string): string {
    if (input === "") {
        return "";
    }

    return (recursReverse(input.substring(1))) + input.charAt(0);

}

console.log('recurReverse of "hello": ', recursReverse('hello'));