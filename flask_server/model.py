from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class MyUser(db.Model):
    __tablename__ = 'login'

    id = db.Column(db.String(15, 'utf8mb4_unicode_ci'), nullable=False)
    password = db.Column(db.String(15, 'utf8mb4_unicode_ci'), nullable=False)
    user = db.Column(db.String(5, 'utf8mb4_unicode_ci'), nullable=False)
    phone_num = db.Column(db.String(13, 'utf8mb4_unicode_ci'), primary_key=True, nullable=False)

    def __init__(self, id, password, user, phone_num):
        self.id = id
        self.password = password
        self.user = user
        self.phone_num = phone_num
