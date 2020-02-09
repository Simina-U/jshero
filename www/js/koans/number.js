jshero.koans.add({id:"number",title:"Zahlen",lesson:"Zahlen werden in JavaScript durch einfache Ziffern dargestellt. Sie k\xF6nnen einen\nDezimalpunkt und ein Minuszeichen besitzen.\n\n<pre><code>var x1 = 1;\nvar x2 = 1.0;\nvar x3 = 3.14;\nvar x4 = -1;</code></pre>\n\n<code>1</code> und <code>1.0</code> sind dieselbe Zahl. Mit Zahlen kann man rechnen. Die\nvier Grundrechenarten Addieren, Subtrahieren, Multiplizieren und Dividieren werden durch\n<code>+ - *</code> und <code>/</code> dargestellt.\n\n<pre><code>var x1 = 6;\nvar x2 = 2;\nvar x3 = x1 + x2;\nvar x4 = x1 - x2;\nvar x5 = x1 * x2;\nvar x6 = x1 / x2;</code></pre>\n\nDie Variablen <code>x3</code> bis <code>x6</code> haben so die Werte <code>8</code>,\n<code>4</code>, <code>12</code> und <code>3</code>.",task:"Schreibe eine Funktion <code>add</code>, die zwei Zahlen als Parameter entgegennimmt\nund deren Summe zur\xFCckgibt.<br><br>Zum Beispiel: <code>add(1, 2)</code> sollte <code>3</code> ergeben.",hint:"<pre><code>var add = function(x, y) {\n  return ...\n};</code></pre>",solution:"<pre><code>var add = function(x, y) {\n  return x + y;\n};</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("add")},function(){return jshero.testutil.assert_functionHasNumOfParameter("add",2)},function(){return jshero.testutil.assert_functionReturns("add(0, 0)",0)},function(){return jshero.testutil.assert_functionReturns("add(2, 3)",5)},function(){return jshero.testutil.assert_functionReturns("add(-1, 3)",2)}]});