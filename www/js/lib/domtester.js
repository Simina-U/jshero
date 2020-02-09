if(typeof jshero==="undefined"){var jshero={}}jshero.tester=function(koans,evaluator,log,i18n,LANGUAGE){i18n.setLanguage(LANGUAGE);var I18N=i18n.get;var run=function(code,callback){var result;var results=[];result=testInputNotEmpty(code);push(results,result);if(testPassed(results)){result=testSyntaxAndExecuteCode(code);push(results,result)}if(testPassed(results)){var tests=koans.get().tests;for(var i=0,l=tests.length;i<l;i++){result=tests[i]();push(results,result);if(!testPassed(results)){break}}}callback(results)};var testPassed=function(results){var lastIndex=results.length-1;if(lastIndex<0){return true}else{return results[lastIndex].ok}};var push=function(results,result){if(result){results.push(result)}};var testInputNotEmpty=function(code){if(code.length===0){return{ok:false,msg:I18N("writeCode")}}return null};var testSyntaxAndExecuteCode=function(code){log.clear();try{evaluator.init(code).evalParse();result={ok:true,msg:I18N("noSyntaxError")}}catch(e){result={ok:false,msg:I18N("syntaxError"),e:e}}result.logs=log.getAll();return result};return{run:run}}(jshero.koans,jshero.evaluator,jshero.log,jshero.i18n,jshero.language.LANGUAGE);