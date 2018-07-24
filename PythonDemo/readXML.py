import xml.etree.ElementTree as ET

data = '''<persons>
        <person>
            <name>Chayan</name>
            <phone type="intl">
            +1 8607548048
            </phone>
            <email hide="yes"/>
        </person>
        <person>
            <name>Sanchita</name>
            <phone type="local">
            +1 8607138408
            </phone>
            <email hide="no">tithee28@gmail.com</email>
        </person>
    </persons>'''

tree = ET.fromstring(data)
personList = tree.findall('person')
print('persons count', len(personList))

for person in personList:
    print("Name", person.find('name').text)
    print("Phone", person.find('phone').text.strip())
    print("Email", person.find('email').text)
