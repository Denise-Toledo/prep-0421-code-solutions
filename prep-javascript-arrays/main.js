var languagesArray = ['html', 'css', 'javascript', 'react', 'node.js'
];
console.log('languages Array', languagesArray);

console.log('array length', languagesArray.length);

languagesArray.push('c#', 'php');
console.log('Updated array', languagesArray);

languagesArray.pop('php');
console.log('Last index removed', languagesArray);

languagesArray.splice(0, 0, 'C++');
console.log('added element to front', languagesArray);

languagesArray.shift();
console.log('removed first element', languagesArray);

var thirdElement = 'javascript';
console.log('3rd element in languageArray:', thirdElement);

var arrayLength = languagesArray.length;
console.log('The final length of the array is:', arrayLength);

var lastItem = languagesArray[arrayLength - 1];
console.log('The last item in the array is', lastItem);
