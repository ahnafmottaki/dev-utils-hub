# Dev Utils Hub

Welcome to **Dev Utils Hub** — a collection of reusable utilities, helper functions, and boilerplate code used across React, Firebase, Express, and Node.js projects.

> 🎯 Purpose: Avoid reinventing the wheel. Write once, reuse forever.

---

## 📁 Folder Overview

### `/react`
Contains utilities for React apps.
- **PrivateRoute.jsx**: HOC to protect routes based on auth state.

### `/firebase`
Firebase-specific code and helpers.
- **encodeServiceAccount.js**: Encodes Firebase service account JSON to base64 (useful for CI/CD).
- **firebaseInit.js**: Firebase app initialization code for modular SDK setup.

### `/express`
Backend middleware and utilities.
- **errorHandler.js**: Global error-handling middleware.

### `/scripts`
Standalone Node scripts.
- **encodeToBase64.js**: Generic file or string base64 encoder.

### `/utils`
General-purpose utilities.
- **debounce.js**: Debounce function to limit frequent function calls.

---

## 🧠 Best Practices to Maintain This Repo

1. **Modular Naming:** Keep each utility self-contained and named by purpose.
2. **Code Comments:** Briefly document what each function does — helpful for future-you.
3. **Keep Examples:** Add example usage in each file as a comment or under `/examples/`.
4. **README First:** Update the README whenever you add a new utility or folder.
5. **Tag Releases (Optional):** Version your utilities with Git tags if needed.
6. **Structure Grows With You:** Start simple and evolve.
7. **Use GitHub Topics:** Tag with `#react`, `#firebase`, `#nodejs`, etc.

---

## 🤝 Contributions

This repo is for **personal productivity**.

---

## 🔗 License

MIT License
