from pydantic import BaseModel, Field
from fastapi import UploadFile, File

class Projects(BaseModel):
    title_project: str = Field(...)
    decription: list[str] = Field(...)
    imgs: list[UploadFile] = File(...)
    