function generateStars(n){
    for(let i=1;i<=n;i++){
        let stars=2 * i - 1;
        let spaces= n-i;
        let rows = " ".repeat(spaces)+ "*".repeat(stars);
        console.log(rows);
    }
}
generateStars((20));

function generatePyramid(N) {
    for (let i = 1; i <= N; i++) {
        // Create spaces first
        let row = '';
        for (let j = 1; j <= N - i; j++) {
            row += ' '; // Add space
        }

        // Add stars to the row
        for (let k = 1; k <= 2 * i - 1; k++) {
            row += '*'; // Add star
        }

        console.log(row); // Print the row with spaces followed by stars
    }
}

generatePyramid(5); // Call the function with N = 10


