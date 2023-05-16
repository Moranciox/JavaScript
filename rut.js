const rutForm = document.querySelector('#rut-form');


function calculateDv(e) {
  e.preventDefault();
  const rutInput = document.querySelector('#rut');
  const rut = rutInput.value.replace(/\./g, '').replace('-', ''); // elimina puntos y guiones
  const rutNumbers = rut.slice(0, -1);
  const dv = rut.slice(-1);
  let sum = 0;
  let mul = 2;
  for (let i = rutNumbers.length - 1; i >= 0; i--) {
    sum += rutNumbers.charAt(i) * mul;
    mul = (mul + 1) % 8 || 2;
  }
  const calculatedDv = (11 - (sum % 11));
  const dvResult = calculatedDv === 10 ? 'K' : calculatedDv === 11 ? '0' : calculatedDv;
  const isValidRut = dvResult.toString() === dv.toUpperCase();
  const message = isValidRut ? `El RUT ${rutInput.value} es válido.` : `El RUT ${rutInput.value} no es válido.`;
  alert(`El dígito verificador de ${rutInput.value} es: ${dvResult}. ${message}`)
}

rutForm.addEventListener('submit', calculateDv);