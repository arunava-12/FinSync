# 🏦 FinSync - Personal Finance Tracker  

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)  
[![Issues](https://img.shields.io/github/issues/arunava-12/FinSync.svg)](https://github.com/arunava-12/FinSync/issues)  
[![Stars](https://img.shields.io/github/stars/arunava-12/FinSync.svg)](https://github.com/arunava-12/FinSync/stargazers)  

**FinSync** is a modern **personal finance tracker** that helps users manage their **income, expenses, and budgets** effectively. With intuitive visualizations and real-time tracking, it empowers users to take control of their financial well-being.  

---

## ✨ Features  

✅ **Expense & Income Tracking** – Log and categorize financial transactions.  
📊 **Analytics & Charts** – Get insights into spending trends with visual reports.  
📅 **Budget Planning** – Set monthly budgets and track progress.  
🔔 **Notifications & Reminders** – Stay updated on bill payments and spending limits.  
🔒 **Secure & Private** – Data encryption and authentication for security.  
📂 **Export Data** – Download reports in CSV or PDF format.  

---

## 🚀 Tech Stack  

| Technology  | Usage  |
|------------|--------|
| **Frontend**  | Next.js, Tailwind CSS  |
| **Backend**  | Node.js, Express.js  |
| **Database**  | MongoDB / PostgreSQL  |
| **Authentication**  | Firebase/Auth0  |
| **Charts & Graphs**  | Chart.js / Recharts  |
| **Deployment**  | Vercel / Netlify (Frontend), Render / Heroku (Backend) |

---

## 📦 Installation  

### 🔹 Prerequisites  

Ensure you have the following installed:  
- [Node.js](https://nodejs.org/)  
- [MongoDB](https://www.mongodb.com/) or PostgreSQL  

### 🔹 Setup  

Clone the repository and install dependencies:  

```bash
git clone https://github.com/yourusername/FinSync.git
cd FinSync
npm install
```

### 🔹 Environment Variables  

Create a `.env` file in the root directory and configure:  

```
# Clerk Authentication Keys
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_public_key
CLERK_SECRET_KEY=your_secret_key

NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Supabase Database Connection (Connection Pooling)
DATABASE_URL=your_database_url

# Direct Database Connection (Used for migrations)
DIRECT_URL=your_direct_database_url

# API Keys
ARCJET_KEY=your_arcjet_key
RESEND_API_KEY=your_resend_api_key
GEMINI_API_KEY=your_gemini_api_key
```

### 🔹 Running the Application  

Start the development server:  

```bash
npm run dev
```

For production:  

```bash
npm run build
npm start
```

---

## 🎯 Usage  

1️⃣ **Sign up / Log in** securely using OAuth or email authentication.  
2️⃣ **Add transactions** and categorize expenses.  
3️⃣ **Set financial goals** and track monthly budgets.  
4️⃣ **Analyze spending** with interactive graphs.  
5️⃣ **Export reports** for further analysis.  

---

## 📌 Roadmap  

- [ ] Add AI-powered expense categorization  
- [ ] Implement recurring transactions  
- [ ] Introduce multi-currency support  
- [ ] Build a mobile app version  

Check the **[Issues](https://github.com/yourusername/FinSync/issues)** section to contribute to feature development.  

---

## 🛠️ Contributing  

💡 Contributions, issues, and feature requests are welcome!  

To contribute:  

1. Fork the repository  
2. Create a new branch (`git checkout -b feature-name`)  
3. Commit changes (`git commit -m "Added new feature"`)  
4. Push to the branch (`git push origin feature-name`)  
5. Open a **Pull Request**  

---

## 📜 License  

This project is licensed under the **MIT License** – see the [LICENSE](LICENSE) file for details.  

---
