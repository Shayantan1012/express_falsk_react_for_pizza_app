from VoiceAssistance.utils import PromptManager
from VoiceAssistance.llm_engine import llm_output


if __name__=='__main__':
    # Initialize the PromptManager
    # Define the prompt
    prompt = "I want to fuck you."

    pm = PromptManager(prompt)

    system_prompt=pm.intentPrompt()
    
    # Define the model to use
    
    response = llm_output(system_prompt=system_prompt)
    
    print(response)

