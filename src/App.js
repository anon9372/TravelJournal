// import logo from './logo.svg';
// import './App.css';
import React from "react";
import Nav from "./Nav";
import '../src/App.css'
import Card from "./Card";
import data from '../src/data'

function App() {

  const Details = data.map((details) => {

    return (
      <Card

        title={details.title}
        location={details.location}
        googleMapsUrl={details.googleMapsUrl}
        startDate={details.startDate}
        endDate={details.endDate}
        description={details.description}
        imageUrl={details.imageUrl}

      />

    )

  })


  return (
    <div>
      <Nav />
      <section>
        {Details}
      </section>

    </div>

  );
}

export default App;
