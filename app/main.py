from fastapi import FastAPI

from app import api


app = FastAPI(title="Hestia", summary="Hestia Web Server")

app.include_router(api.router, prefix="/api")
