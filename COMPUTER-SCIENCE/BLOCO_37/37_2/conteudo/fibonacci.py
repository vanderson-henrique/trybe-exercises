def fibonacci(n):
    numbers = [0, 1]
    for index in range(0, (n - 2)):
        next_number = numbers[index] + numbers[index + 1]
        numbers.append(next_number)
    return numbers[-1]


print(fibonacci(11))
