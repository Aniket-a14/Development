let a = Math.floor((Math.random() * 10) + 1);
console.log(a)

try {
    if (a > 5) {
        console.log("Accepted");
    } else {
        throw new Error("Not possible");
    }
} catch (error) {
    console.error(error.message);
}
