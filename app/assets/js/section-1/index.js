const showTable = () => {
  document.getElementById('alaya-table').style.display = 'block'
}

const showForm = () => {
  document.getElementById('alaya-form').style.display = 'block'
}

document.getElementById('submit').addEventListener('click', (event) => {
  event.preventDefault()
  alert('Form submitted!')
})
