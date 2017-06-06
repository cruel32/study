from mcpi.minecraft import Minecraft #mcpi.minecraft api에서 Minecraft를 임포트합니다. 관련 함수를 사용할 수 있게됩니다.
import math #math 관련 함수를 사용할 수 있게 임포트합니다.
import time #time 관련 함수를 사용할 수 있게 임포트합니다.
import random #time 관련 함수를 사용할 수 있게 임포트합니다.
mc = Minecraft.create() #Minecraft의 create 함수를 호출하고 결과를 mc 변수에 담습니다.

destX = random.randint(-127, 127) #-127에서 127사이의 정수를 랜덤으로 뽑아  destX 변수에 담습니다.
destZ = random.randint(-127, 127) #-127에서 127사이의 정수를 랜덤으로 뽑아  destZ 변수에 담습니다.
destY = mc.getHeight(destX, destZ) #destX와 destZ를 인자로 mc.getHeight 함수를 호출합니다. 그 결과값을 destY에 담습니다.

print(destX, destY, destZ) #위의 변수들을 출력합니다.

block = 57 #block 변수에 57숫자를 저장합니다.
mc.setBlock(destX, destY, destZ, block) #mc.setBlock을 destX, destY, destZ, block 변수들을 인자로 넘기고 호출합니다.
mc.postToChat("Block set") #mc.postToChat을 "Block set" 문자열을 인자로 넘기고 호출합니다.

while True: #다음 코드를 영원히 반복합니다.
    pos = mc.player.getPos() #pos변수에 mc.player.getPos() 리턴값을 저장합니다.
    distance = math.sqrt((pos.x - destX) ** 2 + (pos.z - destZ) ** 2)
    #pos.x에서 destX만큼을 빼고 2을 재곱한뒤 pos.z에서 destZ를 빼고 2제곱한 만큼의 값을 더한뒤 그의 제곱근을 구해 distance변수에 담습니다.

    if distance == 0: #distance가 0이 되면 반복문에서 빠져나옵니다.
        break

    if distance > 100: #distance가 100이상이 되면 mc.postToChat를 호출합니다. (인자값은 "Freezing")
        mc.postToChat("Freezing")
    elif distance > 50: #distance가 50이상이 되면 mc.postToChat를 호출합니다. (인자값은 "Cold")
        mc.postToChat("Cold")
    elif distance > 25: #distance가 25이상이 되면 mc.postToChat를 호출합니다. (인자값은 "Warm")
        mc.postToChat("Warm")
    elif distance > 12: #distance가 12이상이 되면 mc.postToChat를 호출합니다. (인자값은 "Boiling")
        mc.postToChat("Boiling")
    elif distance > 6: #distance가 6이상이 되면 mc.postToChat를 호출합니다. (인자값은 "On fire!")
        mc.postToChat("On fire!")
    elif distance == 0: #distance가 0 이 되면 mc.postToChat를 호출합니다. (인자값은 "Found it")
        mc.postToChat("Found it")
