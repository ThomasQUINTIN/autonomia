import requests

url = "https://ntfy.sh/mytopic"
message = "Backup successful 😀"

response = requests.post(url, data=message.encode('utf-8'))
print(response.status_code)
