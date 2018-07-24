import urllib.request, urllib.parse, urllib.error
import json

url = input('Enter URL - ')
html = urllib.request.urlopen(url)
data = json.loads(html.read().decode())
sum = 0

for comment in data['comments']:
    sum = sum + comment['count']

print('sum of comments', sum)