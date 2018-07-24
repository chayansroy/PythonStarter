#https://www.py4e.com/tools/python-data/?PHPSESSID=aea1eac4de7fa05edc43d015a3f99855
import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET

# http://py4e-data.dr-chuck.net/comments_94274.xml
url = input('URL -')
html = urllib.request.urlopen(url)
data = html.read()
commentList = ET.fromstring(data).findall('comments/comment')
sum = 0

print('Comment count - ', len(commentList))

for comment in commentList:
    commentCount = comment.find('count').text
    sum = sum + int(commentCount)  

print('Sum of Comments - ', sum)
import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET

import urllib.request, urllib.parse, urllib.error
import xml.etree.ElementTree as ET

url = input('URL -')
html = urllib.request.urlopen(url)
data = html.read()
commentList = ET.fromstring(data).findall('comments/comment')
sum = 0

print('Comment count - ', len(commentList))

for comment in commentList:
    commentCount = comment.find('count').text
    sum = sum + int(commentCount)  

print('Sum of Comments - ', sum)
url = input('URL -')
html = urllib.request.urlopen(url)
data = html.read()
commentList = ET.fromstring(data).findall('comments/comment')
sum = 0

print('Comment count - ', len(commentList))

for comment in commentList:
    commentCount = comment.find('count').text
    sum = sum + int(commentCount)  

print('Sum of Comments - ', sum)
