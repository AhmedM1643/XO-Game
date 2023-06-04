console.log("Alo")
let turn = "X";
let btns = [];
let usable = true;
let title = document.querySelector(".title")

function check(i1, i2, i3) {
    for (let i = 1; i < 10; i++) {
        btns[i] = document.getElementById(`item-${i}`).innerHTML;
    }

    if (btns[i1] == btns[i2] && btns[i2] == btns[i3] && btns[i1] != "" && usable == true) {
        console.log("Done")
        usable = false;
        if (btns[i1] === "X") {
            title.innerHTML = `Player X is the winner.`
            setTimeout(() => title.innerHTML = `Player X is the winner..`, 500)
            setTimeout(() => title.innerHTML = `Player X is the winner...`, 1000)
            setTimeout(() => {location.reload()}, 1500)
        } else if (btns[i1] === "O") {
            title.innerHTML = `Player O is the winner.`
            setTimeout(() => title.innerHTML = `Player O is the winner..`, 500)
            setTimeout(() => title.innerHTML = `Player O is the winner...`, 1000)
            setTimeout(() => {location.reload()}, 1500)
        }
    } 
}

function select(id) {
    let target = document.querySelector(`#${id}`);

    if (turn === "X" && !target.hasAttribute("selected")) {
        target.innerHTML = turn;
        turn = "O";
        target.setAttribute("selected", true)
    } else if (turn === "O" && !target.hasAttribute("selected")) {
        target.innerHTML = turn;
        turn = "X";
        target.setAttribute("selected", true)
    }
    check(1,2,3);
    check(4,5,6);
    check(7,8,9);

    check(1,4,7);
    check(2,5,8);
    check(3,6,9);

    check(1,5,9);
    check(3,5,7);

}
