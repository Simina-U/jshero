(function(testutil){jshero.koans.add({id:"jsx01",title:"Was ist x?",lesson:"Das eben gelernt wollen wir nochmal \xFCben. W\xE4hrend Du bei der ersten Aufgabe Code geschrieben hast,\nsollst du hier Code lesen.",task:"Welchen Wert hat <code>x</code> nach Ausf\xFChrung des folgenden Codes?\n<pre><code>var x = 'Josefine';</code></pre>",solution:"<pre><code>'Josefine'</code></pre>",tests:[function(){return testutil.assert_isString("Josefine")}]})})(jshero.testutil);