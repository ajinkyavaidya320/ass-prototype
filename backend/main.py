from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "ASS Prototype Backend Running"}

@app.get("/session")
def session():
    return {
        "scaffold": "Break the problem into smaller collaborative steps.",
        "participation": {
            "studentA": 60,
            "studentB": 40
        },
        "fading_state": "Fading",
        "zpd_gap": 72,
        "system_log": [
            "Dialogue imbalance detected",
            "Scaffold generated",
            "Fading state activated"
        ]
    }