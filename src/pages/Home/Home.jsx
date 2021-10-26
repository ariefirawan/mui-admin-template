import React from 'react';

import FeatureInfo from '../../components/FeaturedInfo/FeatureInfo';
import Charts from '../../components/Recharts/Charts';
import WidgetLg from '../../components/WidgetLg/WidgetLg';
import WidgetSm from '../../components/WidgetSm/WidgetSm';

import { userData } from '../../dataDummy';

import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <FeatureInfo />
      <Charts
        data={userData}
        title="User Analytics"
        dataKey="Active User"
        grid
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
