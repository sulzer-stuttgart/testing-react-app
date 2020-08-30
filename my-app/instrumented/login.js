function cov_yg6zotie2() {
  var path = "/Users/mustafamasetic/sulzer-test-automation/testing-react-app/my-app/src/login.js";
  var hash = "8c9111fbae724e4c6fe9df369e289dc62464fdc8";
  var global = new Function("return this")();
  var gcv = "__coverage__";
  var coverageData = {
    path: "/Users/mustafamasetic/sulzer-test-automation/testing-react-app/my-app/src/login.js",
    statementMap: {},
    fnMap: {},
    branchMap: {},
    s: {},
    f: {},
    b: {},
    _coverageSchema: "1a1c01bbd47fc00a2c39e90264f33305004495a9",
    hash: "8c9111fbae724e4c6fe9df369e289dc62464fdc8"
  };
  var coverage = global[gcv] || (global[gcv] = {});

  if (!coverage[path] || coverage[path].hash !== hash) {
    coverage[path] = coverageData;
  }

  var actualCoverage = coverage[path];
  {
    // @ts-ignore
    cov_yg6zotie2 = function () {
      return actualCoverage;
    };
  }
  return actualCoverage;
}

cov_yg6zotie2();
import React from 'react';
/* function loginFunction() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var title = document.getElementById("Title");

    title.innerHTML = "";

    if(email.value.length < 1 || password.value.lenght < 1){
        title.innerHTML = "Bitte E-Mail Adresse und Passwort eingeben!";
        return;
    }

    if((email.value === "mustafa@sulzer.de") && (password.value === "Password1!")){
        title.innerHTML = "Login erfolgreich: Mustafa Masetic!";
    }else{
        title.innerHTML = "Falsche E-mail Adresse oder Passwort!";
    }
  } */
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmpzIl0sIm5hbWVzIjpbIlJlYWN0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlWTs7Ozs7Ozs7O0FBZlosT0FBT0EsS0FBUCxNQUFrQixPQUFsQjtBQUlBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcblxuXG5cbi8qIGZ1bmN0aW9uIGxvZ2luRnVuY3Rpb24oKSB7XG4gICAgdmFyIGVtYWlsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbFwiKTtcbiAgICB2YXIgcGFzc3dvcmQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcInBhc3N3b3JkXCIpO1xuICAgIHZhciB0aXRsZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiVGl0bGVcIik7XG5cbiAgICB0aXRsZS5pbm5lckhUTUwgPSBcIlwiO1xuXG4gICAgaWYoZW1haWwudmFsdWUubGVuZ3RoIDwgMSB8fCBwYXNzd29yZC52YWx1ZS5sZW5naHQgPCAxKXtcbiAgICAgICAgdGl0bGUuaW5uZXJIVE1MID0gXCJCaXR0ZSBFLU1haWwgQWRyZXNzZSB1bmQgUGFzc3dvcnQgZWluZ2ViZW4hXCI7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBpZigoZW1haWwudmFsdWUgPT09IFwibXVzdGFmYUBzdWx6ZXIuZGVcIikgJiYgKHBhc3N3b3JkLnZhbHVlID09PSBcIlBhc3N3b3JkMSFcIikpe1xuICAgICAgICB0aXRsZS5pbm5lckhUTUwgPSBcIkxvZ2luIGVyZm9sZ3JlaWNoOiBNdXN0YWZhIE1hc2V0aWMhXCI7XG4gICAgfWVsc2V7XG4gICAgICAgIHRpdGxlLmlubmVySFRNTCA9IFwiRmFsc2NoZSBFLW1haWwgQWRyZXNzZSBvZGVyIFBhc3N3b3J0IVwiO1xuICAgIH1cbiAgfSAqLyJdfQ==