 
import { useState } from "react";


function ContactUs(){

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
  
    const handleSubmit = () => {
        
        //Post logic
    }

    return (

        <>
        
            <div className="ContactUs-div">

                <h1>Contact Us</h1>

                <p>We value open communication and encourage you to reach out to us with any questions, inquiries, or feedback. 
                We are here to provide you with the information and support you need. Please find below the various ways to get in touch with us:</p>

                <h2>General Inquiries:</h2>

                <p>For general inquiries or information about [School Name], you can contact us through the following channels:</p>

                <ul>
                    <li>- Phone: Call our main office at [Phone Number] during our office hours, and our friendly staff will be happy to assist you.</li>
                    <li>- Email: Send us an email at [Email Address], and we will respond to your inquiry promptly.</li>
                    <li>- Contact Form: Fill out the contact form below with your name, email address, and message. We will get back to you as soon as possible.</li>
                </ul>

                <h2>Campus Visit and Tours:</h2>

                <p>We welcome prospective families to visit our campus and experience the vibrant learning environment at [School Name]. To schedule a campus visit or 
                arrange a guided tour, please contact our admissions office: </p>

                <ul>
                    <li>- Phone: Call our admissions office at [Admissions Phone Number] to schedule a visit or tour. </li>
                    <li>- Email: Send an email to [Admissions Email Address] with your preferred date and time for the visit, and our admissions team will assist you in scheduling.</li>
                </ul>

                <h2>Social Media:</h2>

                <p>Stay connected with [School Name] through our social media platforms. Follow us on Facebook, Instagram, and Twitter to receive updates, news, and glimpses into our
                vibrant school community.</p>

                <ul>
                    <li>- Facebook: [School Name] on Facebook</li>
                    <li>- Instagram: [School Name] on Instagram</li>
                    <li>- Twitter: [School Name] on Twitter</li> 
                </ul>

                <h2>Office Hours:</h2>

                <p>Our office hours are as follows:</p>

                <ul>
                    <li>- Monday to Friday: [Office Hours]</li>
                    <li>- Saturday: [Office Hours]</li>
                    <li>- Sunday: Closed</li>
                </ul>

                <p>Please note that during holidays or school breaks, our office hours may vary. We recommend contacting us in advance or checking our website for any updates or changes.</p>

                <h2>Address:</h2>

                <p>You can visit us at the following address: </p>

                <ul>
                    <li>[School Name]</li>
                    <li>[Street Address]</li>
                    <li>[City, State/Province, Postal Code]</li>
                    <li>[Country]</li>
                </ul>

                <p>We are conveniently located and easily accessible. You can find detailed directions on our website or contact us for further assistance.

                We look forward to hearing from you and welcoming you to the [School Name] community. Your feedback and inquiries are important to us as we strive to provide 
                the best educational experience for our students.</p>

               
            
            </div>


            <div className="Contact-form">
                <h1>Contact form</h1>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name">Name</label>
                    <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    />

                    <label htmlFor="email">Email</label>
                    <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />

                    <label htmlFor="message">Message</label>
                    <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    ></textarea>

                    <button type="submit">Submit</button>
                </form>
            </div>

        </>

    );

}



export default ContactUs;

 
