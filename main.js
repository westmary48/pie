const pies = [
{
    name: 'Dutch Apple Pie',
    ingredients: 'Apples, sugar, butter, nutmeg, dutch people',
    bakeTemp: 5000,
    drinkParing:'beer',
    imgUrl: 'https://irepo.primecp.com/2016/10/303987/Dutch-Apple-Crumb-Pie_ArticleImage-CategoryPage_ID-1924708.jpg?v=1924708',
    instructor: 'Zoe',
    iceCream: 'Vanilla',
},
{
    name: 'Berry Pie',
    ingredients: 'berries',
    bakeTemp: 5000,
    drinkParing:'wine',
    imgUrl: 'https://www.simplyrecipes.com/wp-content/uploads/2010/07/black-berry-pie-horiz-a-1600.jpg',
    instructor: 'Zoe',
    iceCream: 'banana',
},
{
    name: 'test 3',
},
{
    name: 'test 2',
},
{
    name: 'test 1',
}
];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

const printPies = () => {
    let domString = '';
    for ( let i = 0; i < pies.length; i++) {
        domString += `<div class = 'container'>`
        domString += `<h3>${pies[i].name}</h3>`
        domString += `</div>`

        // console.log(pies[i].name);

    }
    printToDom('pies', domString);

}

const init = () => {
    printPies();
}

init();