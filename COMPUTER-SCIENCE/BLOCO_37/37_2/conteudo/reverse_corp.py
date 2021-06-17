def reverse_corp(list_initial):
    list_reverse = []
    for index in range(len(list_initial) - 1, -1, -1):
        list_reverse.append(list_initial[index])
    return list_reverse


print(reverse_corp([1, 2, 3, 4]))
