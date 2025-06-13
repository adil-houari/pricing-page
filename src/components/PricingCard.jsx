import React from 'react';

function PricingCard({ tier, title, price, bonus, features, cta }) {
    return (
        <div className={`pricing-card ${tier}`}>
            <div className="card-header">
                <span className="tier-label">{tier}</span>
                <h2>{title}</h2>
                <p className="price">${price}</p>
                {bonus && <p className="bonus">+ {bonus} free credits</p>}
            </div>
            <ul className="features">
                {features.map((f, i) => (
                    <li key={i}>✔ {f}</li>
                ))}
            </ul>
            <button className="cta-btn">{cta}</button>
        </div>
    );
}

export default PricingCard;
