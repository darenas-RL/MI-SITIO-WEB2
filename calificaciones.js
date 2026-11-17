
function calcularPromedio() {

    // Obtener los datos del formulario
    let nombre = document.getElementById("nombre").value.trim();

    let cal1Texto = document.getElementById("cal1").value;
    let cal2Texto = document.getElementById("cal2").value;
    let cal3Texto = document.getElementById("cal3").value;

    // Validar que el nombre no esté vacío
    if (nombre === "") {
        alert("Por favor, ingresa el nombre del estudiante.");
        return;
    }

    // Validar que las calificaciones tengan un valor
    if (cal1Texto === "" || cal2Texto === "" || cal3Texto === "") {
        alert("Debes ingresar las tres calificaciones.");
        return;
    }

    // Convertir las calificaciones a números
    let cal1 = Number(cal1Texto);
    let cal2 = Number(cal2Texto);
    let cal3 = Number(cal3Texto);

    // Validar que sean números válidos
    if (!Number.isFinite(cal1) ||
        !Number.isFinite(cal2) ||
        !Number.isFinite(cal3)) {

        alert("Las calificaciones deben ser números válidos.");
        return;
    }

    // Validar que las calificaciones estén entre 0 y 10
    if (cal1 < 0 || cal1 > 10 ||
        cal2 < 0 || cal2 > 10 ||
        cal3 < 0 || cal3 > 10) {

        alert("Las calificaciones deben estar entre 0 y 10.");
        return;
    }

    // Calcular el promedio
    let promedio = (cal1 + cal2 + cal3) / 3;

    // Determinar si el estudiante aprobó o reprobó
    let estado;

    if (promedio >= 6 && promedio <= 10) {
        estado = "APROBADO";
    } else if (promedio < 6) {
        estado = "REPROBADO";
    } else {
        alert("Error al calcular el resultado.");
        return;
    }

    // Determinar la observación
    let observacion;

    if (promedio >= 9) {
        observacion = "Excelente desempeño";
    } else if (promedio >= 8) {
        observacion = "Muy buen desempeño";
    } else if (promedio >= 7) {
        observacion = "Buen desempeño";
    } else if (promedio >= 6) {
        observacion = "Desempeño suficiente";
    } else {
        observacion = "Necesita mejorar";
    }

    // Mostrar los resultados en la página
    let resultado = document.getElementById("resultado");

    resultado.innerHTML = `
        <h3>Resultados del estudiante</h3>

        <p><strong>Nombre:</strong> ${nombre}</p>

        <p><strong>Primera calificación:</strong> ${cal1}</p>

        <p><strong>Segunda calificación:</strong> ${cal2}</p>

        <p><strong>Tercera calificación:</strong> ${cal3}</p>

        <p><strong>Promedio:</strong> ${promedio.toFixed(2)}</p>

        <p><strong>Estado:</strong>
            <span class="${estado === 'APROBADO' ? 'aprobado' : 'reprobado'}">
                ${estado}
            </span>
        </p>

        <p><strong>Observación:</strong> ${observacion}</p>
    `;
}
