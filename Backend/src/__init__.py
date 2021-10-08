from flask import Flask
from flask_cors import CORS
from src.config import secret_key, cors_src

app = Flask(__name__)
app.secret_key = secret_key
cors =  CORS(app, resources = cors_src)

from src import Endpoints