import "./styles.scss";
import { ReactComponent as OfferList } from "../../icons/offer-accessories.svg";
import { ReactComponent as OfferSearch } from "../../icons/offer-search.svg";
import { ReactComponent as OfferHistogram } from "../../icons/offer-histogram.svg";

export const Offer = () => {
  return (
    <div className="offer">
      <div className="offer__container container">
        <h2 className="offer__title">List. Sell. Grow</h2>
        <div className="offer__container-inner">
          <div className="offer__card offer__card--list">
            <OfferList width={100} className="offer__img" />
            <h5 className="offer__card-text">
              Be a part of the only All-In-One platform for IT services
            </h5>
          </div>
          <div className="offer__card offer__card--search">
            <OfferSearch width={100} className="offer__img" />
            <h5 className="offer__card-text">
              Come closer to finding your next customer
            </h5>
          </div>
          <div className="offer__card offer__card--histogram">
            <OfferHistogram width={100} className="offer__img" />
            <h5 className="offer__card-text">
              Grow your business with a single click
            </h5>
          </div>
        </div>
      </div>
    </div>
  );
};
