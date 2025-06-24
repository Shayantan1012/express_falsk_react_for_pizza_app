API_KEY='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'
MODEL_NAME='compound-beta'
TEMPARATURE=0.6
MAX_TOKENS=4096
# "deepseek-r1-distill-llama-70b"



from flask import Blueprint

voiceBlueprint = Blueprint('voiceBlueprint', __name__)

from VoiceAssistance import routes

