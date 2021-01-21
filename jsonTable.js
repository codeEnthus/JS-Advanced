function jsonTable(array) {

    let result = []
    let personInfo = array.map(x => JSON.parse(x)).forEach(element => {
        result.push(element.name, element.position, element.salary)
    });

    console.log('<table>');
    console.log('    ' + '<tr>')
    let count = 0;

    for (const line of result) {
        count++;
        if (count === result.length) {
            console.log('       ' + '<td>' + line + '</td>');
            console.log('    ' + '</tr>')
            break;
        }
        console.log('       ' + '<td>' + line + '</td>');
        if (count % 3 === 0) {
            console.log('    ' + '</tr>')
            console.log('    ' + '<tr>')
        }
    }
    console.log('</table>');

}