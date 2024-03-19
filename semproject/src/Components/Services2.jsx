import React, { useEffect, useState } from 'react';
import Adcards from './Adcards';

function Services2() {
  const [slideIndex, setSlideIndex] = useState(0);
  const changeTime = 3; // Change time in seconds

  useEffect(() => {
    const interval = setInterval(() => {
      showSlides();
    }, changeTime * 1000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  function showSlides() {
    const slides = document.getElementsByClassName("slide-vis");
    const dots = document.getElementsByClassName("dot");
    
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    let newIndex = slideIndex + 1;
    if (newIndex > slides.length) {
      newIndex = 1;
    }
    setSlideIndex(newIndex);

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[newIndex - 1].style.display = "block";  
    dots[newIndex - 1].className += " active";
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Skilled nursing</h1>
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://stanfordhealthcare.org/content/dam/SHC/clinics/home-based-senior-care/images/homebased-seniorcare-1920x1080.jpg")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://media.istockphoto.com/id/504056253/photo/elderly-woman-is-assisted-by-nurse-at-home.jpg?s=612x612&w=0&k=20&c=U9gK_i-k7XUyFq3Dmy4MFurB77485vqpYIM4zT81-2Y=")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://bryanskilledhomecare.com/wp-content/uploads/2023/08/iStock-1441252939-1_11zon.jpg")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://img.freepik.com/free-photo/smiley-man-woman-medium-shot_23-2148940048.jpg")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='dots' style={{ position: 'absolute', bottom: '3em', left: '2em', display: 'flex', gap: '0.5em' }}>
          
        </div>
      </div>
      <p style={{ fontSize: '1.5rem', margin: '0 2rem' }}>Embark on a journey of exceptional care and 
      support with our distinguished skilled nursing services. At our facility, we're dedicated to 
      providing unparalleled medical expertise, individualized attention, and compassionate support 
      to seniors in need. Our team of licensed professionals delivers expert medical care, personalized treatment 
      plans, and round-the-clock assistance,
       ensuring the highest standard of comfort and well-being for our residents.
      With a focus on holistic healing and personalized attention, we strive to create a nurturing 
      environment where seniors can thrive and regain independence. From medical treatments and rehabilitation 
      therapies to emotional support and companionship, we're committed to meeting the unique needs and preferences of
       each resident.</p>
      <p style={{ fontSize: '1.5rem', color: '#EE4266', marginTop: '1rem' }}>Details</p>


      <div><Adcards/></div>
    </div>
  );
}

export default Services2;
