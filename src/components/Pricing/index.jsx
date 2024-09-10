import React from 'react';

const pricingOptions = [
    { plan: "Basic Plan", price: "₹3329/month", features: ["Basic features", "Standard support"] },
    { plan: "Premium Plan", price: "₹79900 one-time", features: ["All features", "Priority support", "Exclusive offers"] },
];

const PricingSection = () => {
    return (
        <section className="w-full bg-white py-16">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Pricing Options</h2>
                <div className="flex flex-wrap justify-center">
                    {pricingOptions.map((option, index) => (
                        <div key={index} className="w-full md:w-1/3 p-4">
                            <div className="bg-gray-100 shadow-lg rounded-lg p-6">
                                <h3 className="text-2xl font-semibold mb-4">{option.plan}</h3>
                                <p className="text-3xl font-bold mb-4">{option.price}</p>
                                <ul className="text-left mb-4">
                                    {option.features.map((feature, idx) => (
                                        <li key={idx} className="text-gray-700">- {feature}</li>
                                    ))}
                                </ul>
                                <a href="#buy" className="inline-block bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors">
                                    Buy Now
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PricingSection;
