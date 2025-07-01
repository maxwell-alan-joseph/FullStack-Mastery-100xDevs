function waitT1(t1){
    return new Promise (resolve => {
        setTimeout (resolve, t1 * 1000);
    });
}

function waitT2(t2) {
    return new Promise (resolve => {
        setTimeout (resolve, t2 * 1000);
    });
}

function waitT3(t3) {
    return new Promise (resolve => {
        setTimeout (resolve, t3 * 1000);
    });
}

function waitForAll(t1, t2, t3) {
    const startTime = Date.now();

    return Promise.all([
        waitT1(t1), waitT2(t2), waitT3(t3)
    ]).then( () => {
            const time = Date.now() - startTime;
            return time;
    });
}

waitForAll(1, 2, 3).then(time => {
    console.log(`All done in ${time} ms`);
});
