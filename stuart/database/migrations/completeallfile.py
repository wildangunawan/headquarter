import os

# Set the directory path
directory = "./"

# Iterate through each file in the directory
for filename in os.listdir(directory):
    filepath = os.path.join(directory, filename)

    # Check if the filepath is a file and not a directory
    if os.path.isfile(filepath):
        with open(filepath, 'rb+') as file:
            file.seek(-2, os.SEEK_END)
            last_char = file.read(1)
            if last_char != b';':
                file.write(b';';