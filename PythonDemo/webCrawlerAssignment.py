import urllib.request, urllib,parser, urllib.error
from bs4 import BeautifulSoup

url = 'http://py4e-data.dr-chuck.net/known_by_Clement.html'
outerCount = 0
lastName = ""

print(url)

while outerCount<7:
    html = urllib.request.urlopen(url)
    soap = BeautifulSoup(html,'html.parser')
    tags = soap("a")
    innerCount = 1
    for tag in tags:
        if innerCount == 18:
            url = tag.get('href', None)
            print(url)
            if outerCount == 6:
                print(tag.contents[0])

        innerCount = innerCount + 1
    outerCount = outerCount + 1



