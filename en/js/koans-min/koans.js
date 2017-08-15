jshero.koans.add({id:"var",title:"Variables",lesson:'JavaScript programs consist of a series of statements. Each statement performs an elementary operation. By executing many instructions you can finally solve complex tasks. Each statement is written in a line and closed with a semicolon.\x3cbr\x3e\x3cbr\x3eAn elementary statement is the declaration and initialization of a variable. In programming, a variable is a container for a value. The statement \x3cpre\x3e\x3ccode\x3evar city \x3d "Porbandar";\x3c/code\x3e\x3c/pre\x3edeclares a variable with the name \x3ccode\x3ecity\x3c/code\x3e and initializes it with the value \x3ccode\x3e"Porbandar"\x3c/code\x3e. The variable is declared with the keyword \x3ccode\x3evar\x3c/code\x3e. Use the equals sign, the assignment operator, to assign a value to the variable. Note: JavaScript is case-sensitive. \x3ccode\x3ecity\x3c/code\x3e and \x3ccode\x3eCity\x3c/code\x3e are two different variables.',
task:'Declare a variable \x3ccode\x3efirstname\x3c/code\x3e and initialize it with the value \x3ccode\x3e"Lata"\x3c/ code\x3e.',beforeTests:function(){"undefined"!==typeof firstname&&(firstname=void 0)},tests:[function(){var a="undefined"!==typeof firstname;return{ok:a,msg:a?"\x3ccode\x3efirstname\x3c/code\x3e has a value.":"\x3ccode\x3efirstname\x3c/code\x3e has no value."}},function(){var a="Lata"===firstname,b;b=a?'\x3ccode\x3efirstname\x3c/code\x3e has the value "Lata".':'\x3ccode\x3efirstname\x3c/code\x3e does not have the value \x3ccode\x3e"Lata"\x3c/code\x3e, but the value \x3ccode\x3e'+
JSON.stringify(firstname)+"\x3c/code\x3e.";return{ok:a,msg:b}}]});
jshero.koans.add({id:"var2",title:"Several variables",lesson:'Several variables are declared and initialized in 2 program lines:\x3cpre\x3e\x3ccode\x3evar city \x3d "Lubumbashi";\x3cbr\x3evar country \x3d "Congo";\x3c/code\x3e\x3c/pre\x3eEach line has a statement. Each statement should be terminated with a semicolon.',task:'Declare a variable \x3ccode\x3eflower\x3c/code\x3e and assign it the value \x3ccode\x3e"rose"\x3c/code\x3e. Declare a second variable \x3ccode\x3etree\x3c/code\x3e and assign it the value \x3ccode\x3e"maple"\x3c/code\x3e.',beforeTests:function(){"undefined"!==
typeof flower&&(flower=void 0);"undefined"!==typeof tree&&(tree=void 0)},tests:[function(){var a="undefined"!==typeof flower;return{ok:a,msg:a?"\x3ccode\x3eflower\x3c/code\x3e has a value.":"\x3ccode\x3eflower\x3c/code\x3e has no value."}},function(){var a="rose"===flower,b;b=a?'\x3ccode\x3eflower\x3c/code\x3e has the value \x3ccode\x3e"rose"\x3c/code\x3e.':"\x3ccode\x3eflower\x3c/code\x3e does not have the value \x3ccode\x3erose\x3c/code\x3e, but the value \x3ccode\x3e"+JSON.stringify(flower)+"\x3c/code\x3e.";
return{ok:a,msg:b}},function(){var a="undefined"!==typeof tree;return{ok:a,msg:a?"\x3ccode\x3etree\x3c/code\x3e has a value.":"\x3ccode\x3etree\x3c/code\x3e has no value."}},function(){var a="maple"===tree,b;b=a?'\x3ccode\x3etree\x3c/code\x3e has the value \x3ccode\x3e"maple"\x3c/code\x3e.':'\x3ccode\x3etree\x3c/code\x3e does not have the value \x3ccode\x3e"maple"\x3c/code\x3e, but the value \x3ccode\x3e'+JSON.stringify(tree)+"\x3c/code\x3e.";return{ok:a,msg:b}}]});
jshero.koans.add({id:"function",title:"Functions",lesson:'A function is a block of statements that can be executed as often as you like. A function can have parameters and can return a value. Functions are defined by the keyword \x3ccode\x3efunction\x3c/code\x3e, followed by the parameters enclosed in parentheses, followed by the instructions enclosed in curly brackets. Use the keyword \x3ccode\x3ereturn\x3c/code\x3e to return a value. At the same time \x3ccode\x3ereturn\x3c/code\x3e terminates the function. Functions can be assigned to a variable. Then the function carries the name of the variable. With \x3cpre\x3e\x3ccode\x3evar color \x3d function() {\x3cbr\x3e  return "red";\x3cbr\x3e};\x3c/code\x3e\x3c/pre\x3e we define a function \x3ccode\x3ecolor\x3c/code\x3e which returns the value \x3ccode\x3e"red"\x3c/code\x3e. The function has no parameters (the parentheses are empty) and contains only the return statement.\x3cbr\x3e\x3cbr\x3eA function is called by its name: \x3cpre\x3e\x3ccode\x3evar result \x3d color();\x3c/code\x3e\x3c/pre\x3eThe function \x3ccode\x3ecolor\x3c/code\x3e is executed and its return is assigned to the variable \x3ccode\x3eresult\x3c/code\x3e. \x3ccode\x3eresult\x3c/code\x3e therefore has the value \x3ccode\x3e"red"\x3c/code\x3e.',
task:'Write a function \x3ccode\x3ehello\x3c/code\x3e, which returns \x3ccode\x3e"Hello world!"\x3c/code\x3e.',beforeTests:function(){"undefined"!==typeof hello&&(hello=void 0)},tests:[function(){var a="function"===typeof hello;return{ok:a,msg:a?"\x3ccode\x3ehello\x3c/code\x3e is a function.":"\x3ccode\x3ehello\x3c/code\x3e is not a function."}},function(){var a,b,c;try{var d=hello();b=(a="Hello world!"===d)?'\x3ccode\x3ehello()\x3c/code\x3e returns \x3ccode\x3e"Hello world!"\x3c/code\x3e.':'\x3ccode\x3ehello()\x3c/code\x3e does not return \x3ccode\x3e"Hello world!"\x3c/code\x3e but \x3ccode\x3e'+
JSON.stringify(d)+"\x3c/code\x3e."}catch(e){a=!1,b="Error while calling \x3ccode\x3ehello()\x3c/code\x3e.",c=e}return{ok:a,msg:b,e:c}}]});
jshero.koans.add({id:"parameter",title:"Parameters",lesson:'Now we get to know functions with parameters. With \x3cpre\x3e\x3ccode\x3evar give \x3d function(input) {\x3cbr\x3e  return input;\x3cbr\x3e};\x3c/code\x3e\x3c/pre\x3ewe define a function which simply returns the parameter \x3ccode\x3einput\x3c/code\x3e. Parameters are variables. With\x3cpre\x3e\x3ccode\x3evar result \x3d give("apple");\x3c/code\x3e\x3c/pre\x3ewe call the function \x3ccode\x3egive\x3c/code\x3e and pass it the argument \x3ccode\x3e"apple"\x3c/code\x3e. \x3ccode\x3egive\x3c/code\x3e will be executed. The argument \x3ccode\x3e"apple"\x3c/code\x3e will be assigned to the parameter \x3ccode\x3einput\x3c/code\x3e. \x3ccode\x3einput\x3c/code\x3e gets the value \x3ccode\x3e"apple"\x3c/code\x3e. The variable \x3ccode\x3einput\x3c/code\x3e is returned in the single code line of the function \x3ccode\x3egive\x3c/code\x3e. This return is assigned to the variable \x3ccode\x3eresult\x3c/code\x3e. Finally, \x3ccode\x3eresult\x3c/code\x3e has the value \x3ccode\x3e"apple"\x3c/code\x3e. ',task:"Write a function \x3ccode\x3eecho\x3c/code\x3e, which also returns the passed parameter.",
beforeTests:function(){"undefined"!==typeof echo&&(echo=void 0)},tests:[function(){var a="function"===typeof echo;return{ok:a,msg:a?"\x3ccode\x3eecho\x3c/code\x3e is a function.":"\x3ccode\x3eecho\x3c/code\x3e is not a function."}},function(){var a=echo.length,b=1===a;return{ok:b,msg:b?"\x3ccode\x3eecho\x3c/code\x3e has 1 parameter.":"\x3ccode\x3eecho\x3c/code\x3e has not 1, but "+a+" parameters."}},function(){var a,b,c;try{var d=echo("Hello World!");b=(a="Hello World!"===d)?'\x3ccode\x3eecho("Hello World!")\x3c/code\x3e returns \x3ccode\x3e"Hello World!"\x3c/code\x3e.':
'\x3ccode\x3eecho("Hello World!")\x3c/code\x3e does not return \x3ccode\x3e"Hello World!"\x3c/code\x3e, but \x3ccode\x3e'+JSON.stringify(d)+"\x3c/code\x3e."}catch(e){a=!1,b='Error while calling \x3ccode\x3eecho("Hello World!")\x3c/code\x3e.',c=e}return{ok:a,msg:b,e:c}},function(){var a,b,c;try{var d=echo("rose");b=(a="rose"===d)?'\x3ccode\x3eecho("rose")\x3c/code\x3e returns \x3ccode\x3e"rose"\x3c/code\x3e.':'\x3ccode\x3eecho("rose")\x3c/code\x3e does not return \x3ccode\x3e"rose"\x3c/code\x3e, but \x3ccode\x3e'+
JSON.stringify(d)+"\x3c/code\x3e."}catch(e){a=!1,b='Error while calling \x3ccode\x3eecho("rose")\x3c/code\x3e.',c=e}return{ok:a,msg:b,e:c}}]});
jshero.koans.add({id:"string",title:"Strings",lesson:'We have seen that a variable is a container for a value. A value can be a text like \x3ccode\x3e"Hello world!"\x3c/code\x3e. Values have a type. The type of \x3ccode\x3e"Hello world!"\x3c/code\x3e is string. Strings are always written in single or double quotes. \x3ccode\x3e"Hello world!"\x3c/code\x3e is the same string as \x3ccode\x3e\'Hello world!\'\x3c/code\x3e.\x3cbr\x3eYou can work with strings. For example, they can be concatenated. This is done with the \x3ccode\x3e+\x3c/code\x3e sign. \x3ccode\x3e"Java" + "Script"\x3c/code\x3e result in the string \x3ccode\x3e"JavaScript"\x3c/code\x3e.\x3cbr\x3eThe following function appends \x3ccode\x3e" is great!"\x3c/code\x3e to the passed parameter and returns the result:\x3cpre\x3e\x3ccode\x3evar praise \x3d function(name) {\x3cbr\x3e  return name + " is great!";\x3cbr\x3e};\x3c/code\x3e\x3c/pre\x3e\x3ccode\x3epraise("JavaScript")\x3c/code\x3e will return \x3ccode\x3e"JavaScript is great!"\x3c/code\x3e.',task:'Write a function \x3ccode\x3egreet\x3c/code\x3e having one parameter and which returns \x3ccode\x3e"Hello \x26lt;parameter\x26gt;!"\x3c/code\x3e. \x3ccode\x3egreet("Ada")\x3c/code\x3e should return \x3ccode\x3e"Hello Ada!"\x3c/code\x3e and \x3ccode\x3egreet("Tayo")\x3c/code\x3e should return \x3ccode\x3e"Hello Tayo!"\x3c/code\x3e.',
beforeTests:function(){"undefined"!==typeof greet&&(greet=void 0)},tests:[function(){var a="function"===typeof greet;return{msg:a?"\x3ccode\x3egreet\x3c/code\x3e is a function.":"\x3ccode\x3egreet\x3c/code\x3e is not a function.",ok:a}},function(){var a=1===greet.length;return{ok:a,msg:a?"\x3ccode\x3egreet\x3c/code\x3e has 1 parameter.":"\x3ccode\x3egreet\x3c/code\x3e has not 1, but "+greet.length+" parameters."}},function(){var a,b,c;try{var d=greet("Ada");"Hello Ada!"===d?(a=!0,b='\x3ccode\x3egreet("Ada")\x3c/code\x3e returns \x3ccode\x3e"Hello Ada!"\x3c/code\x3e.'):
(a=!1,b='\x3ccode\x3egreet("Ada")\x3c/code\x3e does not return \x3ccode\x3e"Hello Ada!"\x3c/code\x3e, but \x3ccode\x3e'+JSON.stringify(d)+"\x3c/code\x3e.")}catch(e){a=!1,b='Error while calling \x3ccode\x3egreet("Ada")\x3c/code\x3e.',c=e}return{msg:b,ok:a,e:c}},function(){var a,b,c;try{var d=greet("Tayo");"Hello Tayo!"===d?(a=!0,b='\x3ccode\x3egreet("Tayo")\x3c/code\x3e returns \x3ccode\x3e"Hello Tayo!"\x3c/code\x3e.'):(a=!1,b='\x3ccode\x3egreet("Tayo")\x3c/code\x3e does not return \x3ccode\x3e"Hello Tayo!"\x3c/code\x3e, but \x3ccode\x3e'+
JSON.stringify(d)+"\x3c/code\x3e.")}catch(e){a=!1,b='Error while calling \x3ccode\x3egreet("Tayo")\x3c/code\x3e.',c=e}return{msg:b,ok:a,e:c}}]});
jshero.koans.add({id:"stringlength",title:"String: length",lesson:'Strings have the \x3ccode\x3elength\x3c/code\x3e property. This property returns the number of characters in a string. To do this, you must append \x3ccode\x3e.length\x3c/code\x3e to the string or to the variable that contains the string:\x3cpre\x3e\x3ccode\x3evar numberOfChars \x3d "Ai".length;\x3c/code/\x3e\x3c/pre\x3e\x3ccode\x3e"Ai"\x3c/code\x3e has 2 characters. So \x3ccode\x3enumberOfChars\x3c/code\x3e has the value \x3ccode\x3e2\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3evar name \x3d "Weiwei";\x3cbr\x3enumberOfChars \x3d name.length;\x3c/code/\x3e\x3c/pre\x3e\x3ccode\x3e"Weiwei"\x3c/code\x3e has 6 characters. \x3ccode\x3enumberOfChars\x3c/code\x3e now has the value \x3ccode\x3e6\x3c/code\x3e.\x3cpre\x3e\x3ccode\x3enumberOfChars \x3d "".length;\x3c/code/\x3e\x3c/pre\x3eThe empty string has no characters. The value of \x3ccode\x3enumberOfChars\x3c/code\x3e is \x3ccode\x3e0\x3c/code\x3e.',task:'Write a function \x3ccode\x3elength\x3c/code\x3e, which returns the number of characters of a passed string. \x3ccode\x3elength("sun")\x3c/code\x3e should return \x3ccode\x3e3\x3c/code\x3e.',
beforeTests:function(){"undefined"!==typeof length&&(length=void 0)},tests:[function(){var a="function"===typeof length;return{ok:a,msg:a?"\x3ccode\x3elength\x3c/code\x3e is a function.":"\x3ccode\x3elength\x3c/code\x3e is not a function."}},function(){var a=length.length,b=1===a;return{ok:b,msg:b?"\x3ccode\x3elength\x3c/code\x3e has 1 parameter.":"\x3ccode\x3elength\x3c/code\x3e has not 1, but "+a+" parameters."}},function(){var a,b,c;try{var d=length("Hello world!");b=(a=12===d)?'\x3ccode\x3elength("Hello world!")\x3c/code\x3e returns \x3ccode\x3e12\x3c/code\x3e.':
'\x3ccode\x3elength("Hello world!")\x3c/code\x3e does not return \x3ccode\x3e12\x3c/code\x3e, but \x3ccode\x3e'+JSON.stringify(d)+"\x3c/code\x3e."}catch(e){a=!1,b='Error while calling \x3ccode\x3elength("Hello world!")\x3c/code\x3e.',c=e}return{ok:a,msg:b,e:c}},function(){var a,b,c;try{var d=length("");b=(a=0===d)?'\x3ccode\x3elength("")\x3c/code\x3e returns \x3ccode\x3e0\x3c/code\x3e.':'\x3ccode\x3elength("")\x3c/code\x3e does not return \x3ccode\x3e0\x3c/code\x3e, but \x3ccode\x3e'+JSON.stringify(d)+
"\x3c/code\x3e."}catch(e){a=!1,b='Error while calling \x3ccode\x3elength("")\x3c/code\x3e.',c=e}return{ok:a,msg:b,e:c}}]});