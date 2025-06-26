import { useState, useEffect } from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import axios from "axios";
import "./styles/Order.css";
import PizzaFooter from "./components/PizzaFooter";
import Checkout from "./components/Checkout";
import PizzaCounter from "./components/PizzaCounter";
import TextInputs from "./components/TextInputs";
import PizzaBoyutSelector from "./components/PizzaBoyutSelector";
import PizzaHamurSelector from "./components/PizzaHamurSelector";
import PizzaExtras from "./components/PizzaExtras";
import Footer from "./components/Footer";

const linkStyle = {
  textDecoration: "none",
  color: "white",
  fontSize: "0.8rem",
};

const BASE_PRICE = 80; //Change this later
const EXTRA_PRICE = 5;

export default function Order({ form, setForm }) {
  let history = useHistory();
  const [checkoutSum, setCheckoutSum] = useState(BASE_PRICE);
  const [errors, setErrors] = useState({});
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const newErrors = {};

    if (form.userName.trim().length < 3) {
      newErrors.userName = "İsim en az 3 karakter olmalıdır.";
    }
    if (form.choosenExtras.length < 4 || form.choosenExtras.length > 10) {
      newErrors.choosenExtras = "En az 4, en fazla 10 malzeme seçmelisiniz.";
    }

    //console.log(form.pizzaSize);

    if (form.pizzaSize === "") {
      newErrors.pizzaSize = "Lütfen bir boyut seçiniz";
    }

    if (form.pizzaDoughThickness === "") {
      newErrors.pizzaSize = "Lütfen bir kalınlık seçiniz";
    }

    setErrors(newErrors);
    setIsValid(Object.keys(newErrors).length === 0);
  }, [form]);

  //console.log(form);

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;

    setForm((prevForm) => {
      let updatedExtras;

      if (type === "checkbox") {
        if (checked) {
          updatedExtras = [...prevForm.choosenExtras, value];
          setCheckoutSum((prevSum) => prevSum + 5);
        } else {
          updatedExtras = prevForm.choosenExtras.filter(
            (extra) => extra !== value,
          );
          setCheckoutSum((prevSum) => prevSum - 5);
        }

        return { ...prevForm, choosenExtras: updatedExtras };
      }

      if (type === "number") {
        return { ...prevForm, [name]: Number(value) };
      }

      return { ...prevForm, [name]: value };
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post("https://reqres.in/api/pizza", {
        ...form,
        totalPrice: checkoutSum,
      });
      console.log("Siparis Ozeti:", response.data);
      //setForm(initialForm);
      setCheckoutSum(BASE_PRICE);
      history.push("/success");
    } catch (error) {
      console.error("Siparis api'nda hata olustu", error);
    }
  };

  const increaseCounter = () => {
    setForm((prevForm) => {
      const newCount = prevForm.pizzaCounter + 1;
      setCheckoutSum(
        (prevSum) => prevSum + checkoutSum / prevForm.pizzaCounter,
      );
      return { ...prevForm, pizzaCounter: newCount };
    });
  };

  const decreaseCounter = () => {
    setForm((prevForm) => {
      if (prevForm.pizzaCounter > 1) {
        const newCount = prevForm.pizzaCounter - 1;
        setCheckoutSum(
          (prevSum) => prevSum - checkoutSum / prevForm.pizzaCounter,
        );
        return { ...prevForm, pizzaCounter: newCount };
      }
      return prevForm;
    });
  };

  return (
    <>
      <header>
        <div className="header-content">
          <img src="/images/iteration-1-images/logo.svg" alt="logo" />
          <nav id="order-nav">
            <Link to="/" style={linkStyle}>
              Ana Sayfa
            </Link>
            <p>-</p>
            <Link to="/" style={linkStyle}>
              Seçenekler
            </Link>
            <p>-</p>
            <Link to="/order" style={{ ...linkStyle, fontWeight: "bold" }}>
              Sipariş Oluştur
            </Link>
          </nav>
        </div>
      </header>
      <main className="order-content">
        <section className="pizza-section">
          <PizzaFooter></PizzaFooter>
          <p className="pizza-description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam
            pulvinar posuere ipsum id tincidunt. Suspendisse dignissim posuere
            metus, ac pulvinar lectus dictum id. Praesent semper finibus tellus,
            eu pellentesque lectus mollis quis. Pellentesque molestie, nibh
            faucibus ornare gravida, sapien nunc vehicula velit, id elementum
            mauris ipsum a dolor. Integer risus nunc, vestibulum eget venenatis
            vitae, consequat et eros. Maecenas vulputate velit dolor, eu
            scelerisque nisi sagittis et.
          </p>
        </section>
        <form onSubmit={handleSubmit}>
          <div className="pizzaForm-init-container">
            <PizzaBoyutSelector
              pizzaSize={form.pizzaSize}
              handleChange={handleChange}
            />
            <PizzaHamurSelector
              pizzaDoughThickness={form.pizzaDoughThickness}
              handleChange={handleChange}
            />
          </div>
          <PizzaExtras
            choosenExtras={form.choosenExtras}
            handleChange={handleChange}
          />
          {errors.choosenExtras && (
            <p className="error">{errors.choosenExtras}</p>
          )}
          <TextInputs
            userName={form.userName}
            userNote={form.userNote}
            handleChange={handleChange}
            errors={{
              userName: errors.userName,
            }}
          />

          <div className="pizzaForm-checkout-container">
            <PizzaCounter
              increaseCounter={increaseCounter}
              decreaseCounter={decreaseCounter}
              pizzaCounter={form.pizzaCounter}
            />
            <Checkout
              checkoutSum={checkoutSum}
              choosenExtras={form.choosenExtras}
              extraPrice={EXTRA_PRICE}
              isValid={isValid}
            />
          </div>
        </form>
      </main>
      <Footer />
    </>
  );
}
