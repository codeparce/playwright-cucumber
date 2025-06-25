#!/bin/bash

echo "⚙️ instalando dependencias"

npm ci >> info.log
 
echo "⚙️ instalando dependencias de playwright"
npx playwright install-deps >> info.log
npx playwright install >> info.log

echo "⚙️ Ejecutando test end-2-end"
npm run cc
