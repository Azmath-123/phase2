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
    }
}
stopVotes(totalCount);
