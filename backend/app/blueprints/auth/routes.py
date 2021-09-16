from flask import render_template, request, redirect, url_for, flash, make_response
from .models import User
from app.blueprints.auth.auth import basic_auth, token_auth
from flask_login import login_user, logout_user, current_user, login_required
from .import bp as auth


@auth.post('/register')
def register():
    user_dict = request.get_json()
    print(user_dict)
    new_user_object = User()
    new_user_object.from_dict(user_dict)
    print(new_user_object)
    return make_response(f'User has been registered', 201)

@auth.put('/edit_profile')
@token_auth.login_required()
def edit_profile():
    user_dict = request.get_json()
    print(user_dict)
    if not user_dict.get('id'):
        return make_response("Invalid Payload", 400)
    edited = User.query.get(user_dict('id'))
    edited.from_dict(user_dict)
    return make_response(f"User {user_dict.id} has been edited", 200)