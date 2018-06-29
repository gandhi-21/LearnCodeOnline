const converToRs = (dollar) => {
  if (typeof dollar === 'number') {
      return dollar * 64
  } else {
      throw Error('Amount needs to be in number')
  }
}

try {
  const myValue = converToRs('five')
  console.log(myValue);
} catch (e) {
  console.log(e);
}


console.log('I will not run if program crashes');
