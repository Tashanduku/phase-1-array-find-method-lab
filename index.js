// code your solution here
const record = [
    { year: '2015', result: 'W'},
    { year: '2014', result: 'N/A'},
    { year: '2015', result: 'L'},
]
const superbowlWin = (records) =>{
    const win = records.find(record => record.result === 'W');
    return win ? win.year : undefined;
}