from dotenv import load_dotenv
import os
#lets load env vars to work with them
load_dotenv()

#lets validate each env var to work
if os.getenv('PORT'):
    port = os.getenv('PORT')
else:
    print('Environment var not found: check for PORT')

if os.getenv('DEBUG'):
    debug = os.getenv('DEBUG')
else:
    print('Environment var not found: check for DEBUG')

if os.getenv('HOST'):
    host = os.getenv('HOST')
    cors_src = {'/api/*' : {'origins': '*'}}
else:
    print('Environment var not found: check for HOST')

if os.getenv('SECRET_KEY'):
    secret_key = os.getenv('SECRET_KEY')
else:
    print('Environment var not found: check for SECRET_KEY')
