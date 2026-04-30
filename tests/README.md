# Playwright Test Automation - Practice Project

A test automation project built with **Playwright** and **TypeScript**, covering a wide range of UI interactions on [practice-automation.com](https://practice-automation.com). This project was built for learning purposes, focusing on automating common web functionalities using happy path scenarios.

---

## 🛠️ Tech Stack

- [Playwright](https://playwright.dev/) — end-to-end testing framework
- TypeScript
- Node.js
- GitHub Actions — CI/CD pipeline

---

## 🚀 How to Run

### Install dependencies
```bash
npm install
```

### Install Playwright browsers
```bash
npx playwright install
```

### Run all tests
```bash
npx playwright test
```

### Run a specific test file
```bash
npx playwright test tests/testonline.spec.ts
```

### View the HTML report
```bash
npx playwright show-report
```

---

## 🧪 Test Cases Overview

All tests are happy path scenarios covering real UI interactions.

| Test | Description |
|---|---|
| test 2 - Form Fields | Fills in a form with text inputs, checkboxes, radio buttons, dropdowns and submits |
| test 5 - Calendars | Selects dates from a date picker |
| test 7 - Tables | Interacts with a data table — changes entries per page, searches, and sorts columns |
| test 8 - Window Operations | Opens new tabs and windows, handles popups and navigation |
| test 9 - Hover | Hovers over an element to reveal hidden content |
| test 10 - Ads | Waits for an ad to appear after a countdown and interacts with it |
| test 11 - File Download | Downloads files including a password-protected file using correct and incorrect passwords |
| test 12 - File Download | Extended download test covering iframe interactions and multiple download events |
| test 13 - Spinners | Interacts with spinner elements |
| test 14 - File Upload | Uploads a local file using the file input |
| test 15 - File Upload | Uploads a file from the test fixtures folder |

---

## ⚠️ Known CI Limitations

Some tests behave differently in the CI headless environment compared to running locally:

- **Test 8 - Window Operations (webkit)** — `goBack()` navigation is blocked by browser policy in webkit on CI. Works as expected on local machines.
- **Test 12 - File Download (chromium)** — Iframe-based download events are unreliable in headless CI mode. The test passes locally but may fail in CI.
- **Localhost tests** — Some test files target `localhost:4200` which requires a local dev server. These are expected to fail in CI as no server is running.

---

## 📁 Project Structure

```
📂 tests/
├── testonline.spec.ts       — main online test suite
├── firstTest.spec.ts
├── secondTest.spec.ts
├── thirdTest.spec.ts
├── fourthTest.spec.ts
├── fifthTest.spec.ts
├── sixthTest.spec.ts
└── fixtures/
       └── TestDoc.txt       — file used for upload tests
📂 .github/
└── workflows/
       └── playwright.yml    — GitHub Actions CI pipeline
playwright.config.ts         — Playwright configuration
```

---

## 📝 Notes

This project is purely for **practice and learning purposes**. The goal was to explore Playwright's API and get comfortable automating real-world UI interactions including:

- Form inputs and validation
- File uploads and downloads
- Popups, tabs and window handling
- iFrames
- Dynamic content like ads and spinners
- Tables with sorting, searching and pagination
- Hover interactions
- Calendar date pickers
