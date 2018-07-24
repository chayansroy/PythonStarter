import urllib.request, urllib.parse, urllib.error
import json

serviceUrl = 'http://maps.googleapis.com/maps/api/geocode/json?'

while  True:
    address = input('Enter the address :')
    if len(address)<1 :
        break

    url = serviceUrl + urllib.parse.urlencode({'address':address})
    
    print ('Retrieving', url)
    uh = urllib.request.urlopen(url)
    data = uh.read().decode()
    header = dict(uh.getheaders())

    print('Retrieved', len(data), 'characters')
    print('header', header)

    try:
        js = json.loads(data)
    except:
        js = None

    if not js or 'status' not in js or js['status']!='OK':
        print('===Failure to retrieve===')
        print(data)
        continue
    
    lat = js['results'][0]['geometry']['location']['lat']
    lon = js['results'][0]['geometry']['location']['lng']
    print('latitude', lat, ', longitude', lon)
    location = js['results'][0]['formatted_address']
    print('location', location)
    # print(js)


    
    
