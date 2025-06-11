# 📐 Calculadora de Matrices Interactiva

Proyecto web desarrollado para la asignatura **Lenguaje de Clientes Web**  
**Universidad Rafael Urdaneta** – Facultad de Ingeniería  
Profesor: Ing. Víctor Kneider

---

## 🎯 Objetivo General

Desarrollar una aplicación web interactiva que permita realizar operaciones matemáticas con matrices cuadradas de tamaño **n×n**, donde **2 ≤ n ≤ 10**.

---

## 🧩 Tecnologías Usadas

- HTML5 + CSS3
- JavaScript (Módulos ES6)
- Diseño responsive con CSS Grid y Flexbox

---

## 🛠️ Funcionalidades

### ✏️ Entrada de Datos

- Entrada manual en celdas tipo grid
- Generación aleatoria de números enteros entre -10 y 10
- Carga de ejemplo con datos predefinidos
- Limpieza de todas las entradas

### 🧮 Operaciones Implementadas

| Operación                   | Descripción                                                                 |
|----------------------------|-----------------------------------------------------------------------------|
| **A + B**                  | Suma de matrices del mismo tamaño                                           |
| **A - B / B - A**          | Resta de matrices                                                          |
| **A × B**                  | Multiplicación matricial compatible                                        |
| **k × A**                  | Multiplicación por escalar                                                 |
| **Transpuesta A**          | Transposición de matriz A                                                  |
| **Determinante det(A)**    | Determinante para matrices 2x2 hasta 10x10 (por eliminación gaussiana)     |
| **Inversa A**              | Cálculo de matriz inversa (Gauss-Jordan), con validación de existencia     |
| **Identidad**              | Genera la matriz identidad Iₙ según el tamaño seleccionado                 |

---

## 🧪 Validaciones y Manejo de Errores

- Validación de entrada numérica (enteros y decimales)
- Validación de dimensiones compatibles
- Mensajes de error claros y específicos
- Operaciones protegidas con `try/catch`

---

## 🚀 Instrucciones de Uso

1. Clona o descarga el proyecto
2. Abre `index.html` en tu navegador
3. Selecciona el tamaño de matriz y llena los datos
4. Haz clic en la operación deseada
5. El resultado se mostrará automáticamente

---

## 🧠 Lecciones Aprendidas

- Manipulación DOM dinámica con JavaScript
- Operaciones matriciales programadas desde cero
- Separación de lógica (código limpio y modular)
- Aplicación real de estructuras matemáticas

---

## 📅 Fecha de entrega

**11 de junio de 2025**

---

## ⚖️ Licencia

Proyecto académico sin fines de lucro.  
Puedes usarlo como base educativa. ¡No lo copies sin entenderlo! 😉
