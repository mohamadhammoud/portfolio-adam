"use client";

import { useEffect, useState } from "react";

function ConsoleDiv() {
  const [openedApp, setOpenedApp] = useState(false);

  useEffect(() => {
    // function([string1, string2],target id,[color1,color2])

    if (openedApp) {
      return;
    }

    consoleText(
      [
        "Hi There I’m Adam.",
        "Passionate Blockchain Developer",
        "Welcome To My Portfolio",
      ],
      "text",
      ["lightblue", "lightblue", "lightblue"]
    );

    function consoleText(words: string[], id: string, colors: string[]) {
      if (colors === undefined) colors = ["#fff"];
      var visible = true;
      var con = document.getElementById("console");
      var letterCount = 1;
      var x = 1;
      var waiting = false;
      var target: any = document.getElementById(id);
      target.setAttribute("style", "color:" + colors[0]);
      window.setInterval(function () {
        if (letterCount === 0 && waiting === false) {
          waiting = true;
          target.innerHTML = words[0].substring(0, letterCount);
          window.setTimeout(function () {
            let usedColor = colors.shift();
            if (usedColor) {
              colors.push(usedColor);
            }

            let usedWord = words.shift();
            if (usedWord) {
              words.push(usedWord);
            }
            x = 1;
            target.setAttribute("style", "color:" + colors[0]);
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (letterCount === words[0].length + 1 && waiting === false) {
          waiting = true;
          window.setTimeout(function () {
            x = -1;
            letterCount += x;
            waiting = false;
          }, 1000);
        } else if (waiting === false) {
          target.innerHTML = words[0].substring(0, letterCount);
          letterCount += x;
        }
      }, 120);
      window.setInterval(function () {
        if (visible === true) {
          if (con) {
            con.className = "console-underscore hidden";
          }
          visible = false;
        } else {
          if (con) {
            con.className = "console-underscore";
          }

          visible = true;
        }
      }, 400);
    }

    setOpenedApp(true);
  });
  return (
    <div className="console-container">
      <span id="text"></span>
      <div className="console-underscore" id="console">
        &#95;
      </div>
    </div>
  );
}

export default ConsoleDiv;
