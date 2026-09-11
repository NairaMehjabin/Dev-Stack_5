# ⚡ DevStack

> A modern, interactive web application designed to help developers explore, compare, and compose their ideal software technology stacks.

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

### What is JSX, and why is it used in React?
JSX stands for JavaScript XML. It’s a syntax extension that lets us write HTML-like markup directly inside our JavaScript code. It makes building UI components much cleaner and more intuitive because you can keep your structure and visual logic together in one place.

### What is the difference between props and state?
* **Props** (short for properties) are read-only inputs passed down from a parent component to a child component. The receiving component can't modify them directly.
* **State** is internal data managed directly inside a component. Unlike props, state can change over time based on user interactions or API updates, causing the component to re-render when it does.

### What does the `useState` hook do, and where did you use it in this project?
The `useState` hook lets a functional component preserve and update local state values across re-renders. 

In this project, it was used in `TechSection.tsx` to keep track of two things:
1. `technologies`: The list of tech cards retrieved from our JSON file.
2. `selectedStack`: The array of technologies the user adds to their personal stack sidebar.

### What does the `useEffect` hook do, and why did you need it to load the JSON data?
`useEffect` handles side effects in React components, like fetching external data, setting up event listeners, or modifying the DOM. 

We used it to handle fetching our local tech data from `/data/technologies.json` as soon as the component mounts onto the page, ensuring our UI renders smooth loading states while waiting for data.

### Why does every item in a `.map()` list need a unique `key` prop?
React needs unique keys to keep track of individual DOM nodes when lists change, get re-ordered, or have items removed. Giving each item a unique `key` (like `tech.id`) helps React pinpoint exactly which item changed so it only updates that single element instead of re-rendering the whole list.

### What is conditional rendering? Show one place you used it.
Conditional rendering means showing or hiding UI elements based on specific states or logical conditions. 

In our stack sidebar, we used conditional rendering to show an empty state message whenever no tools are selected yet:

```tsx
{selectedStack.length === 0 ? (
  <div className="border border-dashed border-slate-200 rounded-2xl p-8 text-center bg-slate-50/50">
    <p className="text-xs font-medium text-slate-400">
      Your stack is empty.
    </p>
  </div>
) : (
  {/* Render Selected Tech List & Clear All Button */}
)}