const pies = [
    {
      name: 'Dutch Apple Pie',
      ingredients: 'apples,sugar,butter,nutmeg,dutch people',
      bakeTemp: 5000,
      drinkPairing: 'Earl Grey Tea',
      imageUrl: 'https://search.chow.com/thumbnail/800/0/www.chowstatic.com/assets/2013/09/30859_Recipeimage_620x413_dutch_apple_pie.jpg',
      instructor: 'Zoe',
      iceCream: 'Vanilla',
    },
    {
      name: 'Berry Pie',
      ingredients: 'berries',
      bakeTemp: 400,
      drinkPairing: 'wine',
      imageUrl: 'https://tastesbetterfromscratch.com/wp-content/uploads/2015/11/Triple_Berry_Pie8.jpg',
      instructor: 'Zoe',
      iceCream: 'banana',
    },
    {
      name: 'Pumpkin Pie',
      ingredients: 'pumpkins, nutmeg, cinnamon, graham crackers, pilgrims',
      bakeTemp: 42,
      drinkPairing: 'egg nog',
      imageUrl: 'https://cf-images.us-east-1.prod.boltdns.net/v1/static/1033249144001/22a0c25d-2fee-415c-a4e7-91d008e276bb/a904f3e2-3cd9-40d6-ace9-f8dbd2d616cd/1280x720/match/image.jpg',
      instructor: 'Michael',
      iceCream: 'Vanilla',
    },
    {
      name: 'Shoo Fly Pie',
      ingredients: 'Molasses, nutmeg, cinnamon, butter, graham cracker ',
      bakeTemp: 1234,
      drinkPairing: 'Apple Cider',
      imageUrl: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
      instructor: 'Michael',
      iceCream: 'Coffee',
    },
    {
      name: 'Pecan Pie',
      ingredients: 'Pecans, sugar, butter, flour',
      bakeTemp: 5000,
      drinkPairing: 'Milk',
      imageUrl: 'https://cookiesandcups.com/wp-content/uploads/2018/10/pecanpie-3.jpg',
      instructor: 'Saul',
      iceCream: 'Vanilla',
    },
    {
      name:'Keylime Pie',
      ingredients: 'lemons, sugar, butter, flour',
      bakeTemp: 5000,
      drinkPairing: 'Water',
      imageUrl: 'https://www.williams-sonoma.com/wsimgs/rk/images/dp/recipe/201851/0020/img38l.jpg',
      instructor: 'Saul',
      iceCream: 'none',
    },
  ];

const printToDom = (divId, textToPrint) => {
    const selectedDiv = document.getElementById(divId);
    selectedDiv.innerHTML = textToPrint
}

// for each loop
// dont have to use [i]
// dont have to write out the for each stuff
// single iteration is pie instead of pies
// array name comes before the forEach
const printPies = (monkeybutts) => {
    let domString = '';
    monkeybutts.forEach((pie) => {
        domString += `<div class = 'card'>`
        domString += `<h3>${pie.name}</h3>`
        domString += `<h3>${pie.ingredients}</h3>`
        domString += `<h3>${pie.bakeTemp}</h3>`
        domString += `<h3>${pie.drinkPairing}</h3>`
        domString += `<img class= "img" src= "${pie.imageUrl}">`
        domString += `<h3>${pie.instructor}</h3>`
        domString += `<h3>${pie.iceCream}</h3>`
        domString += `</div>`

    })

    printToDom('pies', domString);
};

const buttonClick = (e) => {
  const buttonId = e.target.id;
  // console.log('you clicked a button', e.target.id);
  // what goes in the () = action and the function
  // have access to global variables array pies and every function on the page
  // need to loop over the pies array
  // if the value of the instructor key is the same as the buttonId - keep that object
  // once we have all the pies for that instructor - print (call pie builder)
  const selectedPies = [];
  pies.forEach((pie) => {
    if(pie.instructor === buttonId) {
      selectedPies.push(pie);
  }
  });
// reason why we put this conditional outside for each loop is that the instructor never equals all
if ( buttonId === 'All') {
  printPies(pies);
}else {
  printPies(selectedPies);
}
};

const buttonEvents = () => {
  document.getElementById('Zoe').addEventListener('click', buttonClick)
  document.getElementById('Saul').addEventListener('click', buttonClick)
  document.getElementById('Michael').addEventListener('click', buttonClick)
  document.getElementById('All').addEventListener('click', buttonClick)

}

// FOR LOOP METHOD - BOTH METHODS WORK

// const printPies = () => {
//     let domString = '';
//     for ( let i = 0; i < pies.length; i++) {
//         domString += `<div class = 'container'>`
//         domString += `<h3>${pies[i].name}</h3>`
//         domString += `</div>`

//         // console.log(pies[i].name);

//     }
//     printToDom('pies', domString);

// }

const init = () => {
    printPies(pies);
    buttonEvents();
}

init();

// dev tools
// element tag is good for styling - can add to height, width, etc without having to hard refresh
// console - mess iwth JS also good with errors; always start with the top error