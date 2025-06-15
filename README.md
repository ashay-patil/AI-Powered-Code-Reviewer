# 🤖 AI Powered Code Reviewer

An intelligent code reviewer web app powered by **Google Gemini AI**, capable of analyzing and reviewing code snippets, identifying issues, and suggesting improvements. Built using **Node.js**, **Express**, and **Vite + React**.

---

## 🚀 Features

* ✅ Accepts code snippets from frontend
* 🧠 Uses **Gemini AI API** for smart code reviews
* 💡 Provides suggestions and improvements
* 🔗 Full-stack integration (Frontend + Backend)

---

## 🛠️ Tech Stack

### 🔹 Frontend

* React
* CSS 
* Axios (for API calls)

### 🔹 Backend

* Node.js
* Express.js
* Google Generative AI SDK (`@google/generative-ai`)

---

## 🔑 Environment Variables

Create a `.env` file inside your `Backend/` directory:

```
GOOGLE_GEMINI_KEY=your_gemini_api_key_here
```

> 💡 You can get your Gemini API key from: [https://aistudio.google.com/app/apikey](https://aistudio.google.com/app/apikey)

---

## 📦 Installation

### 1. Clone the Repository

```bash
git clone https://github.com/ashay-patil/AI-Powered-Code-Reviewer.git
cd AI-Powered-Code-Reviewer
```

---

### 2. Setup Backend

```bash
cd Backend
npm install
npm start
```

---

### 3. Setup Frontend

```bash
cd ../Frontend
npm install
npm run dev
```

---

## 🧪 Usage

* Open your browser at `http://localhost:5173`
* Paste your code snippet in the input area
* Click **"Review"**
* The backend sends the code to Gemini and returns suggestions
* View the AI-generated response instantly!

---

## 📌 API Endpoint

| Method | Endpoint         | Description                          |
| ------ | ---------------- | ------------------------------------ |
| POST   | `/ai/get-review` | Send code snippet and receive review |

Request body format:

```json
{
  "code": "Your code here..."
}
```

---

## 🧠 Powered By

* [Google Gemini API](https://aistudio.google.com/app/apikey)
* [@google/generative-ai](https://www.npmjs.com/package/@google/generative-ai)


---

