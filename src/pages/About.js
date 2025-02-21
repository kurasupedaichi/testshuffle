import React from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import AboutSectionNavigationsDark1 from '../components/navigations-dark/AboutSectionNavigationsDark1';

const meta = {
  title: '',
  meta: [],
  link: [],
  style: [],
  script: [],
};

export default function About() {
  return (
    <React.Fragment>
      <HelmetProvider>
        <Helmet {...meta}></Helmet>
      </HelmetProvider>
      <AboutSectionNavigationsDark1 />
    </React.Fragment>
  );
}

