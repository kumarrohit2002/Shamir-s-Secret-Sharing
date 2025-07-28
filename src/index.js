const fs = require('fs');

// Helper function to evaluate value with base to BigInt
function parseValueInBase(str, base) {
    return BigInt(parseInt(str, parseInt(base)));
}

// Lagrange interpolation to find f(0)
function lagrangeInterpolationAtZero(points) {
    const k = points.length;
    let result = BigInt(0);

    for (let i = 0; i < k; i++) {
        let xi = BigInt(points[i][0]);
        let yi = BigInt(points[i][1]);

        let numerator = BigInt(1);
        let denominator = BigInt(1);

        for (let j = 0; j < k; j++) {
            if (i !== j) {
                let xj = BigInt(points[j][0]);
                numerator *= -xj;
                denominator *= xi - xj;
            }
        }

        let term = yi * numerator / denominator;
        result += term;
    }

    return result;
}

// Main function
function computeSecretFromFile(filePath) {
    const rawData = fs.readFileSync(filePath, 'utf-8');
    const data = JSON.parse(rawData);

    const n = data.keys.n;
    const k = data.keys.k;

    let allPoints = [];

    for (const key in data) {
        if (key === "keys") continue;
        const x = parseInt(key);
        const base = data[key].base;
        const value = data[key].value;

        const y = parseValueInBase(value, base);
        allPoints.push([x, y]);
    }

    // For simplicity, pick the first `k` points. (No wrong value detection needed here.)
    const kPoints = allPoints.slice(0, k);

    const secret = lagrangeInterpolationAtZero(kPoints);
    console.log(`Secret (constant term): ${secret}`);
}

// Run both test cases
console.log("Testcase 1:");
computeSecretFromFile('./data/testcase1.json');

console.log("\nTestcase 2:");
computeSecretFromFile('./data/testcase2.json');
