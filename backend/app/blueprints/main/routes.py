from .import bp as main

@main.route('/')
def index():
    return "Ayooo!"