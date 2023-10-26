from fastapi import FastAPI, UploadFile, File
import gridfs
from fastapi.responses import StreamingResponse
import io
from server.database import database
from bson.objectid import ObjectId
fs = gridfs.GridFS(database)


app = FastAPI()

@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/get/{file_id}")
async def get_image(file_id: str):
    try:
        file_object = fs.get(ObjectId(file_id))
    except Exception as e:
        return {"error": "Archivo no encontrado"}

    return StreamingResponse(io.BytesIO(file_object.read()), media_type=file_object.content_type)

    
@app.post("/upload/")
async def upload_image(file: UploadFile = File(...)):
    contents = await file.read()
    file_id = fs.put(contents, filename=file.filename, content_type=file.content_type)
    return {"file_id": str(file_id)}
