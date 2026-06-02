# holbertonschool-web_back_end 🚀

> A collection of back-end projects built during the Holberton School Full-Stack curriculum — covering modern JavaScript (ES6+) and Node.js fundamentals.

---

## 📋 Table of Contents

- [Description](#-description)
- [Projects](#-projects)
- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Usage](#-usage)
- [Project Structure](#-project-structure)
- [Author](#-author)

---

## 📖 Description

This repository contains back-end projects completed as part of the Holberton School Web Stack specialization (France campus). Each directory corresponds to a self-contained module covering a specific back-end concept, from ES6 language features to building HTTP servers with Node.js and Express.

The goal of these projects is to build a solid foundation in server-side JavaScript development, understand asynchronous programming patterns, and apply modern tooling (Babel, ESLint, Jest) in a professional workflow.

---

## 📂 Projects

| Directory | Description |
|---|---|
| `ES6_basic` | ES6 syntax: arrow functions, destructuring, spread/rest, computed properties, template literals |
| `ES6_data_manipulation` | Working with `map`, `filter`, `reduce` on real datasets |
| `ES6_data_structures` | Sets, Maps, WeakMaps, TypedArrays |
| `ES6_classes` | OOP with ES6 classes, inheritance, static methods, getters/setters |
| `ES6_promise` | Promise chaining, `Promise.all`, `Promise.race`, `Promise.allSettled`, async/await, error handling |
| `Node_JS_basic` | File I/O, native `http` module, Express.js servers, routing |

---

## 🛠 Technologies

![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?style=flat-square&logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Node.js-18.x-339933?style=flat-square&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-4.x-000000?style=flat-square&logo=express&logoColor=white)
![Babel](https://img.shields.io/badge/Babel-7.x-F9DC3E?style=flat-square&logo=babel&logoColor=black)
![ESLint](https://img.shields.io/badge/ESLint-AirBnB-4B32C3?style=flat-square&logo=eslint&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-Testing-C21325?style=flat-square&logo=jest&logoColor=white)

---

## ⚙️ Prerequisites

- **OS**: Ubuntu 20.04 LTS or later (tested on WSL2/Ubuntu)
- **Node.js**: v18.x or higher
- **npm**: v8.x or higher
- **Git**: any recent version

---

## 🚀 Installation

```bash
# Clone the repository
git clone https://github.com/Maxime-Regnier/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end

# Navigate to a project directory
cd ES6_promise

# Install dependencies
npm install
```

---

## 💡 Usage

### Run a specific file (ES6 projects)

```bash
# Using Babel to support ES6 module syntax
npm run dev <filename>.js
```

Example — running a Promise exercise:

```bash
cd ES6_promise
npm run dev 5-main.js
# Output: Promise { 'Guardrail was processed' }
```

### Run an Express server (Node.js project)

```bash
cd Node_JS_basic
npm run dev
# Server running on http://localhost:1245
```

Then in another terminal:

```bash
curl http://localhost:1245
# Hello Holberton School!
```

### Run tests

```bash
npm test
```

### Lint the code

```bash
./node_modules/.bin/eslint .
```

---

## 🗂 Project Structure

```
holbertonschool-web_back_end/
├── ES6_basic/
│   ├── 0-constants.js
│   ├── 1-block-scoping.js
│   └── ...
├── ES6_data_manipulation/
│   ├── 0-get_list_students.js
│   └── ...
├── ES6_data_structures/
│   └── ...
├── ES6_classes/
│   └── ...
├── ES6_promise/
│   ├── 0-promise.js
│   ├── 6-final-user.js
│   └── ...
└── Node_JS_basic/
    ├── 0-console.js
    ├── 4-http.js
    ├── 6-http_express.js
    └── ...
```

Each project directory contains:
- Implementation files (`*.js`)
- Test files (`*.test.js`) written with Jest
- `package.json` with scripts for `dev`, `test`, and `lint`
- `.eslintrc.js` following the Airbnb style guide

---

## 👤 Author

**Maxime Regnier**
- GitHub: [@Maxime-Regnier](https://github.com/Maxime-Regnier)
- LinkedIn: [Maxime Régnier](https://www.linkedin.com/in/maxime-régnier/)
- School: [Holberton School France](https://www.holbertonschool.fr/)

---

## 📄 Documentation Standard

All functions and modules are documented using **JSDoc** comments. Example:

```js
/**
 * Returns a resolved Promise with the given value.
 * @param {string} firstName - The user's first name
 * @param {string} lastName - The user's last name
 * @returns {Promise<Object>} Resolved promise with user object
 */
export function signUpUser(firstName, lastName) {
  return Promise.resolve({ firstName, lastName });
}
```

---

*Built with ❤️ at Holberton School France*
