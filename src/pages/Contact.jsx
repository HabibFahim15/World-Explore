
const Contact = () => {

  const handleFormSubmit = (formData) => {
    console.log(formData.entries());
    const formInputData = Object.fromEntries(formData.entries());
    console.log(formInputData);
  }

  return (
    <section className="section-contact">
      <h2 className="container-title">Contact Us</h2>
      <div className="contact-wrapper container">
        <form action={handleFormSubmit} >
        <input type="text" 
        className="form-control"
        required 
        autoComplete="false"
        placeholder="Enter Your Name"
        name="username" 
        />
        <input className="form-control" type="email" required autoComplete="false" placeholder="Enter Your Email" name="email" />

        <textarea className="form-control" name="message" required placeholder="Enter Your Message" autoComplete="false"  rows="10"></textarea>


        <button type="submit" value={"send"}>Send</button>
      </form>
      </div>
      
    </section>
  );
};

export default Contact;