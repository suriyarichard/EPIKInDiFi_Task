import re

def process_string(input_string):
    no_numbers = re.sub(r'\d+', '', input_string)

    processed_string = re.sub(r'[^A-Za-z\s]', ' ', no_numbers)

    return processed_string

input_string = "Hello123! How are you? 456"
result = process_string(input_string)

print("Original String:", input_string)
print("Processed String:", result)
