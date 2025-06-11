import {
    add, subtract, subtractBA, multiply,
    scalarMultiply, transpose, identity,
    determinant, inverse
} from "./matrix.js";

// Config inicial
let size = 2;
const sizeSelect = document.getElementById("size");
const matrixA = document.getElementById("matrixA");
const matrixB = document.getElementById("matrixB");
const result = document.getElementById("result");

function createGrid(n, container) {
    container.innerHTML = "";
    container.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let i = 0; i < n * n; i++) {
        const input = document.createElement("input");
        input.type = "number";
        input.step = "any";
        input.value = "0";
        container.appendChild(input);
    }
}

function getMatrix(container) {
    const inputs = container.querySelectorAll("input");
    const n = Math.sqrt(inputs.length);
    const values = Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => {
            const val = parseFloat(inputs[i * n + j].value);
            if (isNaN(val)) throw new Error("Entrada invalida");
            return val;
        })
    );
    return values;
}

function showMatrix(matrix) {
    result.innerHTML = "";
    const n = matrix.length;
    result.style.gridTemplateColumns = `repeat(${n}, 1fr)`;
    for (let row of matrix)
        for (let val of row) {
            const cell = document.createElement("input");
            cell.value = val.toFixed(2);
            cell.disabled = true;
            result.appendChild(cell);
        }
}

function fillRandom(container) {
    const inputs = container.querySelectorAll("input");
    inputs.forEach(inp => inp.value = Math.floor(Math.random() * 21) - 10);
}

function fillExample(container) {
    const inputs = container.querySelectorAll("input");
    inputs.forEach((inp, i) => inp.value = (i % 2 === 0 ? 1 : 2));
}

function clearInputs(container) {
    const inputs = container.querySelectorAll("input");
    inputs.forEach(inp => inp.value = 0);
}

// Eventos
sizeSelect.addEventListener("change", () => {
    size = parseInt(sizeSelect.value);
    createGrid(size, matrixA);
    createGrid(size, matrixB);
    result.innerHTML = "";
});
document.getElementById("rand").addEventListener("click", () => {
    fillRandom(matrixA);
    fillRandom(matrixB);
});
document.getElementById("example").addEventListener("click", () => {
    fillExample(matrixA);
    fillExample(matrixB);
});
document.getElementById("clear").addEventListener("click", () => {
    clearInputs(matrixA);
    clearInputs(matrixB);
    result.innerHTML = "";
});

document.querySelectorAll("[data-op]").forEach(btn => {
    btn.addEventListener("click", () => {
        try {
            const A = getMatrix(matrixA);
            let B, k, R;

            switch (btn.dataset.op) {
                case "add":
                    B = getMatrix(matrixB);
                    R = add(A, B);
                    break;
                case "subtract":
                    B = getMatrix(matrixB);
                    R = subtract(A, B);
                    break;
                case "subtractBA":
                    B = getMatrix(matrixB);
                    R = subtractBA(B, A);
                    break;
                case "multiply":
                    B = getMatrix(matrixB);
                    R = multiply(A, B);
                    break;
                case "scalar":
                    k = parseFloat(prompt("Introduce el escalar:"));
                    if (isNaN(k)) throw new Error("Escalar invalido");
                    R = scalarMultiply(k, A);
                    break;
                case "transpose":
                    R = transpose(A);
                    break;
                case "determinant":
                    const det = determinant(A);
                    alert(`Determinante: ${det}`);
                    return;
                case "inverse":
                    R = inverse(A);
                    break;
                case "identity":
                    R = identity(A.length);
                    break;
                default:
                    throw new Error("Operacion no valida");
            }

            showMatrix(R);
        } catch (e) {
            alert("Error: " + e.message);
        }
    });
});

// Inicial
createGrid(size, matrixA);
createGrid(size, matrixB);