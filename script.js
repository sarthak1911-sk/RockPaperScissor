
        let userScore = 0;
        let compScore = 0;

        const choices = document.querySelectorAll(".choice");
        const msg = document.querySelector("#msg");
        const userScorepara = document.querySelector("#user-score");
        const compScorepara = document.querySelector("#comp-score");

        const computer = () => {
            let options = ["rock", "paper", "scissor"];
            const randIdx = Math.floor(Math.random() * 3);
            return options[randIdx];
        };

        const showWinner = (userWin, userchoice, compchoice) => {
            if (userWin) {
                userScore++;
                userScorepara.innerText = userScore;
                msg.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
                msg.style.backgroundColor = "green";
            } else {
                compScore++;
                compScorepara.innerText = compScore;
                msg.innerText = `You lose! ${compchoice} beats your ${userchoice}`;
                msg.style.backgroundColor = "red";
            }
        };

        const drawGame = () => {
            msg.innerText = "Game was a draw!";
            msg.style.backgroundColor = "purple";
        };

        const playgame = (userchoice) => {
            const compchoice = computer();
            if (userchoice === compchoice) {
                drawGame();
            } else {
                let userWin = true;
                if (userchoice === "rock") {
                    userWin = compchoice === "paper" ? false : true;
                } else if (userchoice === "paper") {
                    userWin = compchoice === "scissor" ? false : true;
                } else {
                    userWin = compchoice === "rock" ? false : true;
                }
                showWinner(userWin, userchoice, compchoice);
            }
        };

        choices.forEach((choice) => {
            choice.addEventListener("click", () => {
                const userchoice = choice.getAttribute("id");
                playgame(userchoice);
            });
        });
    