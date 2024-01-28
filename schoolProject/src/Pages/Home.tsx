import { Link  } from 'react-router-dom'


function Home() {

    return(

        <>
             
            <div className="home-header-div"> 
                <div className="home-header-div-text" > 

                    <h1> Welcome to [School Name] ! </h1>

                 

                    <p> 

                        At [School Name], we believe in empowering students to reach their full potential and become 
                        lifelong learners. Our mission is to provide a nurturing and inclusive learning environment 
                        where students can thrive academically, socially, and emotionally.

                    </p>
                    
                </div>

            
                <img src="src/assets/imgs/home-school.jpg" /> 
                
            </div>

                
            <div className="home-main-div"> 

                <div className="home-content-div"> 
                    
                    <div  className="home-content-div-img">
                        <img src="src/assets/imgs/teachers.jpg" /> 
                    </div>

                    <div className="home-content-div-text" > 

                        <div className="home-content-div-text-header">

                            <h1>  Dedicated team </h1>

                        </div>

                        <p> 

                            At [School Name], we believe in empowering students to reach their full potential and become 
                            lifelong learners. Our mission is to provide a nurturing and inclusive learning environment 
                            where students can thrive academically, socially, and emotionally.

                        </p>
                        
                    </div>

                </div>

            

                <div className="home-content-div"> 
                    <div className="home-content-div-text" > 

                        <div className="home-content-div-text-header">

                            <h1>  Supportive community </h1>

                        </div>

                        <p> 

                        We pride ourselves on creating a supportive and engaging community where students feel valued and respected. 
                        Through innovative teaching methods and personalized instruction, we strive to meet the unique needs and 
                        interests of each student, allowing them to flourish and grow.

                        </p>
                        
                    </div>

                    <div  className="home-content-div-img">
                        <img src="src/assets/imgs/students.jpg" /> 
                    </div>
                </div>

                <div className="home-content-div"> 
                    
                    <div  className="home-content-div-img">
                        <img  src="src/assets/imgs/libary.jpg" /> 
                    </div>

                    <div className="home-content-div-text" > 

                        <div className="home-content-div-text-header">

                            <h1>  Modern environment </h1>

                        </div>

                        <p> 

                        Our state-of-the-art facilities provide a modern and stimulating learning environment. From well-equipped classrooms to specialized labs, 
                        libraries, and sports facilities, we offer a wide range of resources to enhance the educational experience of our students.
                        Read more about our <span> { <Link to={"/Facilities"}>facilities</Link>} </span>
                        </p>
                        
                    </div>

                </div>

                <div className="home-content-div"> 
                    <div className="home-content-div-text" > 

                        <div className="home-content-div-text-header">

                            <h1>   Holistic development </h1>

                        </div>

                        <p> 

                        At [School Name], we recognize the importance of holistic development. We encourage students to participate in a variety of extracurricular activities, 
                        including sports, arts, clubs, and community service. These experiences foster teamwork, leadership skills, and a sense of social responsibility.
                       

                        </p>
                        
                    </div>

                    <div  className="home-content-div-img">
                        <img src="src/assets/imgs/student.jpg" /> 
                    </div>
                </div>


                <div className="home-content-div"> 
                    
                    <div  className="home-content-div-img">
                        <img src="src/assets/imgs/contact.jpg" /> 
                    </div>

                    <div className="home-content-div-text" > 

                        <div className="home-content-div-text-header">

                            <h1>  Contact us </h1>

                        </div>

                        <p> 

                        <span> { <Link to={"/Contact-Us"}>Contact us</Link>} </span> today to schedule a visit and discover how [School Name] can provide your child with a well-rounded education that sets them on the path to success.

                        </p>
                        
                    </div>

                </div>
                

            </div>
        </>

    )
};


export default Home;