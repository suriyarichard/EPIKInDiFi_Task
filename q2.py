def transform_string(input_string):
    length = len(input_string)

    if length % 2 == 1:  
        middle_index = length // 2
        first_half = input_string[:middle_index].lower()
        second_half = input_string[middle_index:].upper()

        transformed_string = first_half + second_half
    else:
        transformed_string = input_string  
    return transformed_string

strings_to_transform = ["oriJenBeliret", "orionmeo"]

for original_string in strings_to_transform:
    transformed_string = transform_string(original_string)
    print(f"Original string: {original_string} --> Transformed string: {transformed_string}")
