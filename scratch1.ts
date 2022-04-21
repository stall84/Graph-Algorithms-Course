let derper = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
            resolve("Hi you intollerant asshat!");
        }, 2000)
    } catch {
        reject(new Error('Oh Shit'));
    }
});

derper.then((response) => {
    console.log(response)
}).catch((err) => console.error(err))

