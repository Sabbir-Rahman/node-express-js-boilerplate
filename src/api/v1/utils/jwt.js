/* eslint-disable import/extensions */
import jwt from 'jsonwebtoken'

import defaultConfig from '../../../../config/default.js'

const privateKey = defaultConfig.jwtConfig.PRIVATE_KEY
const publicKey = defaultConfig.jwtConfig.PUBLIC_KEY

// type JwtUserTokenObject = { userId: string; username: string; role: [string] }

function signJwt(object, options) {}

function verifyJwt(token) {}

export default {
  signJwt,
  verifyJwt,
}
