# Playwright & cucumber test

## Configurar proyecto

1. npm init --y
2. npm init playwright@latest
3. npm i -D @cucumber/cucumber
4. npm i -D ts-node
5. Eliminar los ejemplos y playwright.config

## Estructura de carpetas

```bash 
├── enventory/                      # Componentes Dom reutilizables 
│   ├── selectors.ts
│   ├── menu.ts
│   ├── login.ts
│   └── ...
│
├── features/                      # Archivos .feature en Gherkin
│   ├── login.feature
│   ├── menu.feature
│   └── ...
│
├── step-definitions/             # Implementación de pasos
│   ├── login.steps.ts
│   ├── menu.steps.ts
│   └── common.steps.ts           # Pasos reutilizables 
│
├── support/                      
│   ├── hooks.ts                  # Before/After para setup y teardown
│   ├── world.ts                  # Custom World (configuraciones globales)
```

##  Videos clave
- [introducción](https://www.youtube.com/watch?v=G1DOhBMIFkI&list=PLHBdlNTbF1h5XwqAc18Z5xcJpbO6rq6mm&index=1) 
- [Gherkin](https://www.youtube.com/watch?v=S9R67Ccg37s&list=PLHBdlNTbF1h5XwqAc18Z5xcJpbO6rq6mm&index=4)
- [Concepto más profundo](https://www.youtube.com/watch?v=1_QPC_W3yFE&list=PLLYWsphuMYKvWYuLs1CkAZ4zSC96EaSkF)
- [Entender más la sintaxis](https://www.youtube.com/watch?v=7VzRyJVKFXc) 
- [Ejemplo e integración con playwright](https://www.youtube.com/watch?v=Su08K9Rp8Uk)

- [Documentacion cucumber](https://cucumber.io/docs/) 
- [Documentacion Playwright](https://playwright.dev/docs/intro)

## ¿Qué es World en Cucumber?
En Cucumber, World es un objeto que representa el contexto compartido entre los pasos de un escenario. Es como una "mochila" donde puedes guardar y acceder a variables como el navegador, la página, etc., entre pasos.

## ¿Qué son los hooks en Cucumber?

Los hooks son funciones que se ejecutan en momentos específicos del ciclo de vida de las pruebas:

- BeforeAll: Se ejecuta una vez antes de todos los escenarios (ideal para cosas que solo quieres hacer una vez, como abrir un navegador).

- AfterAll: Se ejecuta una vez después de todos los escenarios (ideal para cerrar recursos compartidos).

- Before: Se ejecuta antes de cada escenario (para preparar el entorno o estado antes de que inicie cada prueba).

- After: Se ejecuta después de cada escenario (para limpiar o cerrar cosas usadas en ese escenario).

