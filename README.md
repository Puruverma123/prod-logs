# ✨ prod-logs

**A colorful and lightweight terminal logger for Node.js applications.**

`prod-logs` is a developer-friendly logging utility that helps make terminal output cleaner and easier to read with styled log messages.

## 🚀 Features

- 🎨 Colorful terminal output powered by [Chalk](https://www.npmjs.com/package/chalk)
- ✅ Success, Error, Info, and Warning log functions
- 🧹 Simple and readable logging API
- 📦 Easy installation through npm
- 💻 Designed for Node.js projects
- 📘 TypeScript declaration support

## 📦 Installation

Install `prod-logs` from the npm registry:

```bash
npm install prod-logs
```

## ⚡ Quick Start

Import the logging functions into your project:

```ts
import {
  successLog,
  errorLog,
  infoLog,
  warningLog
} from "prod-logs";

successLog("User created successfully");
errorLog("Failed to connect to the database");
infoLog("Server is running on port 3000");
warningLog("Low disk space detected");
```

## 🧪 Example Output

Example messages:

```text
[SUCCESS] User created successfully
[ERROR  ] Failed to connect to the database
[INFO   ] Server is running on port 3000
[WARNING] Low disk space detected
```

The actual colors, timestamps, and formatting depend on the implementation of each logging function.

## 🧰 API Reference

### `successLog(message?: string)`

Use this function to log a success message.

```ts
successLog("Payment completed successfully");
```

### `errorLog(message?: string)`

Use this function to log an error message.

```ts
errorLog("Database connection failed");
```

### `infoLog(message?: string)`

Use this function to log an informational message.

```ts
infoLog("Application started successfully");
```

### `warningLog(message?: string)`

Use this function to log a warning message.

```ts
warningLog("API rate limit is almost reached");
```

Each function accepts an optional string message. Default-message behavior depends on the package implementation.

## 🛠️ Use Cases

`prod-logs` can be used in:

- Node.js applications
- Backend services and APIs
- Express.js applications
- Command-line tools
- Development and debugging workflows

## 📋 Requirements

- Node.js
- npm

The package uses Chalk for terminal styling.

## 👨‍💻 Author

**Puru Verma**

- GitHub: [@Puruverma123](https://github.com/Puruverma123)
- Email: [puruverma1234@gmail.com](mailto:puruverma1234@gmail.com)

## 🐛 Issues and Feedback

Found a bug or have a suggestion?

[Open an issue on GitHub](https://github.com/Puruverma123/prod-logs/issues).

## 🤝 Contributing

Contributions and suggestions are welcome!

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test your changes.
5. Submit a pull request.

## 📄 License

This project is licensed under the [MIT License](https://opensource.org/licenses/MIT).

---

If you find `prod-logs` useful, consider giving the [GitHub repository](https://github.com/Puruverma123/prod-logs) a ⭐.
