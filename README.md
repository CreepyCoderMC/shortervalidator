# Shorter Validator
This module is small but easy to use. The purpose of this module is to check if a target string is shorter than the source string, it can optionally also check if the source and target is the same length.
## Validation processes
The code checks that the source value is shorter in length than the target and optional if they are equal length.
### Compare method 1
This method compare both source value and target value length to see if source length is the longest.
### Compare method 2
This method can also check if the source length is equal to target length.
## Code sample
This following code is actually how I tested that all methods correctly functioned as intended, is also provided in this module.
```
import valueIsLonger from './node_modules/@teamcoder/shortervalidator/shortervalidator.js';

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
```
The results will look as follows
```
Testing Condition  1 Passed = true
Testing Condition  2 Passed = true
Testing Condition  3 Passed = true
Testing Condition  4 Passed = true
Testing Condition  5 Passed = true
Testing Condition  6 Passed = true
Testing Condition  7 Passed = true
Testing Condition  8 Passed = true
Testing Condition  9 Passed = true
Testing Condition 10 Passed = true
Testing Condition 11 Passed = true
Testing Condition 12 Passed = true
```
## Function Parameters
```
@param  { String , Array } source        The source value to be checked
@param  { String , Array } target        The target value to be checked
@param  { Boolean        } equal         Check if value is equal as well ( optional , default = false )
@return { Boolean        }               Validation passed or failed
```
## Version History
| Version  | Date                   | Remark                              |
|----------|------------------------|-------------------------------------|
| 1.0.0    | 07 September 2022      | Official first release              |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/shortervalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
ShorterValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)