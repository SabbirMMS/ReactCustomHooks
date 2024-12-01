# Lecture Note

This repository serves as a structured project using **React** with **Vite**, designed to facilitate efficient development and integration of modern web technologies. It showcases practical implementations of React concepts and various functionalities for learning and reference.

---

## Features

### **Core Features**
- **React and Vite Integration**: 
  - Built with Vite to ensure a fast development environment and Hot Module Replacement (HMR) for seamless updates during development.
- **Custom React Hooks**: 
  - Encapsulates reusable logic and improves code modularity.
- **Axios Library**: 
  - Utilized for HTTP requests with methods such as `GET`, `POST`, `PUT`, and `PATCH`.
  - Configured with interceptors to manage requests and responses effectively.

### **State and Data Management**
- **TanStack React Query**:
  - Efficient server-state management with features like caching, automatic refetching, and background data synchronization.
  - Easily handles data fetching, mutations, and query invalidation.
- **TanStack Query DevTools**:
  - Visualizes query states (loading, success, error) during development for debugging and optimization.

---

## JSON Fake Server

This project uses a **JSON fake server** to simulate API calls during development. The server allows you to test data fetching, mutations, and caching using React Query.  

- **Start the JSON Server**:  
  Run the following command in your terminal to start the server:  
  ```bash
  npm run server
  ```
- **Default API Endpoint**:  
  The server runs at `http://localhost:3001` and provides endpoints like `/posts` for testing.

---

## Key Dependencies

### **React Plugins**
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md): 
  Utilizes Babel for efficient development with React.
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc): 
  An alternative plugin leveraging SWC for faster performance.

### **Libraries**
- **Axios**: A popular HTTP client library for making API calls and handling complex request flows.
- **@tanstack/react-query**: Robust state management library for data fetching and caching.
- **@tanstack/react-query-devtools**: DevTools to debug React Query in real-time.
- **JSON Server**: A lightweight fake REST API server for rapid prototyping.

---

## Learning Highlights

This repository is an ideal reference for understanding:

1. Setting up a React project with Vite for high performance.
2. Using **custom hooks** to improve code reusability and readability.
3. Managing server-state effectively with **TanStack React Query**, including real-time debugging via DevTools.
4. Simulating API interactions using **JSON Server** for testing and prototyping.

---

## Setup and Usage

1. **Clone the Repository**:
   ```bash
   git clone <repository_url>
   cd <repository_folder>
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Run the JSON Server**:  
   Start the fake REST API server:  
   ```bash
   npm run server
   ```

4. **Run the Development Server**:
   ```bash
   npm run dev
   ```

5. **Access TanStack Query DevTools**:  
   - When running the app locally, TanStack Query DevTools can be toggled for insights on the state of queries and mutations.
