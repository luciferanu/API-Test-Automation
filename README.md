# API Test Automation

A Node.js-based API automation project for testing REST APIs using **Axios**. The project demonstrates reusable utility functions, data-driven testing, password hashing, and environment-based configuration for automating an authentication workflow.

> **Note:** This project uses sample data and placeholder environment variables. No confidential credentials, API endpoints, or organization-specific information are included.

---

## Project Overview

This project automates a multi-step authentication workflow by:

- Performing a User Lookup request
- Generating a SHA-256 hash of the user's password
- Authenticating through the Login API
- Validating the API response
- Displaying a summarized test execution report

The project is organized using reusable modules and environment variables, making it easy to maintain and extend.

---

## Features

- Automated User Lookup API testing
- Automated Login API testing
- SHA-256 password hashing
- Data-driven test execution using JSON
- Positive and negative login scenarios
- Environment variable configuration using `.env`
- Modular utility-based architecture
- Pass/Fail/Skipped execution summary

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
├── package-lock.json
└── README.md
```

---

## Tech Stack

- Node.js
- JavaScript (ES6)
- Axios
- dotenv
- Crypto (SHA-256)

---

## Installation

Clone the repository:

```bash
git clone https://github.com/luciferanu/API-Test-Automation.git
```

Navigate to the project directory:

```bash
cd API-Test-Automation
```

Install dependencies:

```bash
npm install
```

Create a `.env` file using the provided `.env.example` template.

---

## Environment Variables

Example configuration:

```env
BASE_URL=https://your-api-endpoint
PARTNER_ID=your-partner-id
TENANT_ID=your-tenant-id
```

---

## Running the Tests

Run Login Test

```bash
npm run login
```

Run User Lookup Test

```bash
npm run lookup
```

Run Plain Password Test

```bash
npm run plain
```

Run Password Hash Test

```bash
npm run hash
```

Alternatively, individual test files can be executed using Node.js.

---

## Authentication Workflow

```
Read Test Data
        │
        ▼
User Lookup API
        │
        ▼
Receive Session ID
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

## Sample Output

```text
========== LOGIN TEST EXECUTION ==========

Testing user: validUser
✓ PASS - Login Successful

Testing user: invalidUser
✓ PASS - Login Rejected

========== TEST SUMMARY ==========
Passed : 2
Failed : 0
Skipped: 1
==================================
```

---

## Future Enhancements

- HTML test reporting
- Response time validation
- JSON schema validation
- CSV/Excel-based test data
- Additional authentication test scenarios

---

## Disclaimer

This repository contains sample data and placeholder configuration values. Any confidential credentials, API endpoints, usernames, passwords, or organization-specific information have been removed prior to publication.

---

## Author

**Anubhav Nandi**

GitHub: https://github.com/luciferanu
