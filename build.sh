cd app-src
NODE_OPTIONS=--openssl-legacy-provider npx webpack build
cd ..
cp -r app-src/dist/* ./
cp app-src/src/*.js ./
python3 add_js_files_to_sw_js.py