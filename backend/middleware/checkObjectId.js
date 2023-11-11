import { isValidObjectId } from 'mongoose';

function checkObjectId(req, res, next) {
  if (!isValidObjectId(req.params.id)) {
    res.status(404);
    throw new Error(`Invalid ObjectId of: ${req.params.id}}`);
  } else {
    next();
  }
}

export default checkObjectId;
