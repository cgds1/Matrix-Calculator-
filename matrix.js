export function add(A, B) {
    validarIgualDimension(A, B);
    return A.map((fila, i) => fila.map((v, j) => v + B[i][j]));
}

export function subtract(A, B) {
    validarIgualDimension(A, B);
    return A.map((fila, i) => fila.map((v, j) => v - B[i][j]));
}

export function subtractBA(B, A) {
    return subtract(B, A);
}

export function multiply(A, B) {
    if (A[0].length !== B.length) throw new Error("Columnas de A deben ser igual a filas de B");
    const result = Array.from({ length: A.length }, () => Array(B[0].length).fill(0));
    for (let i = 0; i < A.length; i++) {
        for (let j = 0; j < B[0].length; j++) {
            for (let k = 0; k < B.length; k++) {
                result[i][j] += A[i][k] * B[k][j];
            }
        }
    }
    return result;
}

export function scalarMultiply(k, A) {
    return A.map(row => row.map(val => val * k));
}

export function transpose(A) {
    return A[0].map((_, i) => A.map(row => row[i]));
}

export function identity(n) {
    const I = Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => (i === j ? 1 : 0))
    );
    return I;
}

export function determinant(A) {
    const n = A.length;
    if (n !== A[0].length) throw new Error("La matriz debe ser cuadrada");

    const mat = A.map(row => row.slice());
    let det = 1;

    for (let i = 0; i < n; i++) {
        let maxRow = i;
        for (let k = i + 1; k < n; k++) {
            if (Math.abs(mat[k][i]) > Math.abs(mat[maxRow][i])) maxRow = k;
        }
        if (mat[maxRow][i] === 0) return 0;

        if (i !== maxRow) {
            [mat[i], mat[maxRow]] = [mat[maxRow], mat[i]];
            det *= -1;
        }

        det *= mat[i][i];

        for (let k = i + 1; k < n; k++) {
            const factor = mat[k][i] / mat[i][i];
            for (let j = i; j < n; j++) {
                mat[k][j] -= factor * mat[i][j];
            }
        }
    }

    return parseFloat(det.toFixed(4));
}

export function inverse(A) {
    const n = A.length;
    if (n !== A[0].length) throw new Error("Debe ser cuadrada");
    const I = identity(n);
    const M = A.map((row, i) => row.concat(I[i]));

    // Gauss-Jordan
    for (let i = 0; i < n; i++) {
        let pivot = M[i][i];
        if (pivot === 0) {
            const swapRow = M.findIndex((row, r) => r > i && row[i] !== 0);
            if (swapRow === -1) throw new Error("Matriz no invertible");
            [M[i], M[swapRow]] = [M[swapRow], M[i]];
            pivot = M[i][i];
        }
        for (let j = 0; j < 2 * n; j++) M[i][j] /= pivot;

        for (let k = 0; k < n; k++) {
            if (k === i) continue;
            const factor = M[k][i];
            for (let j = 0; j < 2 * n; j++) {
                M[k][j] -= factor * M[i][j];
            }
        }
    }

    return M.map(row => row.slice(n));
}

function validarIgualDimension(A, B) {
    if (A.length !== B.length || A[0].length !== B[0].length)
        throw new Error("Las dimensiones no coinciden");
}