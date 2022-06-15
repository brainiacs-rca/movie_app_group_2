const {
  validateSignup,
  validateLinks,
  validateCont,
} = require('../middleware/validator')

const bcrypt = require('bcrypt')
const { createToken } = require('../createFunctions/Token')
const emailExistence = require('email-existence')
const { transporter } = require('../createFunctions/Mail')
const jwt = require('jsonwebtoken')
const User = require('../models/user')
require('dotenv').config()
exports.signup = async (req, res) => {
  try {
    const { error } = validateSignup.validate(req.body)
    if (error && !error.details[0].message.includes('pattern:'))
      return res.status(400).send(error.details[0].message.split('"').join(''))
    if (!/^(?=.*[a-z])/.test(req.body.password))
      return res
        .status(400)
        .send('password must contain at least one lowercase letter')
    if (!/(?=.*[A-Z])/.test(req.body.password))
      return res
        .status(400)
        .send('password must contain at leaset one uppercase letter')
    if (!/^(?=.*\d)/.test(req.body.password))
      return res.status(400).send('password must contain at least one number')
    if (
      !/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?=.*[$&*#]).{8,}$/.test(
        req.body.password,
      )
    )
      return res
        .status(400)
        .send('password must contain of special characters $&*#')
    const databaseExi = await User.findOne({ email: req.body.email })
    if (databaseExi) return res.status(400).send('Email already exist')
    req.body.password = await bcrypt.hash(req.body.password, 10)
    emailExistence.check(req.body.email, async (err, resp) => {
      if (err) throw err
      if (!resp) return res.status(400).send('Enter valid email address')
      const current = await createToken(req.body, 'test')
    })
  } catch (error) {
    console.log(error)
  }
}
exports.signupMiddle = async (req, res) => {
  try {
    req.cookies.current.splice(2, 0, req.headers.authorization.split(' ')[1])
    var my = jwt.verify(req.cookies.current.join('.'), process.env.SECRET)
    const { email, fullname, password } = my
    req.body = { ...req.body, email, fullname, password }
    const user = await User.create(req.body)
    const token = await createToken({ id: user._id }, 'register')
    res.cookie('token', token)
    res.status(201).send(token)
  } catch (error) {
    console.log(error)
    return res.status(403).send(false)
  }
}

exports.login = async (req, res) => {
  const { email, password } = req.body
  try {
    const avilabelUser = await User.findOne({ email })
    if (!avilabelUser) return res.status(403).send('Invalid email or password')
    const isValid = await bcrypt.compare(password, avilabelUser.password)
    if (!isValid) return res.status(403).send('invalid email or password')
    const token = await createToken({ id: avilabelUser._id },'register')
    res.cookie('token', token)
    res.status(200).send(token)
  } catch (err) {
    console.log(err)
  }
}

exports.logout = async (req, res) => {
  req.logout()
  res.clearCookie('token')
}
