import React from 'react';
import './CSS/Team.css';
import './CSS/Design.css';
import './CSS/Contact.css';
import Alex from '../images/Alex.png';
import Lucas from '../images/Lucas.png';
import Abhinav from '../images/Abhinav.png';
import Bhargav from '../images/Bhargav.png';

function Team() {

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
    <section className='Team'>
        <div ref={ domRef } className={ `Team-container fade-in-section ${ isVisible ? 'is-visible' : '' }` }>
            <h3 className='Team-header'>Meet the Team </h3>
            <div className='Team-board'>
                {/* Abhinav */}
                <div className='Team-member'>
                    <div className='Team-headshotWrapper'>
                        <img className='Team-headshot' src={Abhinav} alt='' />
                    </div>
                    <h3 className='Team-name'>Abhinav Sathish</h3>
                </div>

                {/* Bhargav */}
                <div className='Team-member'>
                    <div className='Team-headshotWrapper'>
                        <img className='Team-headshot' src={Bhargav} alt='' />
                    </div>
                    <h3 className='Team-name'>Bhargav Sathish</h3>
                </div>

                {/* Lucas */}
                <div className='Team-member'>
                    <div className='Team-headshotWrapper'>
                        <img className='Team-headshot' src={Lucas} alt='' />
                    </div>
                    <h3 className='Team-name'>Lucas Banerji</h3>
                </div>

                {/* Alex */}
                <div className='Team-member'>
                    <div className='Team-headshotWrapper'>
                        <img className='Team-headshot' src={Alex} alt='' />
                    </div>
                    <h3 className='Team-name'>Alex Yu</h3>
                </div>
            </div>
        </div>
        {/* <div className='Contact-container'>
            asdf
        </div> */}
    </section>
  )
}

export default Team