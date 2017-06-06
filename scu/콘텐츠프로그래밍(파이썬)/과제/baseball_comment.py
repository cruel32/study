import random #random 함수를 임포트합니다. random 관련 함수를 사용할 수 있게 해줍니다.
 
def makeAnswer(): #makeAnswer 함수를 정의합니다.
    answer = [0] * 3 #answer라는 이름의 3개의 자료를 담는 리스트를생성합니다.
    while True: #다음에 오는 코드를 영원히 반복합니다.
        answer[0] = random.randrange(0, 10) #answer에 0번째 자리에, 0부터 10의 숫자중 랜덤한 숫자를 출력해 담아줍니다.
        answer[1] = random.randrange(0, 10) #1번째 자리에 위와 똑같이 해줍니다.
        answer[2] = random.randrange(0, 10) #2번째 자리에 위와 똑같이 해줍니다.
 
        if answer[0] != answer[1] and \ #answer의 0번째 자료에 담긴 숫자와 1번째 자료에 담긴 숫자가 같지 않고
                        answer[0] != answer[2] and \ #answer의 0번째 자료에 담긴 숫자와 2번째 자료에 담긴 숫자가 같지 않고
                        answer[1] != answer[2]: #answer의 01번째 자료에 담긴 숫자와 2번째 자료에 담긴 숫자가 같지 않으면
            break #while 반복문에서 빠져나옵니다.
 
    return answer #makeAnswer 함수는 이렇게 종료되고 이 함수를 호출할때마다 answer값 전체를 호출한 곳으로 리턴해줍니다. 
 
 
def inputAnswer(): #inputAnswer 함수를 정의합니다.
    print('input answer : ', end='') #print 함수안의 문자와 변수를 출력합니다.
    a1 = int(input()) #a1 값을 사용자로부터 숫자를 입력받아 넣어줍니다.
    a2 = int(input()) #a2 값도 마찬가집니다.
    a3 = int(input()) #a3 값도 마찬가집니다.
 
    return [a1,a2,a3] #inputAnswer 함수는 이렇게 종료되고 이 함수를 호출할때마다 a1,a2,a3의 값을 리스트에 담아 호출한 곳으로 리턴해줍니다.
 
def calcAnswer(answers, numbers): #calcAnswer는 answers와 numbers라는 인자를 전달 받아
    strike = (answers[0] == numbers[0]) + \ #strike변수에,  answers의 0번째 값과 numbers의 0번째 값을 비교하고,
             (answers[1] == numbers[1]) + \ #answers의 1번째 값과 numbers의 1번째 값을 비교하고,
             (answers[2] == numbers[2]) #answers의 2번째 값과 numbers의 2번째 값을 비교한뒤 그 결과를 더해서 저장합니다. (비교식이 맞으면1, 틀리면 0) 
    ball = (answers[0] == numbers[1]) + (answers[0] == numbers[2]) + \ 
           (answers[1] == numbers[0]) + (answers[1] == numbers[2]) + \
           (answers[2] == numbers[0]) + (answers[2] == numbers[1])
           #ball도 마찬가지로 answers와 numbers를 비교 후 ()안의 비교식들이 맞으면 1, 틀리면 0 으로 계산해서 더해줍니다.
 
    return strike, ball #calcAnswer 함수는 strike, ball을 리턴합니다.
 
answer = makeAnswer() #전역 변수 answer에 makeAnswer함수를 호출해 리턴받은 값을 넣어줍니다.
print('answer : ', answer) #answer텍스트와 전역 변수 answer를 출력합니다.
 
while True: #다음에 오는 코드를 영원히 반복합니다.
    numbers = inputAnswer() #numbers에 inputAnswer를 함수를 호출해 리턴받은 값을 넣어줍니다.
 
    strike, ball = calcAnswer(answer, numbers) #calcAnswer를 answer,numbers인자를 넘기며 호출하고, 리턴받은 값을 strike, ball 변수에 담아줍니다.
    print('strike : ', strike, 'ball : ', ball) #그것들을 호출합니다.
 
    if strike == 3: #strike값이 3이 되면
        break #while 반복문에서 빠져나옵니다.
 
print('=' * 20, 'end of game', '=' * 20) #종료 메세지를 출력합니다.
