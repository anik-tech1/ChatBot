from fastapi import FastAPI , HTTPException
from fastapi.middleware.cors import CORSMiddleware
from httpcore import request
from pydantic import BaseModel
import ollama
from pyexpat.errors import messages

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)
class ChatRequest(BaseModel):
    message: str

@app.post("/chat")
async def chat(request: ChatRequest):
    try:
        response = ollama.chat(model="qwen2.5:7b" , messages = [{"role": "user","content": request.message}])
        return {"response": response["message"]["content"]}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
@app.get("/")
def home():
    return {"message": "Qwen 2.5 API is working"}
