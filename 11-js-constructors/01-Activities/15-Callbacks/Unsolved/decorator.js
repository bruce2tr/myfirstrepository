function doSomething() {
    console.log("I'm doing something");
}

function loggingDecorator(func){
    return function() {
        console.log("Starting");
        func();
        console.log("Finished");
    };
}

const wrapped = loggingDecorator(doSomething);

doSomething();
//wrapped();