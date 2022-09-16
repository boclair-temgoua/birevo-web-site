import React from 'react';

import Layout from '../../layout/Layout';
import Footer from '../../layout/Footer/Footer';
import Navbar from '../../layout/Header/Navbar';
import FaqTwo from '../../components/faq/FaqTwo';
import PricingOne from '../../components/pricing/PricingOne';
import PriceFour from '../../components/pricing/PriceFour';
import PageHeader from '../../components/common/PageHeader';
import TestimonialTwo from '../../components/testimonial/TestimonialTwo';
import SupportOne from '../../components/support/SupportOne';

const Pricing = () => {
  return (
    <Layout title="Pricing Overview" desc="this is pricing page">
      <Navbar classOption="navbar-light" />
      <PageHeader
        title="Simple, predictable pricing"
        desc="Seamlessly actualize client-based users after out-of-the-box value. Globally embrace strategic data through frictionless expertise."
      />

      <PriceFour />
      <FaqTwo />
      <SupportOne className />
      <TestimonialTwo />
      <Footer footerGradient />
    </Layout>
  );
};

export default Pricing;
