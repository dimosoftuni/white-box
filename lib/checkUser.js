function checkUserStatus(age) {
  let userStatus = 'NON-ADULT';
  if (age > 18) {
    userStatus = 'ADULT';
  }
  return userStatus;
}

module.exports = {
  checkUserStatus,
};
