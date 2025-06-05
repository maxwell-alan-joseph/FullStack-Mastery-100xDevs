function wait1(t) {
    return new Promise( resolve => {
        setTimeout(resolve, t * 1000);
    });
}

function wait2(t) {
    return new Promise ( resolve => {
        setTimeout(resolve, t * 1000);
    });
}

function wait3(t) {
    return new Promise ( resolve => {
        setTimeout(resolve, t * 1000);
    });
}

function calculateTime(t1, t2, t3) {
    const start = Date.now();

    return wait1(t1)
        .then( () => wait2(t2))
        .then( () => wait3(t3))
        .then( () => {
            const time = Date.now() - start;
            return time;
        });
}

calculateTime(1, 3, 5).then(time => {
    console.log(`sequentially done in ${time} ms`);
});
