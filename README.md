# 🚀 Holberton Web Backend

> A collection of back-end projects built during the Holberton School Full-Stack curriculum — covering modern JavaScript (ES6+), Node.js fundamentals, and server-side development best practices.

![GitHub repo size](https://img.shields.io/github/repo-size/Maxime-Regnier/holbertonschool-web_back_end)
![GitHub last commit](https://img.shields.io/github/last-commit/Maxime-Regnier/holbertonschool-web_back_end)
![License](https://img.shields.io/badge/license-MIT-blue.svg)
![JavaScript](https://img.shields.io/badge/Language-JavaScript%20ES6+-F7DF1E?logo=javascript&logoColor=black)
![Node.js](https://img.shields.io/badge/Runtime-Node.js%2018-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Framework-Express%204.x-000000?logo=express&logoColor=white)
![Holberton School](https://img.shields.io/badge/Holberton-School-red)

---

## 📋 Table of Contents

- [Project Overview](#-project-overview)
- [Projects Included](#-projects-included)
- [Technologies](#-technologies)
- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Project Structure](#-project-structure)
- [Usage](#-usage)
- [Features](#-features)
- [ES6 Modules](#-es6-modules)
- [Node.js Servers](#-nodejs-servers)
- [Branch Strategy](#-branch-strategy)
- [Code Documentation](#-code-documentation)
- [Acknowledgements](#-acknowledgements)

---

## 🎯 Project Overview

**Holberton Web Backend** is a comprehensive collection of backend development projects that demonstrates proficiency in:

✅ Modern JavaScript (ES6+) syntax and features  
✅ Asynchronous programming patterns (Promises, async/await)  
✅ Node.js fundamentals and file system operations  
✅ Building HTTP servers with Express.js  
✅ RESTful API design principles  
✅ Server-side routing and middleware  
✅ Data structures and algorithms  
✅ Professional code quality with ESLint and formatting  

These projects are self-contained modules, each building foundational skills required for full-stack development.

---

## 📂 Projects Included

### ES6 Modules

| Module | Topics | Status |
|--------|--------|--------|
| **ES6_basic** | Arrow functions, destructuring, spread/rest, template literals, const/let | ✅ Complete |
| **ES6_data_manipulation** | map(), filter(), reduce() on datasets | ✅ Complete |
| **ES6_data_structures** | Sets, Maps, WeakMaps, TypedArrays | ✅ Complete |
| **ES6_classes** | OOP, inheritance, static methods, getters/setters | ✅ Complete |
| **ES6_promise** | Promises, chaining, Promise.all(), async/await, error handling | ✅ Complete |

### Node.js Module

| Module | Topics | Status |
|--------|--------|--------|
| **Node_JS_basic** | File I/O, HTTP servers, Express.js, routing, middleware | ✅ Complete |

---

## 🛠 Technologies

### Language & Runtime

| Technology | Version | Purpose |
|-----------|---------|---------|
| **JavaScript** | ES6+ (ES2015+) | Core language |
| **Node.js** | 18.x+ | JavaScript runtime |
| **npm** | 8.x+ | Package manager |

### Development Tools

| Tool | Purpose |
|------|---------|
| **Babel** | Transpile ES6+ to ES5 |
| **ESLint (Airbnb)** | Code quality and style |
| **Jest** | Unit testing framework |
| **Express.js** | Web framework |
| **Nodemon** | Auto-reload development server |

### Standards & Practices

- ✅ **ESLint Airbnb Style Guide** - Consistent code quality
- ✅ **JSDoc Comments** - Professional documentation
- ✅ **Jest Testing** - Unit tests included
- ✅ **npm Scripts** - Dev, build, and test commands

---

## ⚙️ Prerequisites

### System Requirements

- **OS**: Linux (Ubuntu 20.04+), macOS, or Windows with WSL2
- **Node.js**: 18.x or higher
- **npm**: 8.x or higher
- **Git**: Any recent version

### Verify Installation

```bash
# Check Node.js version
node --version

# Check npm version
npm --version

# Check Git version
git --version
```

---

## 🚀 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/Maxime-Regnier/holbertonschool-web_back_end.git
cd holbertonschool-web_back_end
```

### 2. Choose a Module

```bash
# Navigate to the project you want to work with
cd ES6_basic
# or
cd Node_JS_basic
# etc.
```

### 3. Install Dependencies

```bash
# Install all dependencies for that module
npm install

# Expected output:
# added XXX packages in X.XXs
```

---

## 📂 Project Structure

```
holbertonschool-web_back_end/
│
├── ES6_basic/                      # ES6 Syntax Fundamentals
│   ├── 0-constants.js              # const keyword
│   ├── 1-block-scoping.js          # let and block scope
│   ├── 2-arrow.js                  # Arrow functions
│   ├── 3-default.js                # Default parameters
│   ├── 4-rest-parameter.js         # Rest parameters
│   ├── 5-spread.js                 # Spread operator
│   ├── 6-string-interpolation.js   # Template literals
│   ├── 7-getBudgetObject.js        # Object shortcuts
│   ├── 8-getBudgetCurrentYear.js   # Computed properties
│   ├── 9-getFullBudgetObject.js    # Method shorthand
│   ├── package.json
│   └── .eslintrc.js
│
├── ES6_data_manipulation/          # Array Methods & Manipulation
│   ├── 0-get_list_students.js
│   ├── 1-get_list_student_ids.js
│   ├── 2-get_students_by_loc.js
│   ├── 3-get_ids.js
│   ├── 4-update_list_by_city.js
│   ├── 5-typed_arrays.js
│   ├── 6-set.js
│   ├── 7-has_array_values.js
│   ├── 8-clean_set.js
│   ├── package.json
│   └── .eslintrc.js
│
├── ES6_data_structures/            # Sets, Maps, WeakMaps
│   ├── 0-set.js
│   ├── 1-has_by_id.js
│   ├── 2-size_rest_sum.js
│   ├── 3-optional_chaining.js
│   ├── 4-update_object_by_array.js
│   ├── package.json
│   └── .eslintrc.js
│
├── ES6_classes/                    # Object-Oriented Programming
│   ├── 0-classroom.js              # Basic class
│   ├── 1-make_classrooms.js        # Instantiation
│   ├── 2-hbtn_course.js            # Class with methods
│   ├── 3-currency.js               # Getters & Setters
│   ├── 4-pricing.js                # Class inheritance
│   ├── 5-building.js               # Abstract classes
│   ├── package.json
│   └── .eslintrc.js
│
├── ES6_promise/                    # Promises & Async Programming
│   ├── 0-promise.js                # Create promise
│   ├── 1-promise.js                # Promise executor
│   ├── 2-then.js                   # Promise.then()
│   ├── 3-all.js                    # Promise.all()
│   ├── 4-multiple_promises.js      # Multiple promises
│   ├── 5-filter.js                 # Promise + filter
│   ├── 6-final-user.js             # Final user promise
│   ├── package.json
│   └── .eslintrc.js
│
├── Node_JS_basic/                  # Node.js & Express.js
│   ├── 0-console.js                # Basic Node.js
│   ├── 1-stdin.js                  # Standard input/output
│   ├── 2-read_file.js              # File reading
│   ├── 3-read_file_async.js        # Async file reading
│   ├── 4-http.js                   # HTTP server
│   ├── 5-http.js                   # HTTP server with routing
│   ├── 6-http_express.js           # Express.js server
│   ├── 7-http_express.js           # Express with GET/POST
│   ├── full_server/                # Full Express application
│   │   ├── utils.js
│   │   ├── controllers/
│   │   │   ├── AppController.js
│   │   │   └── StudentsController.js
│   │   ├── routes/
│   │   │   └── index.js
│   │   ├── database.csv
│   │   └── server.js
│   ├── package.json
│   └── .eslintrc.js
│
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

---

## 💡 Usage

### Running ES6 Projects

Each ES6 module uses Babel to transpile and run modern JavaScript:

```bash
# Navigate to the module
cd ES6_basic

# Run a specific file
npm run dev 0-constants.js

# Expected output:
# { income: 1800 }
```

### Running Node.js Projects

```bash
# Navigate to Node_JS_basic
cd Node_JS_basic

# Start the development server
npm run dev

# Expected output:
# Server is listening on port 1245
# To stop: press Ctrl+C
```

### Running with Nodemon (Auto-reload)

```bash
# Automatically restarts when files change
npm run dev
```

### Testing with Jest

```bash
# Run all tests
npm test

# Run tests in watch mode
npm test -- --watch

# Run specific test file
npm test -- 0-promise.test.js
```

### Linting Code

```bash
# Check code quality with ESLint
npm run lint

# Fix linting issues automatically
npm run lint -- --fix
```

---

## ✨ Features

### ES6 Features Covered

#### ES6_basic
- ✅ `const` and `let` declarations
- ✅ Arrow functions (`=>`)
- ✅ Default parameters
- ✅ Rest parameters (`...args`)
- ✅ Spread operator
- ✅ Template literals (backticks)
- ✅ Object property shorthand
- ✅ Computed property names
- ✅ Method shorthand

#### ES6_data_manipulation
- ✅ Array `.map()` method
- ✅ Array `.filter()` method
- ✅ Array `.reduce()` method
- ✅ Typed arrays
- ✅ Set data structure
- ✅ Array/Set conversion

#### ES6_data_structures
- ✅ Map data structure
- ✅ Set operations
- ✅ WeakMap usage
- ✅ Optional chaining (`?.`)
- ✅ Nested updates

#### ES6_classes
- ✅ Class declaration
- ✅ Constructor method
- ✅ Instance methods
- ✅ Static methods
- ✅ Getters and Setters
- ✅ Class inheritance
- ✅ Method overriding

#### ES6_promise
- ✅ Promise creation
- ✅ Promise.resolve() / Promise.reject()
- ✅ Promise.then() chaining
- ✅ Promise.all() for multiple promises
- ✅ Promise.race()
- ✅ Promise error handling
- ✅ async/await syntax
- ✅ Error propagation

### Node.js Features

#### Node_JS_basic
- ✅ Console operations
- ✅ Standard input/output (stdin/stdout)
- ✅ File system operations
- ✅ Asynchronous file reading
- ✅ Native HTTP module
- ✅ HTTP routing
- ✅ Express.js framework
- ✅ Middleware implementation
- ✅ Route handling
- ✅ Static file serving

---

## 📡 ES6 Module Examples

### Arrow Functions & Destructuring

```javascript
// ES6_basic
const getStudentById = (list, id) => list.find(student => student.id === id);

// Destructuring
const { id, name, email } = student;

// Spread operator
const newList = [...list, newStudent];
```

### Array Methods

```javascript
// ES6_data_manipulation
const getListStudentIds = (list) => list.map(student => student.id);
const filterByCity = (list, city) => list.filter(student => student.location === city);
```

### Classes & OOP

```javascript
// ES6_classes
class Currency {
  constructor(name, code) {
    this._name = name;
    this._code = code;
  }

  get name() {
    return this._name;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
```

### Promises & Async/Await

```javascript
// ES6_promise
const guardrail = (mathFunction) => {
  const queue = [];
  try {
    queue.push(mathFunction());
  } catch (e) {
    queue.push(`Error: ${e.message}`);
  }
  return queue;
};

// Async/Await
async function asyncUploadUser() {
  try {
    const { firstName, lastName, age } = await uploadUser();
    console.log(`${firstName} ${lastName} is ${age}`);
  } catch (error) {
    console.log('Signup system error');
  }
}
```

### Express Server

```javascript
// Node_JS_basic
const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(1245, () => {
  console.log('Server is listening on port 1245');
});
```

---

## 🌿 Branch Strategy

| Branch | Purpose | Status |
|--------|---------|--------|
| `main` | Stable, production-ready code | Active |
| `develop` | Active development and feature integration | Development |
| `testing` | Integration tests and validation | Testing |

### Branching Workflow

```
main (production)
  ↑
  └─ develop (staging)
      ├─ feature/es6-modules
      ├─ feature/promises
      ├─ feature/node-servers
      └─ feature/express-integration
```

---

## 📚 Code Documentation

### JSDoc Standards

All JavaScript functions are documented using **JSDoc** comments:

```javascript
/**
 * Get a student by their ID from a list
 * 
 * @param {Array<Object>} list - List of students
 * @param {number} id - Student ID to search for
 * @returns {Object|undefined} The student object if found, undefined otherwise
 * 
 * @example
 * const list = [
 *   { id: 1, name: 'John' },
 *   { id: 2, name: 'Jane' }
 * ];
 * const student = getStudentById(list, 1);
 * // Returns: { id: 1, name: 'John' }
 */
export const getStudentById = (list, id) => {
  return list.find(student => student.id === id);
};
```

### ESLint Configuration

All modules follow the **Airbnb Style Guide** with ESLint:

```javascript
module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: 'airbnb-base',
  rules: {
    'no-console': 'off',
  },
};
```

---

## 🧪 Testing

### Running Tests

```bash
# Run all tests in a module
npm test

# Run specific test file
npm test 0-promise.test.js

# Run with coverage
npm test -- --coverage
```

### Example Test

```javascript
// Example Jest test
describe('getStudentById', () => {
  it('should return student with matching id', () => {
    const list = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Jane' },
    ];
    expect(getStudentById(list, 1)).toEqual({ id: 1, name: 'John' });
  });

  it('should return undefined for non-existent id', () => {
    const list = [{ id: 1, name: 'John' }];
    expect(getStudentById(list, 999)).toBeUndefined();
  });
});
```

---

## 🔧 Development Tips

### Debugging Node.js

```bash
# Run with debug flag
node inspect index.js

# Or use VS Code debugger
# Add breakpoint in VS Code and run with F5
```

### Common npm Scripts

```bash
# Development
npm run dev              # Run with Babel transpilation

# Testing
npm test                 # Run Jest tests
npm test -- --watch     # Run in watch mode

# Linting
npm run lint             # Check code quality
npm run lint -- --fix    # Auto-fix linting issues

# Building
npm run build            # Transpile to dist/
```

### Best Practices

✅ Use `const` by default, `let` for reassignment  
✅ Use arrow functions in most cases  
✅ Always use async/await instead of .then() chains  
✅ Handle all promise rejections with try/catch  
✅ Write descriptive variable and function names  
✅ Use JSDoc for all functions  
✅ Run ESLint before committing code  

---

## 🤝 Contributing

Contributions are welcome! Follow this workflow:

1. Create a feature branch (`git checkout -b feature/YourFeature`)
2. Commit your changes (`git commit -m 'Add YourFeature'`)
3. Push to the branch (`git push origin feature/YourFeature`)
4. Open a Pull Request to `develop`

---

## 📝 License

This project is licensed under the **MIT License** - see the LICENSE file for details.

---

## 🙏 Acknowledgements

- **Holberton School** - Project requirements and curriculum
- **MDN Web Docs** - JavaScript reference and tutorials
- **Node.js Documentation** - Official Node.js guide
- **Express.js** - Web framework documentation
- **Airbnb JavaScript Style Guide** - Code style standards
- **Jest** - Testing framework documentation

---

## 👤 Author

**Maxime Regnier**  
Holberton School Student  
GitHub: [@Maxime-Regnier](https://github.com/Maxime-Regnier)

---

**Built with ❤️ at Holberton School France**
