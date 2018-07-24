import json

data = '''[
    {
        "name":"Chayan",
        "phone": {
            "type":"international",
            "number":"+1 860 754 8048"
        },
        "email":{
            "type":"hidden",
            "address":"chayan.saharoy@gmail.com"
        }
    },
    {
        "name":"Sanchita",
        "phone": {
            "type":"international",
            "number":"+1 860 713 8408"
        },
        "email":{
            "type":"",
            "address":"tithee28@gmail.com"
        }
    }
]'''

students = json.loads(data)
print("students - ", len(students))

for student in students:
    print("Name", student["name"])
    print("Phone", student["phone"]["number"])
    print("Email", student["email"]["address"])
