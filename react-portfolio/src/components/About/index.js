import React from 'react'
import coverImage from "../../assets/me.jpg";

function About(){

    return(
        <section>
        <h1 class="sections" id="about-me">About Me</h1>

       <div class="about-me">
      
           <div class="flex-right">
               
            <p>My name is Elijah Johnson and I am a 23 year old aspiring full stack web developer. 
                Ive had a passion for coding since I was 16 and have been mostly self taught. I started learning as much as I could over a couple years from youtube and forums, and then began making video games. I finished and released two before I 
                realized that it wasn't a realistic career option for me at the time. Instead my attention focused on web development. 
                I stopped making video games and signed up for a 6 month full stack web development course through UC Davis. 
                I am working on completing the bootcamp now and have already created some websites that I want to share. Below is a collection of the projects that I have finished. There will be many more to come!</p>
          
                <img src={coverImage} className="" style={{ width: "15%" }} alt="cover" />
            
           </div>

            </div>
    </section>

            
        
    )
}

export default About