<<<<<<< HEAD
<<<<<<< HEAD

'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
const count = (arr, item) => {
  let thing = 0;
  arr.reduce((acc, arr) => {
    for (let i = 0; i <arr.length; i++) {
      if (arr[i] = item) {
        acc++
      }
    }
  }, thing),
  return thing;
};

//I did this once for the whiteboard challenge on monday, ugh


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  let arrSum = input => input.reduce((a,b) => a + b, 0)
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3a

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...
};
//what the what 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
    return data.reduce((result, character) => {
      if (character.gender === male || character.gender === female) {
        return result + ' and ' + character.name;
      }
      return result; 
    })
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  data.map(data.height => {
    if data.height < data.height })
  //since I can't think of the syntax at all, I'm going to write my "process" thoughts and then pseudo-code it, and hope that you give me like half a point
  //basically, you need to GO INTO THE ARRAY (in this case, starWarsData), iterate over it, and hit the 'height' key of the objects within the array. Once you have height, you want to compare it to the next object's height value. If the currently set value of height is LESS THAN the height it is being compared to, it needs to continue thru the height values in the array, until it finds one that is LESS THAN. The LESS THAN value then continues thru the array as the new min, and is the compared value, until the smallest compared height reaches the end of the array. Once the smallest reaches the end of the array, it is RETURNED with its corresponding name key. Boom.
  data.map(over given array) => if current height < next height 
    then ++ thru array
    return smollestHeight + .name
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 3', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
// Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
test('It should return the number of times the input is in the nested arrays', () => {
  expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
  expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
  expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
});
test('It should work on empty arrays', () => {
  expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
  expect(count(5, [])).toStrictEqual(0);
});
});

describe('Testing challenge 2', () => {
test('It should add all the numbers in the arrays', () => {
  const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

  expect(totalSum(nums)).toStrictEqual(66);
});
});

describe('Testing challenge 3', () => {
test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
  expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
});

test('It should return an empty array if none of the numbers are divisible by five', () => {
  expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
});

test('It should return an empty array if the values are not numbers', () => {
  expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
});
});

describe('Testing challenge 4', () => {
test('It should return only characters that are male or female', () => {
  expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
  expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
});
});

describe('Testing challenge 5', () => {
test('It should return the name of the shortest character', () => {
  expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
});
=======
=======

<<<<<<< HEAD

'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1

Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.

Note: You might need to use the same method more than once.

For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
------------------------------------------------------------------------------------------------ */
const count = (arr, item) => {
  let thing = 0;
  arr.reduce((acc, arr) => {
    for (let i = 0; i <arr.length; i++) {
      if (arr[i] = item) {
        acc++
      }
    }
  }, thing),
  return thing;
};

//I did this once for the whiteboard challenge on monday, ugh


/* ------------------------------------------------------------------------------------------------
CHALLENGE 2

Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.

You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.

For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
------------------------------------------------------------------------------------------------ */

const totalSum = (input) => {
  let arrSum = input => input.reduce((a,b) => a + b, 0)
};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 3a

Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.

This function should first remove any elements that are not numbers or are not divisible by five.

This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.

For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
------------------------------------------------------------------------------------------------ */

const divisibleByFiveTwoToThePower = (input) => {
  // Solution code here...
};
//what the what 

/* ------------------------------------------------------------------------------------------------
CHALLENGE 4

Write a function named findMaleAndFemale that, given the Star Wars data, below,
returns the names of the characters whose gender is either male or female.

The names should be combined into a single string with each character name separated by "and".

For example, "C-3PO and Luke Skywalker".
------------------------------------------------------------------------------------------------ */

let starWarsData = [{
  name: 'Luke Skywalker',
  height: '172',
  mass: '77',
  hair_color: 'blond',
  skin_color: 'fair',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
},
{
  name: 'C-3PO',
  height: '167',
  mass: '75',
  hair_color: 'n/a',
  skin_color: 'gold',
  eye_color: 'yellow',
  birth_year: '112BBY',
  gender: 'n/a'
},
{
  name: 'R2-D2',
  height: '96',
  mass: '32',
  hair_color: 'n/a',
  skin_color: 'white, blue',
  eye_color: 'red',
  birth_year: '33BBY',
  gender: 'n/a'
},
{
  name: 'Darth Vader',
  height: '202',
  mass: '136',
  hair_color: 'none',
  skin_color: 'white',
  eye_color: 'yellow',
  birth_year: '41.9BBY',
  gender: 'male'
},
{
  name: 'Leia Organa',
  height: '150',
  mass: '49',
  hair_color: 'brown',
  skin_color: 'light',
  eye_color: 'brown',
  birth_year: '19BBY',
  gender: 'female'
}];

let findMaleAndFemale = (data) => {
    return data.reduce((result, character) => {
      if (character.gender === male || character.gender === female) {
        return result + ' and ' + character.name;
      }
      return result; 
    })
};


/* ------------------------------------------------------------------------------------------------
CHALLENGE 5

Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
------------------------------------------------------------------------------------------------ */

let findShortest = (data) => {
  data.map(data.height => {
    if data.height < data.height })
  //since I can't think of the syntax at all, I'm going to write my "process" thoughts and then pseudo-code it, and hope that you give me like half a point
  //basically, you need to GO INTO THE ARRAY (in this case, starWarsData), iterate over it, and hit the 'height' key of the objects within the array. Once you have height, you want to compare it to the next object's height value. If the currently set value of height is LESS THAN the height it is being compared to, it needs to continue thru the height values in the array, until it finds one that is LESS THAN. The LESS THAN value then continues thru the array as the new min, and is the compared value, until the smallest compared height reaches the end of the array. Once the smallest reaches the end of the array, it is RETURNED with its corresponding name key. Boom.
  data.map(over given array) => if current height < next height 
    then ++ thru array
    return smollestHeight + .name
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 3', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
});
// Solution code here...
};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
test('It should return the number of times the input is in the nested arrays', () => {
  expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
  expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
  expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
});
test('It should work on empty arrays', () => {
  expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
  expect(count(5, [])).toStrictEqual(0);
});
});

describe('Testing challenge 2', () => {
test('It should add all the numbers in the arrays', () => {
  const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

  expect(totalSum(nums)).toStrictEqual(66);
});
});

describe('Testing challenge 3', () => {
test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
  expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
});

test('It should return an empty array if none of the numbers are divisible by five', () => {
  expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
});

test('It should return an empty array if the values are not numbers', () => {
  expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
});
});

describe('Testing challenge 4', () => {
test('It should return only characters that are male or female', () => {
  expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
  expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
});
});

describe('Testing challenge 5', () => {
test('It should return the name of the shortest character', () => {
  expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
});

>>>>>>> d21522ab4e3a44dc02ab5a192e6333c46c395a27

'use strict';
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 1
  
  Write a function named count that, given an integer and an array of arrays, uses either filter, map, or reduce to count the amount of times the integer is present in the array of arrays.
  
  Note: You might need to use the same method more than once.
  
  For example, count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]]) returns 4.
  ------------------------------------------------------------------------------------------------ */
  const count = (arr, item) => {
    let thing = 0;
    arr.reduce((acc, arr) => {
      for (let i = 0; i <arr.length; i++) {
        if (arr[i] = item) {
          acc++
        }
      }
    }, thing),
    return thing;
  };
  
  //I did this once for the whiteboard challenge on monday, ugh
  
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 2
  
  Write a function that, given an array of integer arrays as input, calculates the total sum of all the elements in the array.
  
  You may want to use filter, map, or reduce for this problem, but are not required to. You may need to use the same method more than once.
  
  For example, [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]] returns 66.
  ------------------------------------------------------------------------------------------------ */
  
  const totalSum = (input) => {
    let arrSum = input => input.reduce((a,b) => a + b, 0)
  };
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 3a
  
  Write a function named divisibleByFiveTwoToThePower that accepts an array of arrays as input.
  
  This function should first remove any elements that are not numbers or are not divisible by five.
  
  This function should then raise 2 to the power of the resulting numbers, returning an array of arrays.
  
  For example, [ [0,2,5,4], [2,4,10], [] ] should return [ [1, 32], [1024], [] ].
  ------------------------------------------------------------------------------------------------ */
  
  const divisibleByFiveTwoToThePower = (input) => {
    // Solution code here...
  };
  //what the what 
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 4
  
  Write a function named findMaleAndFemale that, given the Star Wars data, below,
  returns the names of the characters whose gender is either male or female.
  
  The names should be combined into a single string with each character name separated by "and".
  
  For example, "C-3PO and Luke Skywalker".
  ------------------------------------------------------------------------------------------------ */
  
  let starWarsData = [{
    name: 'Luke Skywalker',
    height: '172',
    mass: '77',
    hair_color: 'blond',
    skin_color: 'fair',
    eye_color: 'blue',
    birth_year: '19BBY',
    gender: 'male',
  },
  {
    name: 'C-3PO',
    height: '167',
    mass: '75',
    hair_color: 'n/a',
    skin_color: 'gold',
    eye_color: 'yellow',
    birth_year: '112BBY',
    gender: 'n/a'
  },
  {
    name: 'R2-D2',
    height: '96',
    mass: '32',
    hair_color: 'n/a',
    skin_color: 'white, blue',
    eye_color: 'red',
    birth_year: '33BBY',
    gender: 'n/a'
  },
  {
    name: 'Darth Vader',
    height: '202',
    mass: '136',
    hair_color: 'none',
    skin_color: 'white',
    eye_color: 'yellow',
    birth_year: '41.9BBY',
    gender: 'male'
  },
  {
    name: 'Leia Organa',
    height: '150',
    mass: '49',
    hair_color: 'brown',
    skin_color: 'light',
    eye_color: 'brown',
    birth_year: '19BBY',
    gender: 'female'
  }];
  
  let findMaleAndFemale = (data) => {
      return data.reduce((result, character) => {
        if (character.gender === male || character.gender === female) {
          return result + ' and ' + character.name;
        }
        return result; 
      })
  };
  
  
  /* ------------------------------------------------------------------------------------------------
  CHALLENGE 5
  
  Write a function named findShortest that, given the Star Wars data from Challenge 6, uses any combination of filter, map and reduce to return the name of the shortest character.
  ------------------------------------------------------------------------------------------------ */
  
  let findShortest = (data) => {
    data.map(data.height => {
      if data.height < data.height })
    //since I can't think of the syntax at all, I'm going to write my "process" thoughts and then pseudo-code it, and hope that you give me like half a point
    //basically, you need to GO INTO THE ARRAY (in this case, starWarsData), iterate over it, and hit the 'height' key of the objects within the array. Once you have height, you want to compare it to the next object's height value. If the currently set value of height is LESS THAN the height it is being compared to, it needs to continue thru the height values in the array, until it finds one that is LESS THAN. The LESS THAN value then continues thru the array as the new min, and is the compared value, until the smallest compared height reaches the end of the array. Once the smallest reaches the end of the array, it is RETURNED with its corresponding name key. Boom.
    data.map(over given array) => if current height < next height 
      then ++ thru array
      return smollestHeight + .name
  };
  
  /* ------------------------------------------------------------------------------------------------
  TESTS
  
  All the code below will verify that your functions are working to solve the challenges.
  
  DO NOT CHANGE any of the below code.
  
  Run your tests from the console: jest challenges-10.test.js
  
  ------------------------------------------------------------------------------------------------ */
  
  describe('Testing challenge 1', () => {
    test('It should return the number of times the input is in the nested arrays', () => {
      expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
      expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
      expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
    });
    test('It should work on empty arrays', () => {
      expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
      expect(count(5, [])).toStrictEqual(0);
    });
  });
  
  describe('Testing challenge 2', () => {
    test('It should add all the numbers in the arrays', () => {
      const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];
  
      expect(totalSum(nums)).toStrictEqual(66);
    });
  });
  
  describe('Testing challenge 3', () => {
    test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
      expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
    });
  
    test('It should return an empty array if none of the numbers are divisible by five', () => {
      expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
    });
  
    test('It should return an empty array if the values are not numbers', () => {
      expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
    });
  });
  
  describe('Testing challenge 4', () => {
    test('It should return only characters that are male or female', () => {
      expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
      expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
    });
  });
  
  describe('Testing challenge 5', () => {
    test('It should return the name of the shortest character', () => {
      expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
    });
  });
  // Solution code here...

};

/* ------------------------------------------------------------------------------------------------
TESTS

All the code below will verify that your functions are working to solve the challenges.

DO NOT CHANGE any of the below code.

Run your tests from the console: jest challenges-10.test.js

------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
  test('It should return the number of times the input is in the nested arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(4);
    expect(count(3, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(2);
    expect(count(12, [[1, 3, 5, 7, 9], [5, 5, 5], [1, 2, 3]])).toStrictEqual(0);
  });
  test('It should work on empty arrays', () => {
    expect(count(5, [[1, 3, 5, 7, 9], [], [5, 5, 5], [1, 2, 3], []])).toStrictEqual(4);
    expect(count(5, [])).toStrictEqual(0);
  });
});

describe('Testing challenge 2', () => {
  test('It should add all the numbers in the arrays', () => {
    const nums = [[1, 2, 3, 4, 5], [6, 7, 2, 4, 5, 7], [9, 2, 3, 6,]];

    expect(totalSum(nums)).toStrictEqual(66);
  });
});

describe('Testing challenge 3', () => {
  test('It should return numbers divisible by five, then raise two to the power of the resulting numbers', () => {
    expect(divisibleByFiveTwoToThePower([[10, 20, 5, 4], [5, 6, 7, 9], [1, 10, 3]])).toStrictEqual([[1024, 1048576, 32], [32], [1024]]);
  });

  test('It should return an empty array if none of the numbers are divisible by five', () => {
    expect(divisibleByFiveTwoToThePower([[1, 2, 3], [5, 10, 15]])).toStrictEqual([[], [32, 1024, 32768]]);
  });

  test('It should return an empty array if the values are not numbers', () => {
    expect(divisibleByFiveTwoToThePower([['one', 'two', 'five'], ['5', '10', '15'], [5]])).toStrictEqual([[], [], [32]]);
  });
});

describe('Testing challenge 4', () => {
  test('It should return only characters that are male or female', () => {
    expect(findMaleAndFemale(starWarsData)).toStrictEqual('Luke Skywalker and Darth Vader and Leia Organa');
    expect(findMaleAndFemale([{ name: 'person', gender: 'female' }, { gender: 'lol' }, { name: 'persontwo', gender: 'male' }])).toStrictEqual('person and persontwo');
  });
});

describe('Testing challenge 5', () => {
  test('It should return the name of the shortest character', () => {
    expect(findShortest(starWarsData)).toStrictEqual('R2-D2');
  });
<<<<<<< HEAD
>>>>>>> 181d6afc8add3d79c63dbe13c395665b537b7b5e
=======

>>>>>>> d21522ab4e3a44dc02ab5a192e6333c46c395a27
});
=======
>>>>>>> 9c69245edb6734eaaeb38383746b6311455c4e94
