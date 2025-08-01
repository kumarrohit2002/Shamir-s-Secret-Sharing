

---

### 📄 `README.md`

```markdown
# 🔐 Shamir's Secret Sharing - Polynomial Secret Recovery

This project is a solution to the Catalog Placements Assignment where we implement a simplified version of **Shamir's Secret Sharing algorithm** in **JavaScript (Node.js)**.

Given a set of encoded (x, y) points derived from a secret polynomial, the goal is to decode them and recover the **constant term** (`c`) of the polynomial using **Lagrange Interpolation**.

---

## 📁 Folder Structure

```

shamir-secret-sharing/
├── data/
│   ├── testcase1.json         # Sample test case 1
│   └── testcase2.json         # Sample test case 2
├── src/
│   └── index.js               # Main JavaScript solution
├── package.json               # Node.js config
└── README.md                  # This file

````

---

## 🚀 How to Run

1. **Install Node.js** (if not already installed):  
   https://nodejs.org/

2. **Clone or download this repo**, then navigate into it:

```bash
cd shamir-secret-sharing
````

3. **Run the project:**

```bash
node src/index.js
```

---

## ✅ Sample Output

```
Testcase 1:
Secret (constant term): 3

Testcase 2:
Secret (constant term): 79836264059565
```

---

## 🧠 How It Works

* Each test case provides `n` points, with `k` being the minimum required to reconstruct the polynomial.
* The `y` values are encoded using various bases.
* We parse and decode all shares into (x, y) points.
* Using **Lagrange interpolation**, we compute `f(0)` – the **constant term `c`**, which is the secret.

---

## 📌 Techniques Used

* JSON file parsing
* Base conversion using `parseInt(value, base)`
* Lagrange interpolation
* BigInt arithmetic for large number support
* Modular, readable code structure

---

## ⚠️ Constraints

* You must use any language **except Python**.
* Polynomial coefficients can be up to **256-bit integers**.
* No invalid shares are handled in this version (optional extension).

---

---

## 👨‍💻 Author

Made with ❤️ by Rohit Kumar

---
