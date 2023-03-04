import os

files = ',\n\t'.join([f"'/{file}'" for file in os.listdir() if file.endswith('.js') and not 'asm' in file])

# Read in the file
with open('sw.js', 'r') as file:
  filedata = file.read()

extra_files = f"'/{file}'"

# Replace the target string
filedata = filedata.replace('const PRECACHE_URLS = [', 'const PRECACHE_URLS = [\n' + files + ',')

# Write the file out again
with open('sw.js', 'w') as file:
  file.write(filedata)
