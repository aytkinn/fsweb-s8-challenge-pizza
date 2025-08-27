import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import EkMalzemeSecimi from './EkMalzemeSecimi';
import "../styles/PizzaOrder.css";
import Header from './Header';

const BASE_PRICE = 85.50;
const EXTRA_INGREDIENT_PRICE = 5;

const errorMessages = {
    name: 'Adınız en az 3 karakter olmalıdır.',
    extraMalzeme: 'En az 4, en fazla 10 malzeme seçmelisiniz.',
};
const malzemeler = [
    'Pepperoni', 'Domates', 'Biber', 'Sosis', 'Mısır', 'Sucuk', 
    'Kanada Jambonu', 'Ananas', 'Tavuk Izgara', 'Jalapeno', 'Kabak', 
    'Soğan', 'Sarımsak', 'Ton Balığı'
];
export default function PizzaOrder() {
    const [formData, setFormData] = useState({
        name: "",
        size: "orta",
        hamur: "standart",
        extraMalzeme: [],
        notes: ""
    });

    const [count, setCount] = useState(1);
    const [totalPrice, setTotalPrice] = useState(0);

    const [errors, setErrors] = useState({});
    const [isValid, setIsValid] = useState(false);
    const navigate = useNavigate();

    const calculateTotalPrice = () => {
        const extraIngredientsCost = formData.extraMalzeme.length * EXTRA_INGREDIENT_PRICE;
        const newTotalPrice = (BASE_PRICE + extraIngredientsCost) * count;
        setTotalPrice(newTotalPrice.toFixed(2));
    };

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        if(type === "checkbox"){
            if(checked){
                setFormData({...formData, extraMalzeme:[...formData.extraMalzeme, value]});
            } else {
                const newextraMalzeme = formData.extraMalzeme.filter(
                    (ingredient) => ingredient !== value
                );
                setFormData({ ...formData, extraMalzeme: newextraMalzeme });
            }
        } else {
            setFormData({ ...formData, [name]: value });
        }
    };

    const validate = () => {
        const newErrors = {};
        if (formData.name.length < 3) {
            newErrors.name = errorMessages.name;
        }
        if (formData.extraMalzeme.length < 4 || formData.extraMalzeme.length > 10) {
            newErrors.extraMalzeme = errorMessages.extraMalzeme;
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    useEffect(() => {
        const formIsValid = validate();
        setIsValid(formIsValid);
        calculateTotalPrice();
    }, [formData, count]);

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isValid) {
            axios
                .post('https://reqres.in/api/pizza', {
                    ...formData,
                    adet: count,
                    toplam: totalPrice
                })
                .then((res) => {
                    console.log('API Yanıtı:', res.data);
                    navigate('/success');
                })
                .catch((err) => {
                    console.error('Sipariş hatası:', err);
                });
        }
    };

    return (
        <>
            <Header />
            <form onSubmit={handleSubmit}>
                <div className="pizza-info">
                    <h1>Position Absolute Acı Pizza</h1>
                    <div className="price-and-rating">
                        <span>{BASE_PRICE}₺</span>
                        <span>4.9</span>
                        <span>(200)</span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Mauris congue mollis mauris, id dapibus massa volutpat id.
                        Praesent aliquet felis ut condimentum commodo.
                        Sed consequat, est in volutpat luctus, tellus felis mollis ligula, eu suscipit erat nisl id ligula. 
                        Proin aliquet nibh eget ex aliquet tempus.</p>
                </div>
                
                <div className="form-sections">
                    <div className="form-section-half">
                        <h3>Boyut Seç *</h3>
                        <div className="radio-group">
                            <label><input type="radio" name="size" value="küçük" checked={formData.size === 'küçük'} onChange={handleChange} /> Küçük</label>
                            <label><input type="radio" name="size" value="orta" checked={formData.size === 'orta'} onChange={handleChange} /> Orta</label>
                            <label><input type="radio" name="size" value="büyük" checked={formData.size === 'büyük'} onChange={handleChange} /> Büyük</label>
                        </div>
                    </div>
                    
                    <div className="form-section-half">
                        <h3>Hamur Seç *</h3>
                        <select name="hamur" value={formData.hamur} onChange={handleChange}>
                            <option value="standart">Standart</option>
                            <option value="ince">İnce</option>
                            <option value="kalın">Kalın</option>
                        </select>
                    </div>
                </div>

                <h3>Ek Malzemeler</h3>
                <p className="extra-info">En fazla 10 malzeme seçebilirsiniz. {formData.extraMalzeme.length}/10</p>
                {errors.extraMalzeme && <p className="error">{errors.extraMalzeme}</p>}
                
                <EkMalzemeSecimi 
                    malzemeler={malzemeler}
                    secilenMalzemeler={formData.extraMalzeme}
                    handleChange={handleChange}
                />

                <h3>Sipariş Notu</h3>
                <textarea
                    id="notes"
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    placeholder="Siparişine eklemek istediğin bir not var mı?"
                />

                <div className="order-summary-container">
                    <div className="item-counter">
                        <button type="button" onClick={() => setCount(Math.max(1, count - 1))}>-</button>
                        <span>{count}</span>
                        <button type="button" onClick={() => setCount(count + 1)}>+</button>
                    </div>

                    <div className="price-summary">
                        <h3>Sipariş Toplamı</h3>
                        <p>Seçimler: {formData.extraMalzeme.length * EXTRA_INGREDIENT_PRICE}₺</p>
                        <p className="total-price">Toplam: {totalPrice}₺</p>
                    </div>

                    <button type="submit" disabled={!isValid}>SİPARİŞ VER</button>
                </div>
            </form>
        </>
    );
}