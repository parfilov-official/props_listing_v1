import {FC, ReactNode} from "react";

interface Listing {
  items: [
    {
      listing_id: number,
      url: string,
      MainImage: {
        url_570xN: string,
      },
      title: string,
      currency_code: string,
      price: string,
      quantity: number,
      state: string,
    }
  ]
}

const Listing: FC<Listing> = ({items= []}) => {
  return (
    <div className="item-list">
      {items.map((item): ReactNode => {
        return item.state === "removed" ? null :  (
          <div key={item.listing_id} className="item">
            <div className="item-image">
              <a href={item.url}>
                <img src={item.MainImage.url_570xN} alt="1"/>
              </a>
            </div>
            <div className="item-details">
              <p className="item-title">{item.title.length > 50 ? item.title.substring(0, 50) + "..." : item.title}</p>
              <p className="item-price">{item.currency_code === "USD" && "$"}{item.currency_code === "EUR" && "€"}{item.currency_code === "GBP" && "GBP "}{item.price}</p>
              <p className={`item-quantity ${item.quantity <= 10 ? "level-low" : ''} ${item.quantity <= 20 && item.quantity > 10  ? "level-medium" : ''} ${item.quantity > 20 ? "level-high" : ''}`}>{item.quantity} left</p>
            </div>
          </div>
      )
      })}
    </div>
  );
};

export default Listing;