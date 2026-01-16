function generatePyramid(N) {
    for (let i = 1; i <= N; i++) {
        let stars = '*'.repeat(2 * i - 1); // Calculate number of stars
        let spaces = ' '.repeat(N - i); // Calculate spaces on the left side
        console.log(spaces + stars); // Print the line
    }
}

generatePyramid(10); // Call the function with N = 10
