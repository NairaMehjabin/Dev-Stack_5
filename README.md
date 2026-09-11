# ⚡ DevStack

> A modern, interactive web application designed to help developers explore, compare, and compose their ideal software technology stacks.

🔗 **Live Link:** [DevStack](https://dev-stack-5.vercel.app)

---

## 🚀 About the Project

DevStack simplifies the process of discovering and evaluating modern web tools. Whether you're planning a new side project or architecting an enterprise system, DevStack provides a clean visual breakdown of tools across frontend, backend, databases, and tooling, letting you curate and manage a personalized stack in real-time.

---

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)
* **Library:** [React](https://react.dev/)
* **Language:** [TypeScript](https://www.typescriptlang.org/)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Icons:** [Lucide React](https://lucide.dev/)
* **Notifications:** [React-Toastify](https://fkhadra.github.io/react-toastify/introduction)

---

## ✨ Key Features

* **Interactive Stack Builder:** Add or remove technologies dynamically to curate your custom tech stack with instant UI feedback.
* **Smart Filter & Dynamic Badging:** Easily identify tool characteristics with color-coded category badges (e.g., *Popular*, *Fast*, *SSR / Edge*, *Top SQL*).
* **Responsive Pixel-Perfect Design:** Fully optimized visual experience seamlessly tailored across desktop, tablet, and mobile layouts.

---

## 💡 React Concept Answers

### 1. What is JSX, and why is it used in React?

> JSX lets us write HTML-like code inside JavaScript. It makes building React components easier and more readable.

### 2. What is the difference between props and state?

> Props are data sent from a parent component to a child component. State is data managed inside a component and can change over time.

### 3. What does the useState hook do, and where did you use it in this project?

> useState is used to store and update data inside a component. In this project, I used it to store the technology list and the selected technologies in the stack.

### 4. What does the useEffect hook do, and why did you need it to load the JSON data?

> useEffect runs code after a component renders. I used it to load the technology data from the JSON file when the page loads.

### 5. Why does every item in a .map() list need a unique key prop?

> A unique key helps React identify each item in a list and update the UI efficiently.

### 6. What is conditional rendering? Show one place you used it.

> Conditional rendering means showing different content based on a condition. I used it in the stack sidebar to show an empty message when no technology is selected.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

> Data is passed from a parent to a child using props. A child component can send data back by calling a function passed through props.
