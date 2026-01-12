# Envíopack - Cypress - Challenge

---

## 📂 Project Structure

```
cypress/
 ├── e2e/
 │    └── login.cy.js
 ├── fixtures/
 │    └── test-data.json
 └── support/
      ├── commands.js
      ├── e2e.js
      ├── pages/
      │    ├── loginPage.js
      │    └── homePage.js
      └── selectors/
           ├── loginPageSelectors.js
           └── homePageSelectors.js
```


---

## 📂 Requirements

* Node.js v16+ 
* npm v9+
* Git

---

## 🛠️ Installation

### 1. Clone the repository

```bash
git clone <url-del-repositorio>
cd <main-folder>
```

### 2. Dependencies

```bash
npm install
```

---

### 3. Execution

```bash
npm run cypress:open
```

---

#### Scripts defined in `package.json`:

```json
"scripts": {
    "cypress:open": "cypress open",
    "cypress:run": "cypress run",
    "test": "cypress run"
}
```