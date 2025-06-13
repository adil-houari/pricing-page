import React from 'react';
import PricingCard from '../components/PricingCard';
import '../styles/PricingPage.css';

const plans = [
  {
    tier: 'Starter',
    title: 'Free Plan',
    price: 0,
    bonus: 10,
    features: [
      'Access to limited candidate profiles',
      'Basic CV management',
      'Profiles stay available for 1 month',
      'Email alerts for new candidates',
    ],
    cta: 'Start Free',
  },
  {
    tier: 'Professional',
    title: '100 Credits',
    price: 99,
    bonus: 20,
    features: [
      'Full CV database access',
      'Advanced filtering tools',
      'Email support',
      'Profiles stay for 3 months',
    ],
    cta: 'Choose Plan',
  },
  {
    tier: 'Enterprise',
    title: '400 Credits',
    price: 299,
    bonus: 50,
    features: [
      'Unlimited candidate unlocks',
      'Premium recruitment support',
      'Priority placement',
      'Analytics dashboard access',
    ],
    cta: 'Go Premium',
  },
];

function PricingPage() {
  return (
    <div className="pricing-container">
      <h1 className="main-title">Pricing Plans</h1>
      <p className="subtext">Choose the offer that fits your recruitment needs</p>
      <div className="card-wrapper">
        {plans.map((plan, i) => (
          <PricingCard key={i} {...plan} />
        ))}
      </div>
    </div>
  );
}

export default PricingPage;
