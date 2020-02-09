jshero.koans.add({id:"stringlength",title:"String: length",lesson:"Strings besitzen die Eigenschaft <code>length</code>. Diese Eigenschaft liefert die Anzahl der Zeichen eines Strings.\nDazu muss man dem String  oder der Variablen, die den String enth\xE4lt, <code>.length</code> anh\xE4ngen:\n\n<pre><code>var anzahl = 'Franz'.length;</code/></pre>\n\n<code>'Franz'</code> hat 5 Zeichen. Also erh\xE4lt <code>anzahl</code> den Wert <code>5</code>.\n\n<pre><code>var stadt = 'Prag';\nanzahl = stadt.length;</code/></pre>\n\n<code>'Prag'</code> hat 4 Zeichen. <code>anzahl</code> hat jetzt den Wert <code>4</code>.\n\n<pre><code>anzahl = ''.length;</code/></pre>\n\nDer Leerstring besitzt keine Zeichen. Der Wert von <code>anzahl</code> ist jetzt <code>0</code>.",task:"Schreibe eine Funktion <code>laenge</code>, die bei \xDCbergabe eines Strings die Anzahl der Zeichen dieses\nStrings zur\xFCckgibt.<br><br>Zum Beispiel: <code>laenge('Franz')</code> sollte <code>5</code> zur\xFCckgeben.",hint:"<pre><code>var laenge = function(s) {\n...\n};</code/></pre>",solution:"<pre><code>var laenge = function(s) {\n  return s.length;\n};</code/></pre>",tests:[function(){return jshero.testutil.assert_isFunction("laenge")},function(){return jshero.testutil.assert_functionHasNumOfParameter("laenge",1)},function(){return jshero.testutil.assert_functionReturns("laenge('Hallo Welt!')",11)},function(){return jshero.testutil.assert_functionReturns("laenge('')",0)}]});