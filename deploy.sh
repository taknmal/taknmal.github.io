cd app-src
npx webpack build
cd ..
cp app-src/dist/* ./
cp app-src/src/*.js ./
python3 add_js_files_to_sw_js.py
git add . && git commit -am deploy && git push