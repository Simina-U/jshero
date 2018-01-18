jshero.koans.add({

  id: 'stringsubstr',

  title: 'String: substr()',

  lesson: `Die Methode <code>substr</code> extrahiert aus einen String einen Teilstring:

<pre><code>var see = "see and stop".substr(0, 3);
var and = "see and stop".substr(4, 3);
var stop = "see and stop".substr(8);</code></pre>

Der erste Parameter gibt an, von welcher Stelle an der Substring extrahiert werden soll.
Der zweite Parameter gibt an, wieviel Zeichen ab der festgelegten Stelle extrahiert werden sollen.
Ist der zweite Paramter nicht angegeben, so wird immer bis zum Ende des ursprüglichen Strings extrahiert.`,

  task: `Schreibe eine Funktion <code>firstWord</code>, die einen String entgegennimmt und das erste Wort
in diesem String zurückgibt. Das erste Wort sind dabei alle Zeichen bis zum ersten Leerzeichen.
<code>firstWord("Wo ist hier")</code> sollte <code>"Wo"</code> zurückgeben.`,

  beforeTests: function() {
    if (typeof firstWord !== "undefined") {
      firstWord = undefined;
    }
  },

  tests: [
    function() {
      return jshero.testutil.assert_isFunction('firstWord');
    },

    function() {
      return jshero.testutil.assert_functionHasNumOfParameter('firstWord', 1);
    },

    function() {
      return jshero.testutil.assert_functionReturns('firstWord("Wo ist hier")', 'Wo');
    },

    function() {
      return jshero.testutil.assert_functionReturns('firstWord("Irres Licht")', 'Irres');
    }
  ]

});