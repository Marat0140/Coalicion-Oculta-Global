function searchCondition() {
  const input = document.getElementById('conditionInput').value.toLowerCase();
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = '';
  fetch('base-de-datos.json')
    .then(response => response.json())
    .then(data => {
      const condition = data.conditions.find(item => item.name.toLowerCase() === input);
      if (condition) {
        resultDiv.innerHTML += `<h2>${condition.name}</h2>`;
        resultDiv.innerHTML += `<p>${condition.descripciongeneral}</p><br>`;
        resultDiv.innerHTML += `<p><strong>Generación Cero:</strong> ${condition.generacioncero}</p><br>`;
        resultDiv.innerHTML += `<p><strong>Generación Más Uno:</strong> ${condition.generacionuno}</p><br>`;
        resultDiv.innerHTML += `<p><strong>Generación Más Dos:</strong> ${condition.generaciondos}</p><br>`;
        resultDiv.innerHTML += `<p><strong>Tangencial:</strong> ${condition.tangencial}</p>`;
      } else {
        resultDiv.innerHTML = 'Condition not found.';
      }
    })
    .catch(error => {
      console.error('Error:', error);
      resultDiv.innerHTML = 'An error occurred while fetching data.';
    });
}
      btnSearch.addEventListener('click', searchCondition);