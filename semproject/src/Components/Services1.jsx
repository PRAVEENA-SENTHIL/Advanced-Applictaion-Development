import React, { useEffect, useState } from 'react';
import Adcards from './Adcards';

function Services1() {
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
      <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>Personal Care</h1>
      <div style={{ position: 'relative', marginBottom: '1rem' }}>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://stanfordhealthcare.org/content/dam/SHC/clinics/home-based-senior-care/images/homebased-seniorcare-1920x1080.jpg")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://media.istockphoto.com/id/504056253/photo/elderly-woman-is-assisted-by-nurse-at-home.jpg?s=612x612&w=0&k=20&c=U9gK_i-k7XUyFq3Dmy4MFurB77485vqpYIM4zT81-2Y=")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://bryanskilledhomecare.com/wp-content/uploads/2023/08/iStock-1441252939-1_11zon.jpg")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='slide bg-fade slide-vis' style={{ aspectRatio: '1.75/1', height: '250px', borderRadius: '2em', color: 'white', fontWeight: 700, fontFamily: 'Montserrat', padding: '1em 2em', margin: '1em 0em', display: 'flex', alignItems: 'end', backgroundImage: 'linear-gradient(0deg, black, transparent), url("https://img.freepik.com/free-photo/smiley-man-woman-medium-shot_23-2148940048.jpg")', backgroundSize: '100%', backgroundPosition: '50%', boxShadow: '0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24)', transition: 'box-shadow 0.3s cubic-bezier(.25,.8,.25,1), background-size 0.3s cubic-bezier(.25,.8,.25,1)', cursor: 'pointer' }}></div>
        <div className='dots' style={{ position: 'absolute', bottom: '3em', left: '2em', display: 'flex', gap: '0.5em' }}>
          
        </div>
      </div>
      <p style={{ fontSize: '1.5rem', margin: '0 2rem' }}>Discover the unparalleled support and compassion you deserve with Personal Care Assistance. 
      Our dedicated team is committed to providing personalized care tailored to your unique needs, ensuring you or your loved one can maintain independence 
      and dignity in the comfort of home. With our compassionate caregivers by your side, you'll receive assistance with daily tasks, medication management, and more,
       all delivered with warmth and empathy. We prioritize your safety and well-being, offering round-the-clock support and flexible scheduling options to accommodate your lifestyle. 
       Experience the difference that personalized care can make in your life - contact Personal Care Assistance today to schedule a complimentary consultation and embark on a journey to enhanced
    well-being and independence.</p>
      <p style={{ fontSize: '1.5rem', color: '#EE4266', marginTop: '1rem' }}>Details</p>


      <div><Adcards/></div>
    </div>
  );
}

export default Services1;
