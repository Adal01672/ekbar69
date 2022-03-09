from httpcore import request


import requests
import json

from requests_toolbelt import user_agent
user_agent={
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.149 Safari/537.36'
}
r=requests.get('https://www.instagram.com/_ekbar_69_pimpsimpin_/',headers=user_agent).text
print(r)