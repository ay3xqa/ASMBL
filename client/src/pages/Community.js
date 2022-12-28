import React from 'react';
import './CSS/Community.css';
import './CSS/Design.css';
import image from '../images/communityPH.png';

function Community() {
  const domRef = React.useRef();
  
  const [isVisible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      // In your case there's only one element to observe:     
      if (entries[0].isIntersecting) {
      
        // Not possible to set it back to false like this:
        setVisible(true);
        
        // No need to keep observing:
        observer.unobserve(domRef.current);
      }
    });
    
    observer.observe(domRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section className='Community'>
        <div ref={ domRef } className={ `Community-container fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
            <div className='Community-lContainer'>
              <h2 className='Community-header'>
                Our Community
              </h2>
              <p className='Community-text'>
              Need some inspiration or want to show off your build ideas? Explore our user forums and join our rapidly growing community of PC enthusiasts.
              </p>
              <br></br>
              <p className='Community-text2'>
                Our ASMBL team regularly posts content about our progress and custom PC building news.
              </p>
              <br></br>
              <div className='Community-facts'>
                <div className='Community-factWrapper'>
                  <p className='Community-fact'>12K+</p>
                  <span>Members Overall</span>
                </div>
                <div className='Community-factWrapper'>
                  <p className='Community-fact'>40+</p>
                  <span>Design Inspirations</span>
                </div>
              </div>
              <button className='Community-button' type=''>Visit Forum</button>
            </div>
            <div className='Community-rContainer'>
              <img className='Community-image' src={image} alt="" />
              <h2 className='Community-testimony'>
                “OMG! I cannot believe that I have got a brand new landing page after getting Omega. It was super easy to edit and publish.”
              </h2>
              <p className='Community-name'>
                Johnathan Taylor
              </p>
            </div>
        </div>
    </section>
  )
}

export default Community