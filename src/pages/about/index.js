import React from 'react'
// import Link from 'gatsby-link'
import './index.css'
import Layout from '../../components/Layout'
import PhoneLCA from '../../img/mobile-phone-lca.jpg';
import PhoneMaterial from '../../img/mobile-phone-material.png';
import RecyclingRates from '../../img/eol-recycling-rates.png';
import MetalUsage from '../../img/global-metal-use.png';

export default class Index extends React.Component {
  render() {
    return (
      <Layout>
        <section className="section">
        <div className="container">
            <div className="content">
                <h1>Context</h1>
                <p>
                  “Out of sight, out of mind” is what I think embodies most people’s attitude towards their trash.  
                  I think the fact our waste magically disappears every week contributes psychologically to the “throw away” culture of the US because we take for granted we never have to consider our trash again after it disappears in a wastebin, which enables us to continue consuming and disposing without considering “reduce” or “re-use” and only occasionally “recycle"
                </p>
                <h1>Cellphone LCA</h1>
                <p>
                This visualization depicts the life cycle analysis (LCA) of a mobile phone. In the modern technological age, smartphones are no longer cost prohibitive and are used by individuals across all income levels and throughout both developed and developing countries. With over 5 billion cell phones in existence, they are the ideal use case to illustrate the importance of electronic recycling since they are so prevalent and chances are people own one. Depicting a life cycle analysis of a particular product on the website is useful because electronic devices are especially resource intensive to produce and an LCA helps us quantify what the exact cost of a product is, both in terms of cost and environmental impact. The visualization shows the life cycle of a cell phone starting from raw material extraction, manufacturing, distribution, use, recycling, and final disposal and helps the reader understand why electronic recycling is so important by tying it back to something personal and hopefully brings them to consider the consequences of simply landfilling electronic devices in general.
                </p>
                <div class="outer">
                  <figure>
                    <img src={PhoneLCA}/>
                    <figcaption>Source: <a href="https://lah.elearningontario.ca/CMS/public/exported_courses/CGW4U/exported/CGW4UU4/CGW4UU4/CGW4UU4A6/_content.html">elearningontario.ca</a></figcaption>
                  </figure>
                </div>
                {/* <img src={PhoneMaterial} className="about-image"/> */}
                {/* <img src={MetalUsage} width="1000" height="1000"/> */}
                {/* <img src={PhoneMaterial} style={{ width: 'auto', height: '600px' }}/> */}
                <h3>The image below illustrates the various types of raw material involved in creating a cellphone.</h3>
                <img src={PhoneMaterial} className="center"/>
                <h3>Unfortunately the end of life recycling rates for the majority of those materials are generally poor.</h3>
                <img src={RecyclingRates} className="center"/>
                <h3>As our demand for electronics increases, so has the global usage of these finite elements</h3>
                <img src={MetalUsage} className="center"/>
                <p>
                This paper discusses the notion of emergy, which is defined as the expression of all the energy used in the work processes that generate a product or service, which is essentially the idea of life cycle analysis discussed in class.  The paper calculates emergy in the context of electronic devices and explains that the electronic waste represents lost energy and that throwing away a smartphone after two years of a four year lifespan wastes about 500 MJ of (amortized) emergy.
                <a href="/bibliography"> [1]</a>
                </p>
            </div>
          </div>
        </section>
        <section className="section">
          <div className="container">
            <div className="content">
            <h1>Cal Recycle Data</h1>
            <p>
              This visualization shows the amount of electronic waste produced per county in California based on data collected by CalRecycle.
              <a href="/bibliography"> [4]</a>
            </p>
              <iframe id="igraph" scrolling="no" seamless="seamless" src="https://chart-studio.plotly.com/~matthew-y-dong/202.embed" height="525" width="100%"></iframe>
              </div>
            </div>
        </section>
      </Layout>
    )
  }
}
