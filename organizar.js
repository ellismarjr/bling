function organizar(string1, string2) {
  const palavraOrganizada = `${string1.replace('%', '')}${string2.split('').reverse().join('').replace('%', '')}`;
  return palavraOrganizada.charAt(0).toUpperCase() + palavraOrganizada.slice(1);
}

const palavraOrganizada1 = organizar('java', 'tpi%rcs') // Javascript
const palavraOrganizada2 = organizar('c%ountry', 'edis') // Countryside
const palavraOrganizada3 = organizar('down', 'nw%ot') // Downtown

console.log(palavraOrganizada1);
console.log(palavraOrganizada2);
console.log(palavraOrganizada3);