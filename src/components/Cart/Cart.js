import { useState } from "react";

export const Cart = () => {
    const [cartCount, setCartCount] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleClick = (product) => {
        setCartCount(cartCount + 1);
        setTotalPrice(totalPrice + product.price);
        window.alert(`${product.name} has been added to your cart!`);
    }

    const products = [
        {
            id: 1,
            name: "Pet Toy",
            content:" Originating from Naples, Italy, this is the classic pizza with a thin, soft, and chewy crust. It’s traditionally topped with fresh tomatoes, mozzarella cheese, basil, and olive oil.",
            price: 15,
            imageUrl: "https://t4.ftcdn.net/jpg/07/15/92/79/240_F_715927994_1l1phdoCLL5FZz8knFAb0Jt02MTr0oo7.jpg"
        },
        {
            id: 2,
            name: "Pet Food",
            price: 25,
            imageUrl: "https://t4.ftcdn.net/jpg/03/42/85/71/240_F_342857169_b7AELAPUs2q1ibIQ38Dz4RJjVshQeXpP.jpg"
        },
        {
            id: 3,
            name: "Pet Bed",
            price: 45,
            imageUrl: "https://t4.ftcdn.net/jpg/03/42/85/71/240_F_342857158_Vy53d8IwB3oJ0A6Rxu0vPH3l13tZ5sM1.jpg"
        }
    ];

    return (
        <>
            <div style={{ marginTop:'10px', display: 'flex', gap: '16px', flexWrap: 'wrap', border: '1px solid #ccc', padding: '16px', marginBottom: '16px' }}>
                {products.map((product) => (
                    <div key={product.id} style={{ padding:'10px',backgroundColor:'lightgray', flex: '1 1 calc(33% - 32px)', boxSizing: 'border-box', textAlign: 'center',border:'1px solid black'  }}>
                        <img src={product.imageUrl} alt={product.name} style={{ width: '80%', height: '250px', objectFit: 'cover',marginTop:'10px'}} />
                        <h4 style={{fontSize:'25px'}}>{product.name}</h4>
                        <p style={{fontSize:'18px'}}>Price:{product.price}</p>
                        <button style={{marginTop:'5px'}} onClick={() => handleClick(product)}>Add to Cart</button>
                    </div>
                ))}
            </div>

            <div style={{ marginTop: '20px' }}>
            <h3>Your Cart: {cartCount}</h3>
                <h4>Cart Details</h4>
                <p>Total Items: {cartCount}</p>
                <p>Total Price: Rs.{totalPrice.toFixed(2)}</p>
            </div>
        </>
    );
};
