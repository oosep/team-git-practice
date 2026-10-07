function isValidTitle(value) {
if (typeof value !== 'string') return false;
const length = value.trim().length;
return length >= 1 && length <= 80;
}
module.exports = { isValidTitle };
