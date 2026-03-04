Local AI Chatbot API (FastAPI + Ollama)

Project Status: 🚧 Active Development 🚧

This is an ongoing project to build a complete, locally hosted AI chat application. Currently, this repository contains a fast, asynchronous REST API built with Python and FastAPI that serves a local Large Language Model (LLM) using Ollama. It is configured to run Qwen 2.5 (7B) completely offline on your local machine.

I am currently building this out as a full-stack project, and a dedicated frontend user interface is planned for the near future!

🗺️ Roadmap / Future Plans

[x] Set up the asynchronous FastAPI backend.

[x] Integrate local Ollama model (Qwen 2.5).

[ ] Build a web-based Frontend UI (React / HTML+JS) to interact with the chatbot.

[ ] Implement response streaming (so the AI types out the answer in real-time).

[ ] Add conversation history/memory.

🚀 Features

100% Local & Private: No API keys required, no data leaves your machine.

Asynchronous: Uses Ollama's AsyncClient to handle multiple chat requests at the same time without blocking the server.

CORS Enabled: Ready to be connected to any frontend application.

Built-in Docs: Automatically generates interactive API documentation via Swagger UI.

📋 Prerequisites

Before you begin, you need to install a few things on your machine:

Python 3.8+: Download Python

Ollama: This is the engine that runs the local AI models. Download Ollama here.

📥 Download the AI Model

Once Ollama is installed, open your terminal/command prompt and download the Qwen 2.5 model by running:

ollama run qwen2.5:7b


(Note: This is a ~4.7GB download. Once it finishes and you see the >>> prompt, you can type /bye to exit. The model is now saved on your PC).

🛠️ Installation & Setup

Clone the repository (or download the files):

git clone [https://github.com/anik-tech1/ChatBot](https://github.com/anik-tech1/ChatBot)
cd your-repo-name


Create a Virtual Environment (Recommended):

# Windows
python -m venv venv
venv\Scripts\activate

# macOS/Linux
python3 -m venv venv
source venv/bin/activate


Install the required Python packages:

pip install fastapi uvicorn pydantic ollama


🏃‍♂️ Running the Server

Make sure the Ollama app is running in the background on your computer. Then, start your FastAPI server:

uvicorn main:app --reload


The --reload flag means the server will automatically restart if you make changes to the code.

Your API is now running at: http://127.0.0.1:8000

🔌 API Endpoints & Usage

1. Interactive API Docs (Swagger UI)

The easiest way to test your API is through the browser. FastAPI generates a beautiful interface automatically.

Go to: https://www.google.com/search?q=http://127.0.0.1:8000/docs

Click "Try it out" on the /chat endpoint to test the AI!

2. Health Check (GET /)

Check if the server is running.

URL: http://127.0.0.1:8000/

Response: {"message": "Qwen 2.5 API is working"}

3. Chat Endpoint (POST /chat)

Send a message to the AI.

Request Body (JSON):

{
  "message": "What is the capital of France?"
}


Testing with cURL:

🖥️ Windows (Command Prompt):
(Note the escaped double quotes \" required for Windows CMD)

curl -X POST "[http://127.0.0.1:8000/chat](http://127.0.0.1:8000/chat)" -H "Content-Type: application/json" -d "{\"message\":\"Hello!\"}"


🍎 macOS / 🐧 Linux (or PowerShell):

curl -X POST "[http://127.0.0.1:8000/chat](http://127.0.0.1:8000/chat)" -H "Content-Type: application/json" -d '{"message":"Hello!"}'


🐛 Troubleshooting

Error: Connection refused or ClientConnectorError

Fix: The Ollama engine isn't running. Make sure you have opened the Ollama application on your computer before starting the Python server.

Error: model 'qwen2.5:7b' not found

Fix: You forgot to download the model. Run ollama pull qwen2.5:7b in your terminal.

Error: JSON decode error: Expecting value (Windows)

Fix: If you are using Windows cmd.exe to send cURL requests, you cannot use single quotes ' around the JSON body. Use double quotes and escape the inner ones like this: "{ \"message\": \"hi\" }"

📄 License
