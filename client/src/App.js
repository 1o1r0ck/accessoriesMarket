import CaseCard from "./components/CaseCard/CaseCard";
import Header from "./components/Header";
import HeadphonesCard from "./components/Headphones/HeadphonesCard";


const HpItems = [
  {title: 'Apple EarPods',
  price: '2 999',
  img: '/assets/items/earpods1.png',
  },
  {title: 'Apple EarPods',
  price: '2 999',
  img: '/assets/items/earpods2.png',
  },
  {title: 'Apple EarPods',
  price: '2 999',
  img: '/assets/items/earpods3.png',
  },
]

function App() {
  return (
    <div className="wrapper">
      <Header />

      <div className="banner">
   
      </div>

      <div className="cases">
        <h1> Чехлы </h1>

        <div className="items">
          <CaseCard
            img={"/assets/items/glasscase.png"}
            name={"стеклянные"}
          />
        </div>
      </div>

      <div className="earpods">
        <h1> Наушники </h1>
        <div className="items">

      {HpItems.map((obj) => (
        <HeadphonesCard 
          title={obj.title}
          price={obj.price}
          img={obj.img}
        />
      ))}

      

        


        </div>
      </div>
    </div>
  );
}

export default App;
