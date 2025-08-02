# Dev Utils Hub

Welcome to **Dev Utils Hub** — a collection of reusable utilities, helper functions, and boilerplate code used across React, Firebase, Express, and Node.js projects.

> 🎯 Purpose: Avoid reinventing the wheel. Write once, reuse forever.

---

## 📁 Folder Overview

### `/express`

Backend middleware and utilities.

- **errorHandler.js**: Global error-handling middleware.
- **asyncHandler.js**: Best way to handle Errors.

### `/firebase`

Firebase-specific code and helpers.

- **encodeServiceAccount.js**: Encodes Firebase service account JSON to base64 (useful for CI/CD).
- **convertServiceAccount**: Convert your Base64 service key to UTF-8.

### `/mongodb/templates`

MongoDB Feature Templates

- **create-collection-with-validator.js**: Add Schema Validation to your document via validator.

### `/react`

Contains utilities for React apps.

- **PrivateRoute.jsx**: HOC to protect routes based on auth state.

### `/scripts`

Standalone Node scripts.

### `/utils`

General-purpose utilities.

- **ApiResponse**: Best Practice for sending response in express via Class.
- **AppError**: Best Practice for handling error in express via Class.

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
