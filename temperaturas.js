const celsius = document.getElementById("celsius");
const fahrenheit = document.getElementById("fahrenheit");

let ultimo = null;
celsius.addEventListener("input", () => { ultimo = "c"; });
fahrenheit.addEventListener("input", () => { ultimo = "f"; });

function convertir() {
  const c = celsius.value.trim();
  const f = fahrenheit.value.trim();

  if (c === "" && f === "") 
{
    alert("Por favor, ingresa una temperatura.");
    return;
}
  const desdeCelsius = f === "" || (c !== "" && ultimo !== "f");
  if (desdeCelsius) 
{
    fahrenheit.value = ((parseFloat(c) * 9 / 5) + 32);
} else 
{
    celsius.value = ((parseFloat(f) - 32) * 5 / 9);
}
}

document.getElementById("btnConvertir").addEventListener("click", convertir);