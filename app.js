    const userChoises = document.querySelectorAll(".choise");
    const message = document.querySelector(".msg");
    const userResultEle = document.querySelector("#user-result");
    const computerResultEle = document.querySelector("#computer-result");
    const comRockEle = document.getElementById("com-rock");
    const comPaperEle = document.getElementById("com-paper");
    const comScissorEle = document.getElementById("com-scissor");

    let userResult = 0;
    let computerResult = 0;
    let computerChoises = ["rock", "paper", "scissor"];

    function computerSelect() {
      const randomNumber = Math.floor(Math.random() * 3);
      return computerChoises[randomNumber];
    }

    function computerWin() {
      message.style.backgroundColor = "#f04040ee";
      message.style.color = "white";
      computerResult++;
      computerResultEle.innerText = computerResult;
    }

    function userWin() {
      message.style.backgroundColor = "green";
      message.style.color = "white";
      userResult++;
      userResultEle.innerText = userResult;
    }

    function clearHighlights() {
      [comRockEle, comPaperEle, comScissorEle].forEach(el => el.classList.remove("opacity"));
    }

    function highlightComputerChoice(choice) {
      clearHighlights();
      if (choice === "rock") comRockEle.classList.add("opacity");
      if (choice === "paper") comPaperEle.classList.add("opacity");
      if (choice === "scissor") comScissorEle.classList.add("opacity");
    }

    function playGame(userChoise) {
      const computerChoise = computerSelect();
      highlightComputerChoice(computerChoise);

      if (userChoise === computerChoise) {
        message.style.backgroundColor = "#ccc";
        message.style.color = "#000";
        return message.innerText = "It's a Draw";
      }

      if ((userChoise === "rock" && computerChoise === "scissor") ||
          (userChoise === "paper" && computerChoise === "rock") ||
          (userChoise === "scissor" && computerChoise === "paper")) {
        userWin();
        message.innerText = `You Won! ${userChoise} beats ${computerChoise}`;
      } else {
        computerWin();
        message.innerText = `Computer Won! ${computerChoise} beats ${userChoise}`;
      }
    }

    userChoises.forEach(choise => {
      choise.addEventListener("click", () => {
        const userChoise = choise.id;
        playGame(userChoise);
      });
    });