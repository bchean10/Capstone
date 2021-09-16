from . import bp as api
from flask import make_response, g
from app.blueprints.auth.models import User
from app.blueprints.auth.auth import basic_auth

@api.get('/token')
@basic_auth.login_required()
def get_token():
    user = g.current_user
    token = user.get_token()
    return make_response({"token":token},200)