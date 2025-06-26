import PizzaFooter from "../components/PizzaFooter";
import "../styles/MenuItems.css";

export default function MenuItems({ activeSelector }) {
  const renderTriplet = () => {
    switch (activeSelector) {
      case 0:
        return (
          <div className="triplet">
            <div className="tripletBowl">
              <img src="/images/newImages/bowl1-removebg-preview.png" alt="" />
              <PizzaFooter />
            </div>
            <div className="tripletBowl">
              <img src="/images/newImages/bowl2-removebg-preview.png" alt="" />
              <PizzaFooter />
            </div>
            <div className="tripletBowl">
              <img src="/images/newImages/bowl3-removebg-preview.png" alt="" />
              <PizzaFooter />
            </div>
          </div>
        );
      case 1:
        return (
          <div className="triplet">
            <div className="tripletPizza">
              <img src="/images/newImages/pizza1-removebg-preview.png" alt="" />
              <PizzaFooter />
            </div>
            <div className="tripletPizza">
              <img
                src="/images/iteration-2-images/pictures/food-1.png"
                alt=""
              />
              <PizzaFooter />
            </div>
            <div className="tripletPizza">
              <img
                src="/images/iteration-2-images/pictures/food-2.png"
                alt=""
              />
              <PizzaFooter />
            </div>
          </div>
        );
      case 2:
        return (
          <div className="triplet">
            <div className="tripletHamburger">
              <img
                src="/images/newImages/hamburger1-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
            <div className="tripletHamburger">
              <img
                src="/images/newImages/hamburger2-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
            <div className="tripletHamburger">
              <img
                src="/images/iteration-2-images/pictures/food-3.png"
                alt=""
              />
              <PizzaFooter />
            </div>
          </div>
        );
      case 3:
        return (
          <div className="triplet">
            <div className="tripletFries">
              <img
                src="/images/newImages/cheeseSticks-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
            <div className="tripletFries">
              <img
                src="/images/newImages/curlyfries-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
            <div className="tripletFries">
              <img
                src="/images/newImages/frenchFries-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
          </div>
        );
      case 4:
        return (
          <div className="triplet">
            <div className="tripletMenus">
              <img src="/images/newImages/menu1-removebg-preview.png" alt="" />
              <PizzaFooter />
            </div>
            <div className="tripletMenus">
              <img src="/images/newImages/menu2-removebg-preview.png" alt="" />
              <PizzaFooter />
            </div>
            <div className="tripletMenus">
              <img src="/images/newImages/menu3-removebg-preview.png" alt="" />
              <PizzaFooter />
            </div>
          </div>
        );
      case 5:
        return (
          <div className="triplet">
            <div className="tripletDrinks">
              <img
                src="/images/newImages/softDrink1-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
            <div className="tripletDrinks">
              <img
                src="/images/newImages/softDrink2-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
            <div className="tripletDrinks">
              <img
                src="/images/newImages/softDrink3-removebg-preview.png"
                alt=""
              />
              <PizzaFooter />
            </div>
          </div>
        );
      default:
        return <div className="default triplet">Seçim Yapınız</div>;
    }
  };

  return <div className="menuItems">{renderTriplet()}</div>;
}
