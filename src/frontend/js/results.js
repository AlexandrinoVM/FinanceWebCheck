const storedData = localStorage.getItem('financialData');

if (storedData) {
  const financialData = JSON.parse(storedData);

  const resultDiv = document.getElementById('results');
  resultDiv.innerHTML = `
    <h2>Dados Gerais</h2>
    <p><strong>Valor Total:</strong> R$ ${financialData.totalAmount.toFixed(2)}</p>
    <h2>Categorias</h2>
  `;

  financialData.categories.forEach(category => {
    const categoryElement = document.createElement('div');
    categoryElement.innerHTML = `
      <h3>${category.name}</h3>
      <ul>
        ${category.items.map(item => `<li>${item.name} - R$${item.price.toFixed(2)}</li>`).join('')}
      </ul>
    `;
    resultDiv.appendChild(categoryElement);
  });
} else {
  document.getElementById('results').innerHTML = '<p>Não há dados salvos</p>';
}
