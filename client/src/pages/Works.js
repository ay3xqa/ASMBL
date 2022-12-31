import React from 'react';
import './CSS/Works.css';
import './CSS/Design.css';

export default function Works(){
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
        <section className='Works'>
            <div ref={ domRef } className={ `Works-container fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
                {/* <div className='Works-imageContainer'>
                    <img className='Works-image' src={image} alt="" />
                </div> */}
                <div className='Works-sketchContainer'>
                    <iframe title="Hero Model" id="worksModel" width="100%" scrolling="0" 
                    src="https://sketchfab.com/models/8d913bda48f84217902e6829982c494f/embed?ui_infos=0&amp;ui_watermark=0&amp;ui_help=0&amp;ui_settings=0&amp;ui_inspector=0&amp;ui_annotations=0&amp;ui_stop=0&amp;ui_vr=0&amp;preload=1&amp;autostart=1&amp;ui_hint=2&amp;autospin=0.2&amp;transparent=1">
</iframe>
</div>
                <div className='Works-contentContainer'>
                    <h2 className='Works-header'>
                    How It Works?
                    </h2>
                    <p className='Works-description'>
                    Our digital hardware library is always updating. Get size, compatibility, and performance guidance, filter by price and color. 
                    </p>
                    <p>
                    Click and select components to build GPU 3D MODEL realistic custom PCs in minutes. Save your designs and share your work with ease. Love what you built? We also include a purchase option!
                    </p>
                </div>
            </div>
        </section>
    )
}