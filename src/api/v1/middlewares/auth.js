/* eslint-disable max-len */
/* eslint-disable import/extensions */
import lodash from 'lodash'
import defaultConstant from '../../../../constants/default.js'

const { get } = lodash
const auth = () => (
  req,
  res,
  next,
  // eslint-disable-next-line consistent-return
) => res
  .status(defaultConstant.HTTP_STATUS_CODE.UNAUTHORIZED)
  .json({ message: defaultConstant.errorMessage.NOT_AUTHORIZED })

export default auth
