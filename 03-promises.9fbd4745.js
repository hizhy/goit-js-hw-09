!function(){var e=document.querySelector('input[name="delay"]'),n=document.querySelector('input[name="step"]'),o=document.querySelector('input[name="amount"]');function t(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}document.querySelector(".form").addEventListener("submit",(function(u){u.preventDefault();for(var c=Number(e.value),i=Number(n.value),a=1;a<=o.value;a+=1)t(a,c).then((function(e){var n=e.position,o=e.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(o,"ms"))})).catch((function(e){var n=e.position,o=e.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(o,"ms"))})),c+=i}))}();
//# sourceMappingURL=03-promises.9fbd4745.js.map