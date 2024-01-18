@echo off
set /p input="Enter the main folder name (e.g., 'Lab input'): "
set /p input2="Enter the number of subfolders: "

cd /d D:\FUNIX\WebUI

mkdir "Lab %input%"
cd "Lab %input%"

for /l %%i in (1,1,%input2%) do (
    mkdir "Lab %input%.%%i"
    echo ^<!DOCTYPE html^>^<html lang="en"^>^<head^>^<meta charset="UTF-8"^>^<meta name="viewport" content="width=device-width, initial-scale=1.0"^>^<title^>Lab %input%.%%i^</title^>^</head^>^<body^>^</body^>^</html^>^ > "Lab %input%.%%i\index.html"
)

echo Folders and HTML files created successfully.
pause
