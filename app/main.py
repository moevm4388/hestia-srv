from fastapi import FastAPI
from fastapi.staticfiles import StaticFiles

from app import api


app = FastAPI(title="Hestia", summary="Hestia Web Server")

app.include_router(api.router, prefix="/api")
app.mount("/", StaticFiles(directory="static", html=True))
