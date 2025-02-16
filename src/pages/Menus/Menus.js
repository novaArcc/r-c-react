import "./Menus.css"

const Menus = () => {
  return (
    <div className="menus-wrapper container pt-5 mb-5">


    {/*Main Menu*/}
      <h1 className="heading text-center">Main Menu</h1>

      <h2>Starters</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Soup of the day</div>
        <div class="col-2 col-sm-2 text-end price">£5.00</div>
      </div>


      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Garlic bread</div>
        <div class="col-2 col-sm-2 text-end price">£5.00</div>
      </div>

      <h2>Main Courses</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Lasagne, chips, salad (Vegetarian option available)</div>
        <div class="col-2 col-sm-2 text-end price">£12.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Chicken skewers and chips
        </div>
        <div class="col-2 col-sm-2 text-end price">£12.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Beef Casserole and mash</div>
        <div class="col-2 col-sm-2 text-end price">£12.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Chicken Tikka with chips/rice</div>
        <div class="col-2 col-sm-2 text-end price">£12.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Gammon, egg, chips, peas</div>
        <div class="col-2 col-sm-2 text-end price">£16.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Mexican bean burrito, chips, salad (Vg)</div>
        <div class="col-2 col-sm-2 text-end price">£12.50</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">All day breakfast</div>
        <div class="col-2 col-sm-2 text-end price">£18.00</div>
      </div>

      <h2>Sandwiches</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Cheese salad</div>
        <div class="col-2 col-sm-2 text-end price">£7.00</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Tuna mayo</div>
        <div class="col-2 col-sm-2 text-end price">£7.00</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Ham and cheese</div>
        <div class="col-2 col-sm-2 text-end price">£7.00</div>
      </div>
        <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Plain ham
        </div>
        <div class="col-2 col-sm-2 text-end price">£7.00</div>
      </div>

      <h2>Fries</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Plain fries (Vg, Gf)</div>
        <div class="col-2 col-sm-2 text-end price">£3.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Cheesy fries</div>
        <div class="col-2 col-sm-2 text-end price">£4.50</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Dirty fries - peppers, onions, tomato, jalepeno, cheese
        </div>
        <div class="col-2 col-sm-2 text-end price">£6.50</div>
      </div>

      {/*Kids Menu*/}
      <h1 className="heading text-center">Kids Menu</h1>
      <h2>Main Courses</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Ham and cheese toastie</div>
        <div class="col-2 col-sm-2 text-end price">£5.00</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Sausage, chips/mash, peas/beans</div>
        <div class="col-2 col-sm-2 text-end price">£7.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Lasagne and chips</div>
        <div class="col-2 col-sm-2 text-end price">£7.50</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Egg and chips</div>
        <div class="col-2 col-sm-2 text-end price">£6.50</div>
      </div>

      <h2>Desserts</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Black forest gateau</div>
        <div class="col-2 col-sm-2 text-end price">£4.00</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Strawberry gateau</div>
        <div class="col-2 col-sm-2 text-end price">£4.00</div>
      </div>

      {/*Dessert Menu*/}
      <h1 className="heading text-center">Dessert Menu</h1>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Dish Name</div>
        <div class="col-2 col-sm-2 text-end price">£10</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Dish Name</div>
        <div class="col-2 col-sm-2 text-end price">£10</div>
      </div>

      {/*Drinks Menu*/}
      <h1 className="heading text-center">Drinks Menu</h1>
      <h2>Beer & Cider</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Guinness</div>
        <div class="col-2 col-sm-2 text-end price">£4.40</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Amstel</div>
        <div class="col-2 col-sm-2 text-end price">£4.20</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Cruzcampo</div>
        <div class="col-2 col-sm-2 text-end price">£4.40</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Birra Moretti</div>
        <div class="col-2 col-sm-2 text-end price">£4.90</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Strongbow</div>
        <div class="col-2 col-sm-2 text-end price">£4.20</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Inches</div>
        <div class="col-2 col-sm-2 text-end price">£4.20</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Neck Oil</div>
        <div class="col-2 col-sm-2 text-end price">£4.40</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Butty Bach</div>
        <div class="col-2 col-sm-2 text-end price">£4.40</div>
      </div>

      <h2>Spirits</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Gin</div>
        <div class="col-2 col-sm-2 text-end price">£3.50/£5.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Vodka</div>
        <div class="col-2 col-sm-2 text-end price">£3.50/£5.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Rum</div>
        <div class="col-2 col-sm-2 text-end price">£3.50/£5.50</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Whiskey</div>
        <div class="col-2 col-sm-2 text-end price">£3.50/£5.50</div>
      </div>

      <h2>Wine</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Small</div>
        <div class="col-2 col-sm-2 text-end price">£4.50</div>
      </div>
            <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Medium</div>
        <div class="col-2 col-sm-2 text-end price">£5.20</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Large</div>
        <div class="col-2 col-sm-2 text-end price">£6.00</div>
      </div>

      <h2>Soft Drinks</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">J20</div>
        <div class="col-2 col-sm-2 text-end price">£3.20</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Fruit Juice</div>
        <div class="col-2 col-sm-2 text-end price">£2.00</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Tonic Water</div>
        <div class="col-2 col-sm-2 text-end price">£2.50</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Coca Cola</div>
        <div class="col-2 col-sm-2 text-end price">£3.00</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Lemonade</div>
        <div class="col-2 col-sm-2 text-end price">£3.00</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Icetea</div>
        <div class="col-2 col-sm-2 text-end price">£3.00</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Squash</div>
        <div class="col-2 col-sm-2 text-end price">£1.00</div>
      </div>
      <div class="row align-items-center menu-item mb-4">
        <div class="col-10 col-sm-10 ps-0">Soda</div>
        <div class="col-2 col-sm-2 text-end price">£1.00</div>
      </div>

      <h2>Shots - 3 for £10</h2>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Sourz</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Tequila Rose</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Baby Guiness</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Jager Bomb</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Passoa Bomb</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Skittle Bomb</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">Sambuca</div>
      </div>
      <div class="row align-items-center menu-item">
        <div class="col-10 col-sm-10 ps-0">B52</div>
      </div>


    </div>
  )
}

export default Menus

