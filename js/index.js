function showPassword() {
  const eye = document.getElementById('eye')
  const eyeSlash = document.getElementById('eye-slash')
  const fieldPassworld = document.getElementById('field-password')

  if (eye.style.display === 'none') {
    eye.style.display = 'block'
    eyeSlash.style.display = 'none'
    fieldPassworld.type = 'text'
  } else {
    eye.style.display = 'none'
    eyeSlash.style.display = 'block'
    fieldPassworld.type = 'password'
  }
}

document.getElementById('btn-login').addEventListener('click', function (e) {
  e.preventDefault()
  alert('Logado')
})
