import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import './Works.css';

const cardData = [
  { number: '01', title: 'Provide Business Information', description: 'Start by filling out a quick form with your dealership’s essential details. This includes your business name, address, contact info, and a few preferences about how you’d like your site to operate. This step ensures that everything from your website footer to lead responses reflects your brand identity and core contact points.' },
  { number: '02', title: 'Set Up Your Domain', description: 'You can either connect an existing domain that you already own or register a brand-new one directly through PDS. Our platform takes care of all the backend configuration, SSL setup, and domain pointing, so your site will be secure and accessible without needing to touch any code or hosting settings.' },
  { number: '03', title: 'Select Your Template', description: 'Choose from a library of modern, high-performing templates tailored specifically for car dealerships. Each template is mobile-optimized, visually sleek, and built for conversions—whether you are focused on showcasing inventory or generating leads. Pick the look that fits your brand, and you are ready to go' },
  { number: '04', title: 'Customize Your Website', description: 'Once your template is selected, you’ll enter our easy drag-and-drop editor. Here, you can modify colors, fonts, images, page layouts, and written content. Want to add a section for reviews or a promotional banner? Just click and add. No design or coding skills needed—it’s all built to be as intuitive as possible.' },
  { number: '05', title: 'Add Your Inventory', description: 'Upload your vehicles quickly and efficiently. You can enter detailed information like year, make, model, mileage, pricing, and multiple images. Whether you have 10 cars or 1,000, our inventory manager ensures that your listings look great, stay organized, and are instantly updated on your site.' },
  { number: '06', title: 'Complete Payment', description: 'Once everything’s set, choose the subscription plan that fits your dealership’s needs. Securely complete your payment through our checkout system, and your fully functional, professional dealership website goes live immediately. You’ll have full access to all features, ongoing support, and the tools you need to grow.' },
];

const Works = () => {
  const [activeCard, setActiveCard] = useState(null);

  const handleCardClick = (index) => {
    setActiveCard(activeCard === index ? null : index);
  };

  return (
    <section className="works_section">
      <Container>
        <div className="works_title">
          <h2>How It Works</h2>
          <p>Getting started with PDS is fast, easy, and built around your dealership’s needs. Here’s how it works:</p>
        </div>

        <div className="works_cards_main_div">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              className={`card ${activeCard === index ? 'card-expanded' : activeCard !== null ? 'card-collapsed' : ''}`}
              onClick={() => handleCardClick(index)}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="card-number">
                <span>{card.number}</span>
              </div>
              <div className="card-content">
                <h3>{card.title}</h3>
                <p>{card.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Works;