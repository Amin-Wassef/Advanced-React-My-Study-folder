import { useState } from "react";

export default function GiftCardApp() {
  const [giftCard, setGiftCard] = useState({
    firstName: "Jennifer",
    lastName: "Smith",
    text: "Free dinner for 4 guests",
    valid: true,
    instructions: "To use your coupon, click the button below.",
  });

  function spendGiftCard() {
    setGiftCard({
      ...giftCard,
      text: "Your coupon has been used.",
      instructions: "Please visit our restaurant to renew your gift card.",
      valid: false,
    });

    // Another way more correct, is to make a copy from the gifyCard which is ...prevState then to update this copy:
    // setGiftCard(prevState => {
    //     return {
    //       ...prevState,
    //       text: "Your coupon has been used.",
    //       valid: false,
    //       instructions: "Please visit our restaurant to renew your gift card.",
    //     }
    // });
  }

  return (
    <>
      <p className="titles-style">Gift Card Page</p>
      <div style={{ padding: "40px" }}>
        <h2>
          Customer: {giftCard.firstName} {giftCard.lastName}
        </h2>
        <h3>{giftCard.text}</h3>
        <p>{giftCard.instructions}</p>
        {giftCard.valid && (
          <button onClick={spendGiftCard}>Spend Gift Card</button>
        )}
      </div>
    </>
  );
}
