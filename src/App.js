import React from 'react';
import './App.css';
import Webanimation from '@wellyshen/use-web-animations';
import Typing from 'react-typing-animation';
import WorkingGirl from './images/Working-girl.gif';
import Work from './images/Work-lady.png';
import BulbOn from './images/bulb.png';
import useWebAnimations, { 
  backInLeft, 
  pulse, 
  rollIn, 
  tada,
} from "@wellyshen/use-web-animations";

function App() {

  const { keyframes, timing } = pulse;
  const  refWorkingGirl  = useWebAnimations({
    keyframes,
    timing: {
      ...timing,
      delay: 1000, // Delay 1s
      iterations: Infinity,
      duration: 1800,
      direction: "alternate",
      easing: "ease-in-out", 
    },
  });

  const rollInAnimation = rollIn;
  const refHead = useWebAnimations({
    keyframes: rollInAnimation.keyframes,
    timing: {
      // delay: 3000,
      iterations: 1,
      duration: 2000,
      
    }
  });

  const backInLeftAnimation = backInLeft;
  const refBackInLeft = useWebAnimations({
    keyframes: backInLeftAnimation.keyframes,
    timing: {
      iterations: 1,
      duration: 2000,
    }
  });

  const backInLeftAnimated = backInLeft;
  const backInLeftP = useWebAnimations({
    keyframes: backInLeftAnimated.keyframes,
    timing: {
      iterations: 1,
      duration: 2000,
    }
  });
  
  const bulbRotate = Webanimation({
    keyframes: [
        { transform: 'translateY(10px) rotate(40deg)' },
    ],
    timing: {
        duration: 1200,
        iterations: Infinity,
    },
});

const tadaAnimation = tada;
  const refTada = useWebAnimations({
    keyframes: tadaAnimation.keyframes,
    timing: {
      iterations: Infinity,
      duration: 2000,
    }
  });

  return (
    <div>
      <div className="banner">
        <h2 ref={refHead.ref}>Women Empoverment</h2>
      </div>
      <div className="mainLine">
         <h3>I never dreamed about success. I worked for it. </h3>
      </div>
    
        <div ref={refBackInLeft.ref}>
          <img
            className="image" 
            ref={refWorkingGirl.ref} 
            src={WorkingGirl} alt=" "
          />
        </div>
        
        <div ref={backInLeftP.ref}  className="content"> 
          <h1 className="mainHead" >Innovative Women </h1>
          <p className="para">
            If more girls are educated, all of Pakistan stands to gain. The Girl rising campaign 
            aims to address that through various  innovative initiatives that will not only
            help create awareness but also create a tangible paltform to effect changes.
          </p>
        </div>
        <div>
          <img 
            ref={refTada.ref}
            className="image2"
            src={Work}
            alt=" " 
          />          
        </div>

        <div>
          <img 
            ref={bulbRotate.ref} 
            className="bulbOn" 
            src={BulbOn} 
            alt=" " 
          />
        </div>
        <div>
          <h1 className="mainHead2">Innovative Goals</h1>
        </div>
        
        <Typing speed={100} className="para2">
          “The only way you survive is you continuously transform into some thing else. It's the idea of continuous transformation that make you an innovation company. The only way to discover the limits of the possible is to go beyond them into the impossible. – ...”
        </Typing>
        
        <div className="footer"></div>
       
    </div>
  );
}

export default App;