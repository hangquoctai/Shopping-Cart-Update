import Img1 from './../img/01.jpg';
import Img2 from './../img/02.jpg';
import Img3 from './../img/03.jpg';
import Img4 from './../img/04.jpg';
import Img5 from './../img/05.jpg';
import Img6 from './../img/06.jpg';
import Img7 from './../img/07.jpg';
import Img8 from './../img/08.jpg';
import Img9 from './../img/09.jpg';

var initialState = [
        {
          id: 1,
          name: "Home",
          image: Img1,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 1000
        },
        {
          id: 2,
          name: "School",
          image:Img2,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 2500
        },
        {
          id: 3,
          name: "Hotel",
          image:Img3,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 1500
        },
        {
          id: 4,
          name: "Hotel",
          image: Img4,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 500
        },
        {
          id: 5,
          name: "Hotel",
          image:Img5,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 700
        },
        {
          id: 6,
          name: "Hotel",
          image:Img6,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 1300
        },
        {
          id: 7,
          name: "Hotel",
          image: Img7,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 1800
        },
        {
          id: 8,
          name: "Hotel",
          image:Img8,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 3000
        },
        {
          id: 9,
          name: "Hotel",
          image:Img9,
          description: "2 kitchens, 2 bed, 2 bath...",
          price: 900
        }
];

const products = (state=initialState,action) => {
  switch(action.type){
      default:return [...state];
  }
}

export default products;