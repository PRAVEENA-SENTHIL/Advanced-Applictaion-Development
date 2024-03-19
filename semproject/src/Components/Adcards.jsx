import React, { useRef } from 'react';

function Adcards() {
  const containerRef = useRef(null);
  const boxWidth = containerRef.current ? containerRef.current.clientWidth : 0;

  const goNext = () => {
    if (containerRef.current) {
      containerRef.current.style.overflowY = 'hidden'; // Hide overflow Y
      containerRef.current.scrollBy({ left: boxWidth });
      setTimeout(() => {
        containerRef.current.style.overflowY = 'auto'; // Revert overflow Y
      }, 600); // Adjust the timeout according to your transition duration
    }
  };

  const goPrevious = () => {
    if (containerRef.current) {
      containerRef.current.style.overflowY = 'hidden'; // Hide overflow Y
      containerRef.current.scrollBy({ left: -boxWidth });
      setTimeout(() => {
        containerRef.current.style.overflowY = 'auto'; // Revert overflow Y
      }, 600); // Adjust the timeout according to your transition duration
    }
  };

  return (
    <div 
      className="container" 
      style={{
       
        display: 'flex',
        width: '90%',
        backgroundColor:'transparent',
        scrollBehavior: 'smooth',
        margin: 'auto',
        position: 'relative',
      }}
      ref={containerRef}
    >
      
      
      <div 
        className="box" 
        style={{
          height: '420px',
          width: '250px',
          background: '#FEECE2',
          borderRadius:'20px',
          flexShrink: 0,
          marginRight: '4px',
          marginBottom:'30px'
        }}
      >
        <p style={{fontSize:'20px',textAlign:'center'}}>Types of Care Services</p>
        <p style={{fontSize:'20px',padding:'45px'}}>Personalized care services tailored to individual needs, including assistance with activities of daily living,
         medication management, meal preparation, and mobility support.</p>
      </div>
      <div 
        className="box" 
        style={{
          height: '420px',
          width: '250px',
          background: '#FEECE2',
          borderRadius:'20px',
          flexShrink: 0,
          marginRight: '4px',
          marginBottom:'30px'
        }}
      >
      <p style={{fontSize:'20px',textAlign:'center'}}>Benefits of Home Care</p>
        <p style={{fontSize:'20px',padding:'45px'}}>Enjoy the comfort and familiarity of home while receiving personalized care from compassionate professionals,
         promoting independence, peace of mind, and improved quality of life.</p>
      </div>
      <div 
        className="box" 
        style={{
          height: '420px',
          width: '250px',
          background: '#FEECE2',
          borderRadius:'20px',
          flexShrink: 0,
          marginRight: '4px',
          marginBottom:'30px'
        }}
      >
      <p style={{fontSize:'20px',textAlign:'center'}}>Meal Preparation and Nutrition</p>
        <p style={{fontSize:'20px',padding:'45px'}}>Planning and preparing nutritious meals according to 
        dietary needs and preferences.
         This can also include assistance with feeding if necessary.</p>
      </div>
      <div 
        className="box" 
        style={{
          height: '420px',
          width: '250px',
          background: '#FEECE2',
          borderRadius:'20px',
          flexShrink: 0,
          marginRight: '4px',
          marginBottom:'30px'
        }}
      >
      <p style={{fontSize:'20px',textAlign:'center'}}>Qualified Caregivers</p>
        <p style={{fontSize:'20px',padding:'45px'}}> Our caregivers are highly trained, experienced, 
        and dedicated individuals who provide compassionate care with respect, 
        empathy, and dignity, ensuring seniors feel valued and supported.</p>
      </div>
      <div 
        className="box" 
        style={{
          height: '420px',
          width: '250px',
          background: '#FEECE2',
          borderRadius:'20px',
          flexShrink: 0,
          marginRight: '4px',
          marginBottom:'30px'
        }}
      >
      <p style={{fontSize:'20px',textAlign:'center'}}>Customized Care Plans</p>
        <p style={{fontSize:'20px',padding:'45px'}}>We create customized care plans based on each senior's unique needs and 
        health conditions, ensuring they receive personalized support to meets their individual 
        requirements and promotes wellness.</p>
      </div>
      
      {/* Previous button */}
      <a 
        className="prev" 
        style={{
          cursor: 'pointer',
          position: 'fixed',
          top: '50%',
          transform: 'translateY(-50%)',
          left: '10px',
          zIndex: '1',
          width: 'auto',
          padding: '20px',
          color: 'white',
          fontWeight: 'bold',
          fontSize: '18px',
          transition: '0.6s ease',
          borderRadius: '0 3px 3px 0',
          userSelect: 'none',
        }}
        onClick={goPrevious}
      >
        ❮
      </a>
      
      {/* Next button */}
      <a 
        className="next" 
        style={{
          cursor: 'pointer',
          position: 'fixed',
          top: '50%',
          transform: 'translateY(-50%)',
          right: '10px',
          zIndex: '1',
          width: 'auto',
          padding: '20px',
          color: 'green',
          fontWeight: 'bold',
          fontSize: '18px',
          transition: '0.6s ease',
          borderRadius: '3px 0 0 3px',
          userSelect: 'none',
        }}
        onClick={goNext}
      >
        
      </a>
    </div>
  );
}

export default Adcards;
