class Animal:
    x=0

    def __init__(self):
        print("I am constructed")

    def party(self):
        self.x = self.x + 1
        print("So far", self.x)

    def __del__(self):
        print("I am inside destructed", self.x)

class Mammals (Animal):
    points = 0

    def kindness(self):
        self.points = self.points + 1
        print("Mammals Kindness Level", self.points)

# dog = Animal()
# dog.party()
# dog.party()
# cat = Animal()
# cat.party()
human = Mammals()