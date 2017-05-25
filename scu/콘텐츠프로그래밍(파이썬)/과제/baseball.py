import random
 
def makeAnswer():
    answer = [0] * 3
    while True:
        answer[0] = random.randrange(0, 10)
        answer[1] = random.randrange(0, 10)
        answer[2] = random.randrange(0, 10)
 
        if answer[0] != answer[1] and \
                        answer[0] != answer[2] and \
                        answer[1] != answer[2]:
            break
 
    return answer
 
 
def inputAnswer():
    print('input answer : ', end='')
    a1 = int(input())
    a2 = int(input())
    a3 = int(input())
 
    return [a1,a2,a3]
 
def calcAnswer(answers, numbers):
    strike = (answers[0] == numbers[0]) + \
             (answers[1] == numbers[1]) + \
             (answers[2] == numbers[2])
    ball = (answers[0] == numbers[1]) + (answers[0] == numbers[2]) + \
           (answers[1] == numbers[0]) + (answers[1] == numbers[2]) + \
           (answers[2] == numbers[0]) + (answers[2] == numbers[1])
 
    return strike, ball
 
answer = makeAnswer()
print('answer : ', answer)
 
while True:
    numbers = inputAnswer()
 
    strike, ball = calcAnswer(answer, numbers)
    print('strike : ', strike, 'ball : ', ball)
 
    if strike == 3:
        break
 
print('=' * 20, 'end of game', '=' * 20)
