@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

title ARCHIVE // 07 - HORROR INTERFACE RUNNER
echo ===================================================
echo   ARCHIVE // 07 : INTERACTIVE HORROR SYSTEM
echo   Host: http://localhost:8080
echo   Press Ctrl+C to shutdown server
echo ===================================================
echo.

echo [RUNNING] Проверка среды Python...
python --version >nul 2>&1
if %errorlevel% neq 0 (
    echo [ERROR] Python не обнаружен в PATH!
    echo Открываем index.html напрямую в браузере...
    start "" index.html
    pause
    exit /b 1
)

echo [OK] Python найден.
echo [RUNNING] Запуск HTTP-сервера на порту 8080...
start "ARCHIVE-07-SERVER" /min python -m http.server 8080 --directory "%~dp0"

timeout /t 1 >nul
echo [OK] Сервер запущен.
echo [RUNNING] Открытие браузера...
start http://localhost:8080

echo.
echo [OK] Система готова к погружению.
echo Не закрывайте это окно, пока работаете с архивом.
echo.
pause
