function elect(electionData) {
 const totalVoted = Object.values(electionData).reduce(
   (previousValue, currentValue) => previousValue + currentValue);
   
 if (totalVoted < 50 || Math.max(...Object.values(electionData)) < 30) {
   return "not conclusive";
 } else if (totalVoted > 100) {
   return "wrong data";
 } else {
   return Object.keys(electionData).reduce((prevCandidate, currentCandidate) =>
     electionData[currentCandidate] < electionData[prevCandidate]
       ? prevCandidate
       : currentCandidate
   );
 }
}
module.exports = elect;