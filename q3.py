def find_second_and_fourth_greatest(numbers):
    if len(numbers) < 4:
        return "Error: The list should have at least 4 numbers."

    sorted_numbers = sorted(numbers, reverse=True)
    second_greatest = sorted_numbers[1]
    fourth_greatest = sorted_numbers[3]

    return second_greatest, fourth_greatest


number_list = [10, 5, 8, 15, 7, 25]

result = find_second_and_fourth_greatest(number_list)

print("Number list:", number_list)
print("Second and Fourth Greatest Numbers:", result)
