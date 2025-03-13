// code your solution here
function superbowlWin(record) {
    const recordWin= record.find(game => game.result === "W");
    return recordWin ? recordWin.year : undefined;
  }

  console.log(recordWin)