import os

files = ','.join([f"'/{file}'" for file in os.listdir() if file.endswith('.js')])

# Read in the file
with open('sw.js', 'r') as file:
  filedata = file.read()

extra_files = f"'/{file}'"

# Replace the target string
filedata = filedata.replace('const PRECACHE_URLS = [', 'const PRECACHE_URLS = [\n' + files)

# Write the file out again
with open('file.txt', 'w') as file:
  file.write(filedata)
