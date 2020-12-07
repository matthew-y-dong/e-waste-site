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
                  Out of the 2.4 million tons of electronics that were disposed of in 2009, only 25 percent were collected for recycling.  “Out of sight, out of mind” is what embodies most people’s attitude towards their waste in the United States, including their electronics.  The fact our waste magically disappears every week and general unawareness of the processes that generate our material goods contributes psychologically to the throw-away culture of the US.   Because we take for granted the raw materials that go into creating the electronics we use and the fact that we never have to consider our trash again after it disappears in a wastebin, this enables us to continue consuming and disposing without considering “reduce” or “re-use” and only occasionally “recycle" which an increasing problem in the electronics sector because there is only a finite amount of raw materials we can mine to meet the increasing demand for electronic goods. 
                </p>
                <h1>Cellphone LCA</h1>
                <p>
                This visualization depicts the life cycle analysis (LCA) of a mobile phone. In the modern technological age, smartphones are no longer cost prohibitive and are used by individuals across all income levels and throughout both developed and developing countries. With over 5 billion cell phones in existence, they are the ideal use case to illustrate the importance of electronic recycling since they are so prevalent and chances are people own one. Depicting a life cycle analysis of a particular product on the website is useful because electronic devices are especially resource intensive to produce and an LCA helps us quantify what the exact cost of a product is, both in terms of cost and environmental impact. The visualization shows the life cycle of a cell phone starting from raw material extraction, manufacturing, distribution, use, recycling, and final disposal and helps the individual understand why electronic recycling is so important by tying it back to something personal and hopefully brings them to consider the consequences of simply landfilling electronic devices in general.
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
                Emergy is defined as the expression of all the energy used in the work processes that generate a product or service, which is essentially the idea of life cycle analysis.   
                Electronic waste represents wasted energy and research calculating emergy in the context of electronic devices illlustrate that throwing away a smartphone after two years of a four year lifespan wastes about 500 MJ of (amortized) emergy.
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
                These visualizations show the amount of electronic waste produced per county in California and the breakdown of waste type for Alameda county based on data collected by CalRecycle.
                <a href="/bibliography"> [4]</a>
              </p>
              <iframe id="igraph" scrolling="no" seamless="seamless" src="https://chart-studio.plotly.com/~matthew-y-dong/202.embed?show_link=false" height="500px" width="100%"></iframe>
              <iframe id="igraph" scrolling="no" seamless="seamless" src="https://chart-studio.plotly.com/~matthew-y-dong/206.embed?show_link=false" height="500px" width="100%"></iframe>
              <p>Electric waste categories tracked by Cal Recycle include:</p>
              <ul>
                <li>Brown Goods: generally larger, non-portable electronic goods that have some circuitry. Examples include microwaves, stereos, VCRs, DVD players, large radios, and audio/visual equipment. Does not include items with video display devices.</li>
                <li>Video Display Devices: items with video displays larger than 4 inches that may or may not have a cathode ray tube (CRT), that are not included in the Other Small Consumer Electronics category. Includes televisions, computer monitors, and other items containing a cathode ray tube (CRT), portable DVD players, tablet computers (like the iPad and Kindle Fire), laptop computers, and non-CRT televisions (such as LCD televisions). The device is primarily intended to display moving video, perform computing functions, or view web content.</li>
                <li>Computer-related Electronics: electronics with large circuitry that is computer-related, not including monitors. Examples include processors, keyboards, printers, fax machines, mice, disk drives, and modems.</li>
                <li>Small Consumer Electronics: portable non-computer-related electronics with large circuitry. Examples include personal digital assistants (PDAs), cell phones (including those with a screen larger than 4 inches), phone systems, phone answering machines, portable electronic book readers (like Kindles and Nooks) and other devices for reading static text, computer games and other electronic toys, portable CD players, camcorders, digital cameras, cell phone chargers and other electronic device chargers, and other electronic devices.</li>
              </ul>
            </div>
            </div>
        </section>
      </Layout>
    )
  }
}
