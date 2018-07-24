import urllib.request, urllib.parse, urllib.error
import json

serviceUrl = 'http://py4e-data.dr-chuck.net/geojson?'

while True:
    address = input('Enter the address :')
    if len(address) < 1:
        break

    url = serviceUrl + urllib.parse.urlencode({'address': address})

    print('Retrieving', url)
    uh = urllib.request.urlopen(url)
    data = uh.read().decode()
    
    try:
        js = json.loads(data)
    except:
        js = None

    if not js or 'status' not in js or js['status'] != 'OK':
        print('===Failure to retrieve===')
        print(data)
        continue

    placeid = js['results'][0]['place_id']
    print('Plcae ID -', placeid)
    
