function isMajor(nbr){
  return  nbr >= 18 ? "Major" : 'Minor';
}

console.log(isMajor(16));
console.log(isMajor(18));