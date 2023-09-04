/* eslint-disable import/extensions */
import CustomApiError from './customApi.error.js'
import constants from '../../../../constants/default.js'

class BadRequestError extends CustomApiError {}

export default BadRequestError
