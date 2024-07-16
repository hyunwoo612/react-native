from flask import Flask
from model import db
from flask_cors import CORS
from route import user_route

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "*"}})

app.config["SQLALCHEMY_DATABASE_URI"] = "mysql+pymysql://Ai_project:0426@172.28.3.184:3306/ai_project"
app.config["SQLALCHEMY_TRACK_MODIFICATIONS"] = False

db.init_app(app)

app.register_blueprint(user_route)

if __name__ == '__main__':
    app.run(debug=True)
