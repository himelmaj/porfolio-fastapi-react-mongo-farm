from pymongo import MongoClient
from bson.objectid import ObjectId
from decouple import config


connection = MongoClient(config('MONGO_URL'))

database = connection['mydb']


