const numbers = [2, 4, 5, 6, 7, 7, 8, 18, 18, 3, 12, 12, 6];

function displayDuplicates(numArray) {
  const duplicates = [];

  for (let i = 0; i < numArray.length; i++) {
    let count = 0;

    for (let j = 0; j < numArray.length; j++) {
      if (numArray[i] === numArray[j]) {
        count++;
      }
    }

    if (count > 1 && !duplicates.includes(numArray[i])) {
      duplicates.push(numArray[i]);
    }
  }

  return duplicates;
}
