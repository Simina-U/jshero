jshero.koans.add({id:"array2",title:"Get array elements",lesson:"The elements of an array are accessed by an index beginning with 0.\n\n<pre><code>var languages = ['C', 'C++', 'Java'];\nvar c = languages[0];\nvar cPlusPlus = languages[1];\nvar java = languages[2];</code></pre>",task:"Write a function <code>getFirstElement</code> that takes an array and returns the first element of the array.\n<code>getFirstElement([1, 2])</code> should return <code>1</code>.",tests:[function(){return jshero.testutil.assert_isFunction("getFirstElement")},function(){return jshero.testutil.assert_functionHasNumOfParameter("getFirstElement",1)},function(){return jshero.testutil.assert_functionReturns("getFirstElement([1, 2])",1)},function(){return jshero.testutil.assert_functionReturns("getFirstElement(['Firefox', 'Chrome'])","Firefox")}]});