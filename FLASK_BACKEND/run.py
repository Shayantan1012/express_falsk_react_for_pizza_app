from flask import Flask
from app import create_app
from model import model_blueprint
from VoiceAssistance import voiceBlueprint
from flask_cors import CORS

app = create_app()

app.register_blueprint(model_blueprint, url_prefix='/model')
app.register_blueprint(voiceBlueprint, url_prefix='/voiceAssistance')



if __name__ == '__main__':
    CORS(app, origins=["http://localhost:5173"], supports_credentials=True)
    app.run(host='localhost', port=5030, debug=True)