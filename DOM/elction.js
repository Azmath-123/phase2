let elonVotes=0;
let cr07Votes=0;
let m10Votes=0;
let totalCount =0;
function elonVoteCount(){
    elonVotes++;
    totalCount++;
    stopVotes(totalCount);
    // console.log(totalCount,"total");
    // console.log(elonvotes,'Votes Of Elon');
}

function cr07VoteCount(){
    cr07Votes++;
    totalCount++;
    stopVotes(totalCount);
    // console.log(totalCount,"total");
    // console.log(cr7votes,'Votes Of Elon');
}

function m10VoteCount(){
    m10Votes++;
    totalCount++;
    stopVotes(totalCount);
    // console.log(totalCount,"total");
    // console.log(m10votes,'Votes Of Elon');
}

function stopVotes(count){
    if(count>=8){
        document.getElementById('displayText').innerHTML="Voting Closed"
        ldocument.getElementById ("elonBtn").disabled=true;
         document.getElementById ("cr07Btn").disabled=true;
         document.getElementById ("m10Btn").disabled=true;
         console.log(count);
         console.log(`total votes of CR07=${cr07votes}`);
         console.log(`total votes of m10=${m10Votes}`);
         console.log(`total votes of elon=${elonVotes}`);
    }
}
stopVotes(totalCount);
