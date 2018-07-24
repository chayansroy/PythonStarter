import urllib.request, urllib.parse, urllib.error
from bs4 import BeautifulSoup
import ssl
import re

#Ignore SSL errors
ctx = ssl.create_default_context()
ctx.check_hostname = False
ctx.verify_mode = ssl.CERT_NONE

url = input('Enter the URL : ')
html = urllib.request.urlopen(url, context=ctx).read()
soup = BeautifulSoup(html,'html.parser')

#Retrieve all the anchor tags
tags = soup('a')
for tag in tags:
    title = tag.get('title', None)
    if(title!=None and title.find("Chayan")>=0):
        print(tag.get('title', None))
        node = re.findall('\s+',tag)
        print(node[0])

            
# fhand = urllib.request.urlopen('http://data.pr4e.org/romeo.txt')
# for line in fhand:
#     print(line.decode().strip())
