# ☕ AI Order Recommendation Service

Angular frontend for the **AI Order Recommendation System** — powered by OpenAI, Kafka, MongoDB, and Spring Boot.

---

## 🚀 Features

- 🧠 Input free-form sentence, receive smart food & drink recommendations
- 💬 Uses OpenAI API (gpt-3.5-turbo) to analyze user inputs
- 🔒 Session-based data isolation using client-generated UUIDs
- 📦 Sends AI response into Kafka topic `recommendations`
- 🔄 Kafka UI for visualization
- 🧾 MongoDB: stores orders with TTL (auto-delete after 24h)
- 📊 Prometheus + Grafana observability
- 🐳 Docker Compose for Kafka stack (Kafka, Zookeeper, Kafka UI)

---

## 🌐 Architecture

- Built with **Angular 16+**
- Stateless, no-login system
- Makes API calls to Spring Boot backend (`/api/...`)

---

## 🧱 Tech Stack

| Layer            | Tech                             |
|------------------|----------------------------------|
| Backend          | Java 17, Spring Boot 3           |
| Messaging        | Apache Kafka, Spring Kafka       |
| AI Integration   | OpenAI GPT API                   |
| Database         | MongoDB, Spring Data MongoDB     |
| Monitoring       | Prometheus, Grafana              |
| DevOps           | Docker Compose                   |
| Frontend         | Angular, Typescript, Tailwind    |

---

## 📚 Learning Purpose
This project is designed for learning and building skills in:

- Spring Boot microservices & REST APIs

- Kafka event-driven architecture

- Cloud-native deployments

- OpenAI integration into real services

- Scalable observability (Prometheus, Grafana)

---

## 🔧 How to Run
### Start Dev Server
```bash
npm install
npm run start
```


