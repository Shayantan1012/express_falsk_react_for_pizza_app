from VoiceAssistance.utils import PromptManager
from VoiceAssistance.llm_engine import llm_output
from VoiceAssistance import voiceBlueprint
from VoiceAssistance.service import IntentService
import json

from flask import request, jsonify


@voiceBlueprint.route('/', methods=['POST'])
def voiceAssistanceInput():
    try:
        input_data = request.form['text']
        if( not input_data):
            return jsonify({'error': 'No input data provided'}), 400
        if len(input_data) > 1000:
            return jsonify({'error': 'Input data exceeds maximum length of 1000 characters'}), 400
        # Create a PromptManager instance
        
        prompt_manager = PromptManager(input_data)
        
        system_prompt = prompt_manager.intentPrompt()
        
        response = llm_output(system_prompt=system_prompt)
        
        if not response:
            return jsonify({'error': 'No response from the model'}), 500
        # Return the response as JSON
        
        try:
            response = json.loads(response)
        except json.JSONDecodeError as e:
            return jsonify({'error': f'LLM response is not valid JSON: {str(e)}', 'raw_response': response}), 500
        
        if not isinstance(response, dict):
            return jsonify({'error': 'Invalid response format from the model'}), 500
        
        
        if(response['intent'] == 'add_cart'):
            
            order_intent = IntentService(response)
        
            response_data = order_intent.order_service()
            
            
            if not response_data:
                return jsonify({'error': 'Failed to process order service'}), 500
            
            return jsonify({
                'message': 'Successfully processed order service.',
                'response': response_data
            }), 200
            
        if(response['intent'] == 'log_in'):
            
            login_intent = IntentService(response)
        
            response_data = login_intent.login_service()
            
            
            if not response_data:
                return jsonify({'error': 'Failed to process order service'}), 500
            
            return jsonify({
                'message': 'Successfully processed order service.',
                'response': response_data,
                'intent': 'log_in'
            }), 200
            
            
        if(response['intent'] == 'new_user'):
            
            newuser_intent = IntentService(response)
        
            response_data = newuser_intent.new_user_service()
            
            
            if not response_data:
                return jsonify({'error': 'Failed to process order service'}), 500
            
            return jsonify({
                'message': 'Successfully processed order service.',
                'response': response_data,
                'intent': 'new_user'
            }), 200
            
                           
        if(response['intent'] == 'send_menu'):
            
            sendmenu_intent = IntentService(response)
        
            response_data = sendmenu_intent.send_menu_service()
            
            
            if not response_data:
                return jsonify({'error': 'Failed to process order service'}), 500
            
            return jsonify({
                'message': 'Successfully processed order service.',
                'response': response_data,
                'intent': 'send_menu'
            }), 200
            
            
        if(response['intent'] == 'home_page'):
            
            homepage_intent = IntentService(response)
        
            response_data = homepage_intent.home_page_service()
            
            
            if not response_data:
                return jsonify({'error': 'Failed to process order service'}), 500
            
            return jsonify({
                'message': 'Successfully processed order service.',
                'response': response_data,
                'intent': 'send_menu'
            }), 200
            
            
        if(response['intent'] == 'payment'):
            
            payment_intent = IntentService(response)
        
            response_data = payment_intent.home_page_service()
            
            
            if not response_data:
                return jsonify({'error': 'Failed to process order service'}), 500
            
            return jsonify({
                'message': 'Successfully processed order service.',
                'response': response_data,
                'intent': 'send_menu'
            }), 200
            
            

            
        
        return jsonify({
            'message': 'Successfully got the response.',
            'response': response
        }), 200        
        
        
        
        
    
    except Exception as e:
        return jsonify({'error': f'An unexpected error occurred---: {str(e)}'}), 500


