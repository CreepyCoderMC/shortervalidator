import { valueIsShorter } from '@teamcoder/shortervalidator';

var array1 = [ 1 , 2 , 3 , 4 , 5 ];
var array2 = [ 1 , 2 , 3 , 4 ];

console.log( "Testing Condition  1 Passed = " + valueIsShorter(  "Hallo"  , "world"          ) );
console.log( "Testing Condition  2 Passed = " + !valueIsShorter( "Hallo " , "world"          ) );
console.log( "Testing Condition  3 Passed = " + valueIsShorter(  "Hallo"  , " world"         ) );
console.log( "Testing Condition  4 Passed = " + valueIsShorter(  "Hallo"  , "world"  , false ) );
console.log( "Testing Condition  5 Passed = " + !valueIsShorter( "Hallo " , "world"  , false ) );
console.log( "Testing Condition  6 Passed = " + valueIsShorter(  "Hallo"  , " world" , false ) );
console.log( "Testing Condition  7 Passed = " + valueIsShorter(  "Hallo"  , "world"  , true  ) );
console.log( "Testing Condition  8 Passed = " + !valueIsShorter( "Hallo " , "world"  , true  ) );
console.log( "Testing Condition  9 Passed = " + valueIsShorter(  "Hallo"  , " world" , true  ) );
console.log( "Testing Condition 10 Passed = " + !valueIsShorter(  array1  , array2           ) );
console.log( "Testing Condition 11 Passed = " + valueIsShorter(   array1  , array1           ) );
console.log( "Testing Condition 12 Passed = " + valueIsShorter(   array2  , array1           ) );