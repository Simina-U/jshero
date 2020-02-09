jshero.koans.add({id:"xor",title:"XOR",lesson:"Die logischen Operatoren kennen, \xE4hnlich der Punkt- vor Strich-Rechnung, eine Reihenfolge:\nNICHT zuerst, anschlie\xDFend UND, zuletzt ODER. M\xF6chte man diese Reihenfolge \xE4ndern, verwendet man Klammern:\n\n<pre><code>var x1 = true || false && false;\nvar x2 = (true || false) && false;\nvar x3 = !false && false;\nvar x4 = !(false && false);</code></pre>\n\nIn der ersten Zeile wird zuerst UND ausgewertet. <code>x1</code> wird <code>true</code>.\nIn der zweiten Zeile wird zuerst ODER ausgewertet. <code>x2</code> wird <code>false</code>.\nIn der dritten Zeile wird zuerst NICHT ausgewertet. <code>x3</code> wird <code>false</code>.\nUnd in der vierten Zeile wird zuerst UND ausgewertet. <code>x4</code> wird <code>true</code>.<br><br>\nIn der folgenden Aufgabe sollst du ein weiteres wichtiges Gatter, das XOR-Gatter (engl.: eXclusive OR - exklusives oder), programmieren.",task:"Schreibe eine Funktion <code>xor</code>, die zwei boolesche Werte als Parameter entgegennimmt.\nDie R\xFCckgabe der Funktion soll <code>true</code> sein, wenn beide Paramter verschieden sind.\nIn den anderen F\xE4llen soll die R\xFCckgabe <code>false</code> sein. <code>xor(true, false)</code> und\n<code>xor(false, true)</code> sollen <code>true</code> liefern, <code>xor(true, true)</code> und\n<code>xor(false, false)</code> sollen <code>false</code> zur\xFCckgeben.",tests:[function(){return jshero.testutil.assert_isFunction("xor")},function(){return jshero.testutil.assert_functionHasNumOfParameter("xor",2)},function(){return jshero.testutil.assert_functionReturns("xor(true, true)",false)},function(){return jshero.testutil.assert_functionReturns("xor(true, false)",true)},function(){return jshero.testutil.assert_functionReturns("xor(false, true)",true)},function(){return jshero.testutil.assert_functionReturns("xor(false, false)",false)}]});