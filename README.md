# E-Commerce Website Automation – Cypress (SDET)

This project is a QA automation suite developed using **Cypress** for end-to-end testing of a live e-commerce demo website:  
 https://tutorialsninja.com/demo/

---

## Objective

To automate core functionalities of an e-commerce platform including:

- Home Page navigation
- User registration & login
- Product search & listing
- Product details validation
- Cart functionality
- Checkout flow

---

## Tech Stack

| Tool         | Purpose                |
| ------------ | ---------------------- |
| Cypress      | End-to-End Automation  |
| JavaScript   | Test Scripting         |
| Mocha + Chai | Assertion Library      |
| GitHub       | Code Repository        |
| Excel/PDF    | Test Docs & Bug Report |

---

## Folder Structure

```bash
project-root/
│
├── cypress/
│   ├── e2e/
│        ├── CartPage.cy.js
│        ├── checkOutPage.cy.js
│        ├── homePage.cy.js
│        ├── loginPage.cy.js
│        ├── Productpage.cy.js
│        ├── Registration.cy.js
│        ├── searchPage.cy.js
│        ├── spec.cy.js
│   ├── fixtures/
│   ├── Pages/
│        ├── CartFunctionality.js
│        ├── CheckoutFlow.js
│        ├── HomePage.js
│        ├── LoginPage.js
│        ├── ProductDetail.js
│        ├── Registration.js
│        ├── Search.js
│   ├── support/
│        ├── testData.js
│
├── docs/
│   ├── CW_Test_Cases_And_Bugs.xlsx
│   ├── Summary_Report.pdf
│   ├── Test_Plan.pdf
│   ├── Test_Scenario.pdf
│
├── cypress.config.js
├── package.json
└── README.md


---

##  Test Coverage Summary

| Module             | Test Cases |
| ------------------ | ---------- |
| Home Page          | 14         |
| Registration/Login | 15         |
| Search             | 16         |
| Category Listing   | 17         |
| Product Detail     | 21         |
| Cart Functionality | 12         |
| Checkout Flow      | 15         |
| **Total**          | **110**    |

---

##  Bugs Found

Total **6** bugs were identified and documented in the Bug Report file. These were UI/UX and functional bugs encountered during manual & automation testing.

 Refer: `/docs/Bug_Summary_Qafox.xlsx`

---

##  Test Execution Result

> All test cases were automated using Cypress and successfully executed on the demo site.
> Screenshots and videos are available for failed test cases (if any).

---

##  Video Demonstrations

- **Project Demo:** [ YouTube Link](#)
- **Questionnaire Video:** [ YouTube Link](#)
- **Individual Contribution:** [ YouTube Link](#)

---

##  Important Links

-  **Live Site**: https://tutorialsninja.com/demo/
-  **Google Drive Folder**: [View Docs](#)
-  **GitHub Repo**: [Your GitHub Link Here](#)

---

##  Author

**Name**: Your Full Name
**Masai ID**: B46SDETxxx
**Email**: yourname@gmail.com
```
