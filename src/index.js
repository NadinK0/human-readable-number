module.exports = function toReadable (number) {
  const m1_10 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
  const m20_90 = ['twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
  const m100 = ['hundred'];
  let newArr = Array.from(String(number), Number);
    let l = newArr.length;
    let readableNumber;
    if (l < 3 && number < 20 ) 
    {
      readableNumber = m1_10[number];
    } else if (l < 3)
      {
        newArr[newArr.length-1] === 0 ? readableNumber = m20_90[newArr[0]-2] : readableNumber = `${m20_90[newArr[0]-2]} ${m1_10[newArr[newArr.length-1]]}`;
      } else if (l < 4) 
        {
          newArr[newArr.length-1] === 0 ? 
    
            newArr[newArr.length-2] === 0 ? 
            readableNumber = `${m1_10[newArr[0]]} ${m100[0]}` : 
            readableNumber = `${m1_10[newArr[0]]} ${m100[0]} ${m20_90[newArr[1]-2]}` : 
    
            newArr[newArr.length-2] === 0? 
            readableNumber = `${m1_10[newArr[0]]} ${m100[0]} ${m1_10[newArr[newArr.length-1]]}`:
            readableNumber = `${m1_10[newArr[0]]} ${m100[0]} ${m20_90[newArr[1]-2]} ${m1_10[newArr[newArr.length-1]]}`;
        }

        return readableNumber;
}
