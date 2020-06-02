module.exports = (fullName) => {
  if(typeof fullName !== 'string') return 'Error';
  const [ firstName, lastName ] = fullName.split(' ');
  if(!firstName || !lastName) return 'Error';
  const count = fullName.match(/ /g).length;
  if(count > 1)
    return 'Error';
  else {
    return firstName[0].toUpperCase + firstName.slice(1).toLowerCase() + lastName[0].toUpperCase + lastName.slice(1).toLowerCase() ;
  }

};
