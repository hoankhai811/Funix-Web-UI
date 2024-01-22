@echo off
set /p input="Enter the main folder name (e.g., 'Lab input'): "
set /p input2="Enter the number of subfolders: "

cd /d D:\FUNIX\WebUI

mkdir "Lab %input%"
cd "Lab %input%"

for /l %%i in (1,1,%input2%) do (
    mkdir "Lab %input%.%%i"
	echo /* JS code here */ > "Lab %input%.%%i\index.js"
)

echo Folders and HTML files created successfully.
pause
