import click
from flask.cli import with_appcontext
from app.extentions import db
from app.models import User

def init_db():
    db.drop_all()
    db.create_all()
    db.session.commit()

    # dummy_user = User("user", "testmail@mail.com", "password123")
    # dummy_user.create(commit=True)

