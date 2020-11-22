jshero.koans.add({id:"functional",title:"Funktionale Programmierung",lesson:"Bei der <a href=\"https://de.wikipedia.org/wiki/Funktionale_Programmierung\">funktionalen Programmierung</a>\nwerden Funktionen nicht nur wie bisher deklariert und aufgerufen, sondern Funktionen werden auch als Parameter\nan andere Funktionen \xFCbergeben oder Funktionen werden von Funktionen zur\xFCckgegeben. Eine St\xE4rke von JavaScript ist es, dass es\nebenso wie objektorientierte auch funktionale Programmierung unterst\xFCtzt.<br><br>\nIn JavaScript sind Funktionen n\xE4mlich Objekte, die wie alle anderen Objekte Variablen zugeordnet werden\nk\xF6nnen. Deklariert man eine Funktion mit dem Schl\xFCsselwort <code>function</code> und anschlie\xDFendem Funktionsnamen,\nso wir automatisch eine Variable mit dem Namen der Funktion erzeugt. Diese Variable enth\xE4lt als Wert die Funktion.<br><br>\nSchauen wir uns das Ganze am Beispiel der Array-Methode <code>map</code> (engl.: abbilden) an:\n\n<pre><code>function addOne(x) {\n  return x + 1;\n}\n\nlet startNumbers = [1, 2, 3];\nlet newNumbers = startNumbers.map(addOne);\nconsole.log(newNumbers); // > [2, 3, 4]</code></pre>\n\nDie Methothe <code>map()</code> verlangt als Parameter eine Funktion. In den ersten drei Zeilen haben wir einen Funktion\nmit dem Namen <code>addOne</code> deklariert. Mit dieser Deklaration wurde gleichzeitig die Variable mit dem Namen\n<code>addOne</code> erzeugt. Die Variable <code>addOne</code> enth\xE4lt die Funktion <code>addOne()</code>. Diese Funktion\nwird nun der Methode <code>map()</code> \xFCbergeben. Intern ruft jetzt <code>map()</code> die Funktion <code>addOne()</code>\nf\xFCr jedes Array-Element auf. Die Funktion <code>addOne()</code> wird also sukzessive mit den Werten <code>1</code>,\n<code>2</code> und <code>3</code> aufgerufen. Als Ergbnis erh\xE4lt man die Werte <code>2</code>, <code>3</code> und\n<code>4</code>. Diese Werte werden von <code>map()</code> als Array zur\xFCckgegeben.",task:"Schreibe eine Funktion <code>double</code>, die ein Array mit Zahlen entgegennimmt und die diese Zahlen\nverdoppelt als Array zur\xFCckgibt.<br><br>\nBeispiel: <code>double([1, 2, 3])</code> sollte <code>[2, 4, 6]</code> ergeben.",hint:"Versuche eine L\xF6sung mit Schleife und eine L\xF6sung mit der Array-Methode <code>map()</code> zu finden.",solution:"<pre><code>// mit Schleife\nfunction double(myNumbers) {\n  let result = [];\n  for (let i = 0; i < myNumbers.length; i++) {\n    result.push(myNumbers[i] * 2);\n  }\n  return result;\n}\n\n// mit map()\nfunction timesTwo(x) {\n  return 2 * x;\n}\n\nfunction double(myNumbers) {\n  return myNumbers.map(timesTwo);\n}</code></pre>",tests:[function(){return jshero.testutil.assert_isFunction("double")},function(){return jshero.testutil.assert_functionHasNumOfParameter("double",1)},function(){return jshero.testutil.assert_functionReturns("double([1])",[2])},function(){return jshero.testutil.assert_functionReturns("double([10, 15])",[20,30])},function(){return jshero.testutil.assert_functionReturns("double([1, 2, 3])",[2,4,6])}]});