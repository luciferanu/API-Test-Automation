# API Test Automation Framework

A modular API automation framework built using **Node.js** and **Axios** for testing REST APIs. The framework follows a reusable and data-driven approach by separating test data, utility functions, and test scripts, making it easy to maintain and extend.

> **Note:** This project uses sample data and environment variables. No confidential credentials or endpoints are included.

---

## Features

- Modular framework architecture
- Data-driven API testing
- Environment-based configuration using `.env`
- SHA-256 password hashing
- Automated Login API testing
- User Lookup API testing
- Positive and negative test scenarios
- Pass/Fail execution summary
- Reusable utility functions

---

## Project Structure

```
API-Test-Automation
│
├── data/
│   └── users.json
│
├── tests/
│   ├── hashTest.js
│   ├── testLogin.js
│   ├── testPlainPassword.js
│   └── testUlookup.js
│
├── utils/
│   ├── hashPassword.js
│   ├── login.js
│   └── ulookup.js
│
├── .env.example
├── .gitignore
├── package.json
└── package-lock.json
```

---

## Technologies Used

- Node.js
- JavaScript (ES6)
- Axios
- dotenv
- Crypto (SHA-256)

---

## Installation

Clone the repository

```bash
git clone https://github.com/luciferanu/API-Test-Automation.git
```

Install dependencies

```bash
npm install
```

Create an environment file

```text
.env
```

using

```text
.env.example
```

---

## Environment Variables

Example

```env
BASE_URL=https://your-api-endpoint

PARTNER_ID=your-partner-id

TENANT_ID=your-tenant-id
```

---

## Running Tests

Run Login Test

```bash
node tests/testLogin.js
```

Run User Lookup Test

```bash
node tests/testUlookup.js
```

Run Plain Password Test

```bash
node tests/testPlainPassword.js
```

Run Password Hash Test

```bash
node tests/hashTest.js
```

---

## Framework Workflow

```
Read Test Data
        │
        ▼
User Lookup API
        │
        ▼
Generate SHA-256 Password Hash
        │
        ▼
Login API
        │
        ▼
Validate Response
        │
        ▼
Display Test Summary
```

---

## Future Enhancements

- HTML Reporting
- JUnit XML Reports
- CLI-based test execution
- API response validation library
- CI/CD integration using GitHub Actions
- Newman/Postman collection support
- Docker support

---

## Author

**Anubhav Nandi**

GitHub: https://github.com/luciferanu
