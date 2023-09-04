/* eslint-disable import/extensions */
import { logQueryError } from '../../../../logger/customLogger.js'
import db from '../models/index.js'

const FILENAME = 'src/api/v1/queries/author.query.js'

const createAuthor = async (queryData) => {}

const authorDuplicateMail = async (authorEmail) => {}

const getSingleAuthorById = async (authorId) => {}

const getSingleAuthorByEmail = async (authorEmail) => {}

export default {
  createAuthor,
  authorDuplicateMail,
  getSingleAuthorById,
  getSingleAuthorByEmail,
}
