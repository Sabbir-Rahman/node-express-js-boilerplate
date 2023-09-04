/* eslint-disable import/extensions */
import validation from '../validators/author.js'
import constants from '../../../../constants/default.js'
import { authService } from '../services/index.js'
import CustomResponse from '../utils/customResponse.js'
import { BadRequestError } from '../errors/index.js'

const userLogin = async (req, res, next) => next()

export default { userLogin }
