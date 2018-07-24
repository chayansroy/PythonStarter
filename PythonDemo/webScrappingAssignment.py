import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup

url = 'http://py4e-data.dr-chuck.net/comments_94272.html'
html = urllib.request.urlopen(url)
soup = BeautifulSoup(html, 'html.parser')
sum = 0

spans = soup('span')
for span in spans:
    comments = span.contents[0]
    sum = sum + int(comments)
print(sum)