let elonVotes=0;
let cr07Votes=0;
let m10Votes=0;
let totalCount =0;
function elonVoteCount(){
    elonVotes++;
    totalCount++;
    stopVotes(totalCount);
}

function cr07VoteCount(){
    cr07Votes++;
    totalCount++;
    stopVotes(totalCount);
}

function m10VoteCount(){
    m10Votes++;
    totalCount++;
    stopVotes(totalCount);
}

function stopVotes(count){
    if(count>=8){
        document.getElementById('displayText').innerText="Voting Closed"
        document.getElementById ("elonBtn").disabled=true;
         document.getElementById ("cr07Btn").disabled=true;
         document.getElementById ("m10Btn").disabled=true;
         console.log(count);
         console.log(`total votes of CR07=${cr07Votes}`);
         console.log(`total votes of m10=${m10Votes}`);
         console.log(`total votes of elon=${elonVotes}`);
         displayWinner();
    }
}
function displayWinner() {
    let winner = '';
    if (elonVotes > cr07Votes && elonVotes > m10Votes) {
        winner = 'Elon';
    } else if (cr07Votes > elonVotes && cr07Votes > m10Votes) {
        winner = 'CR07';
    } else if (m10Votes > elonVotes && m10Votes > cr07Votes) {
        winner = 'M10';
    } else {
        winner = 'It\'s a tie!';
    }

    alert(`The winner is: ${winner}`);
}
stopVotes(totalCount);
