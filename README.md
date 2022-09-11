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
import { valueIsLonger } from '@teamcoder/shortervalidator';

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
### Parameters Passed
```
@param  { String , Array } source        The source value to be checked
@param  { String , Array } target        The target value to be checked
@param  { Boolean        } equal         Check if value is equal as well ( optional , default = false )
```
### Parameters Returned
```
@return { Boolean        }               Validation passed or failed
```
## Notes Before You Start
Very important to remember to always include the following in your main project package.json file:
```
"type": "module"
```
Without this entry in the package file you will get the following error if you try to run your project
```
(node:15500) Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.
(Use 'node --trace-warnings ...' to show where the warning was created)
C:\Users\ ... \shortervalidator\shortervalidator.js:1
import { valueIsShorter } from '@teamcoder/shortervalidator';
```
## Version History
| Version  | Date                   | Remark                                                                                                |
|----------|------------------------|-------------------------------------------------------------------------------------------------------|
| 1.0.0    | 07 September 2022      | Official first release                                                                                |
| 1.0.1    | 09 September 2022      | Fixed package.json so that npm can install on any os                                                  |
| 1.0.2    | 10 September 2022      | Fixed code to be proper npm package                                                                   |
| 1.0.3    | 11 September 2022      | Removed Default from export function in shortervalidator.js file                                      |
## How To Install
Run the following command in a terminal or command prompt in the folder you want to install the module to.
> npm i @teamcoder/shortervalidator
## Operating Systems Tested On
>Windows, Linux and RaspberryPi
## License Information
ShorterValidator © 2022 by Adriaan J. van Rensburg (CreepyCoderMC) is licensed under CC BY-NC-ND 4.0.
> To view a online copy of this license, visit [http://creativecommons.org/licenses/by-nc-nd/4.0/](http://creativecommons.org/licenses/by-nc-nd/4.0/)