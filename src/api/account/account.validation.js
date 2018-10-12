const emailRegex = /\S+@\S+\.\S+/
const passwordRegex = /((?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{6,20})/

const validade_signup = usuario => {
  const errors = []

  if (!usuario.email.match(emailRegex)) {
    errors.push(Object.assign({}, { message: 'O email informado está inválido.' }))
  }
  if (!usuario.password.match(passwordRegex)) {
    errors.push(Object.assign({}, { message: 'Ops! A senha deve conter de 6 a 20 caracteres, com letra maiuscula e caracteres especiais.' }))
  }
  if (usuario.confirm_password !== usuario.password) {
    errors.push(Object.assign({}, { message: 'A senha e a senha de confirmação não conferem.' }))
  }
  if (usuario.nome === '') {
    errors.push(Object.assign({}, { message: 'Informe o nome.' }))
  }

  return errors
}

const changePasswordValidation = (password, passwordConfirm, changePasswordHash) => {
  const errors = []
  if (changePasswordHash == '' || changePasswordHash == null || changePasswordHash == undefined) {
    errors.push(Object.assign({}, { message: 'Solicitação Inválida.' }))
    return errors
  }
  if (password == '' || password == undefined) {
    errors.push(Object.assign({}, { message: 'A senha é obrigatória.' }))
  }
  if (passwordConfirm == '' || passwordConfirm == undefined) {
    errors.push(Object.assign({}, { message: 'A senha de confirmação é obrigatória.' }))
    return errors
  }
  if (password != passwordConfirm) {
    errors.push(Object.assign({}, { message: 'A senha e a senha de confirmação não conferem.' }))
    return errors
  }
  if (!password.match(passwordRegex)) {
    errors.push(Object.assign({}, { message: 'Ops! A senha deve conter de 6 a 20 caracteres, com letra maiuscula e caracteres especiais.' }))
  }
  return errors
}

module.exports = { validade_signup, changePasswordValidation }
