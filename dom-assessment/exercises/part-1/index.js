const animals = [{name: 'Martin', species: 'Elephant'}, {name: 'Grace', species: 'Tiger'}]
const cities = [{city_name: 'New York', state: 'NY', population: 8000000}, {city_name: 'San Fransisco', state: 'CA', population: 900000}]

document.addEventListener('DOMContentLoaded', () => {
  const animalDiv = document.getElementById('animals')
  renderDataTable(animals, animalDiv)

  const citiesDiv = document.getElementById('cities')
  renderDataTable(cities, citiesDiv)
})

function renderDataTable(data, el){
  const headers = Object.keys(data[0]);
  const table = `<table><tr>${headers.map(header => `<th>${header}</th>`).join('')}</tr>
  ${data.map(d => {
    row = '<tr>'
    headers.forEach(header => {
      row += `<td>${d[header]}</td>`
    })
    row += '</tr>'
    return row
  }).join("")}
  </table>`
  el.innerHTML = table
}
