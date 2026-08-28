# DojoKotoba 🥋

**DojoKotoba** is an interactive web application for learning Japanese vocabulary applied to Karate. Through flashcards and games, users can learn the words, commands, and philosophy used inside the dojo.

> This project was built as an **Angular study project**, focused on practicing modern Angular features (standalone components, SSR, signals-based architecture, Angular Material, etc.) together with third-party authentication.

🔗 Live demo: [dojo-kotoba.vercel.app](https://dojo-kotoba.vercel.app/)

---

## ✨ Features

### 📇 Flashcards (Explorar)
Interactive cards that flip to reveal the meaning of each Japanese term when clicked. Cards are organized into the following categories:

- **Todos** — All cards combined
- **Comandos** — Commands used during training and gradings (e.g., instructions given by the sensei)
- **Golpes** — Karate strikes and techniques, connecting each move to its real Japanese name
- **Posições** — Stances/bases, helping build posture, balance, and stability
- **Números** — Numbers in Japanese used to count repetitions and sequences during training

### 🎮 Games
- **Quiz** — The only game currently available. Tests the user's knowledge of the vocabulary learned in the flashcards section.

### 🔐 Authentication
Access to the application requires authentication, integrated with **Auth0**. Available login providers:

- **Google**
- **Username / Password (JWT)**

---

## 🛠️ Tech Stack

| Category | Technology |
|---|---|
| Framework | [Angular](https://angular.dev/) 21 |
| UI Components | Angular Material + Angular CDK |
| Icons | `@ng-icons` (Heroicons) |
| Authentication | [Auth0](https://auth0.com/) (`@auth0/auth0-angular`) |
| Server-Side Rendering | Angular SSR + Express |
| Reactive Programming | RxJS |
| Testing | Vitest + jsdom |
| Environment Variables | `@ngx-env/builder` |
| Language | TypeScript |
| Package Manager | npm |

### Key Dependencies

```json
"@angular/core": "^21.1.0",
"@angular/material": "^21.2.2",
"@angular/ssr": "^21.1.4",
"@auth0/auth0-angular": "^2.7.0",
"@ng-icons/core": "^33.1.0",
"@ng-icons/heroicons": "^33.1.0",
"express": "^5.1.0",
"rxjs": "~7.8.0"
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (compatible with Angular 21)
- npm `11.6.2` or higher
- An [Auth0](https://auth0.com/) account/tenant with an application configured (Google + Username-Password/JWT connections enabled)

### Installation

```bash
git clone https://github.com/<your-username>/dojo-kotoba.git
cd dojo-kotoba
npm install
```

### Environment Variables

This project uses `@ngx-env/builder` to load environment variables. Create a `.env` file in the project root with your Auth0 credentials:

```env
NG_APP_AUTH0_DOMAIN=your-tenant.auth0.com
NG_APP_AUTH0_CLIENT_ID=your-client-id
NG_APP_AUTH0_AUDIENCE=your-api-audience
```

> Adjust variable names to match how they are consumed in the app's Auth0 module configuration.

### Running the app locally

```bash
npm start
```

The app will be available at `http://localhost:4200/`.

---

## 📦 Available Scripts

| Script | Description |
|---|---|
| `npm start` | Runs the app in development mode (`ng serve`) |
| `npm run build` | Builds the app for production |
| `npm run watch` | Builds the app in watch mode (development configuration) |
| `npm test` | Runs unit tests |
| `npm run serve:ssr:auth0-angular` | Serves the built app with Server-Side Rendering (Node/Express) |

### Building for production

```bash
npm run build
```

### Running with SSR

```bash
npm run build
npm run serve:ssr:auth0-angular
```

---

## 📌 Project Purpose

This project is not intended for commercial use. It was created for **educational purposes**, to practice and demonstrate Angular concepts such as:

- Standalone components & modern Angular architecture
- Server-Side Rendering (SSR) with Express
- Third-party authentication (Auth0) with multiple providers
- Angular Material + CDK for UI/UX
- State management and reactive data flow with RxJS

---

## 📬 Contact

- Email: [johanp.queiroz@gmail.com](mailto:johanp.queiroz@gmail.com)

---

## 📄 License

This project is private and intended for study purposes only.
