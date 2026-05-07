// import React, { useState } from "react";
// import styled from "styled-components";

// const faqs = [
//   {
//     question: "How can I apply for admission?",
//     answer: "You can apply by submitting your documents to us. Our team will guide you through the process and help with visa applications.",
//   },
//   {
//     question: "What countries do you provide admission services for?",
//     answer: "We provide admission assistance for universities in the USA, UK, Canada, Australia, and many more.",
//   },
//   {
//     question: "Do you offer visa assistance?",
//     answer: "Yes, we provide full visa counseling services to ensure your application has the highest chances of success.",
//   },
//   {
//     question: "Can you help with accommodation arrangements?",
//     answer: "Absolutely! We assist in securing comfortable accommodation for students in their preferred study destination.",
//   },
// ];

// const ContactUs = () => {
//   const [activeIndex, setActiveIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setActiveIndex(activeIndex === index ? null : index);
//   };

//   return (
//     <ContactPage>
//       {/* Contact Section */}
//       <ContactSection>
//         <h2>Contact Us</h2>
//         <p>We'd love to hear from you! Reach out to us via phone, email, or visit our offices.</p>
//         <ContactDetails>
//           <div>
//             <h4>📍 Abuja Office</h4>
//             <p>SUIT 036, MAJIA PLAZA, 6TH AVENUE, GWARINPA- ABUJA.</p>
//             <p>📞 +2348174211261 | +2349014444327</p>
//           </div>
//           <div>
//             <h4>📍 Lagos Office</h4>
//             <p>15B, IDOWU RUFAI STREET, OFF AGO PALACE WAY, OKOTA, LAGOS.</p>
//             <p>📞 +2349014444327 | +2348033048408</p>
//           </div>
//           <div>
//             <h4>📍 Port Harcourt Office</h4>
//             <p>76, KEN SARO WIWA (Stadium Road) PORT HARCOURT, RIVERS STATE.</p>
//             <p>📞 +2349022436649 | +2347038607040</p>
//           </div>
//         </ContactDetails>
//       </ContactSection>

//       {/* FAQ Section */}
//       <FAQSection>
//         <h2>Frequently Asked Questions</h2>
//         {faqs.map((faq, index) => (
//           <FAQItem key={index} onClick={() => toggleFAQ(index)}>
//             <Question>
//               {faq.question} <span>{activeIndex === index ? "−" : "+"}</span>
//             </Question>
//             {activeIndex === index && <Answer>{faq.answer}</Answer>}
//           </FAQItem>
//         ))}
//       </FAQSection>

//       {/* Contact Form */}
//       <FormSection>
//         <h2>Send Us a Message</h2>
//         <p>Fill out the form below and we'll get back to you as soon as possible.</p>
//         <ContactForm>
//           <label>Name</label>
//           <input type="text" placeholder="Enter your name" required />
//           <label>Email</label>
//           <input type="email" placeholder="Enter your email" required />
//           <label>Message</label>
//           <textarea rows="5" placeholder="Your message..." required></textarea>
//           <button type="submit">Send Message</button>
//         </ContactForm>
//       </FormSection>
//     </ContactPage>
//   );
// };

// // Styled Components
// const ContactPage = styled.div`
//   padding: 60px 10%;
//   background: #f8f9fa;

//   @media(max-width:428px){
//     padding:60px 5%;
//   }
// `;

// const ContactSection = styled.section`
//   text-align: center;
//   margin-bottom: 50px;

//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     color: #ff6600;
//   }

//   p {
//     font-size: 1.1rem;
//     color: #666;
//   }
// `;

// const ContactDetails = styled.div`
//   display: flex;
//   flex-wrap: wrap;
//   justify-content: space-between;
//   margin-top: 30px;
//   gap: 20px;

//   div {
//     background: #fff;
//     padding: 20px;
//     border-radius: 8px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//     flex: 1;
//     min-width: 300px;
//     text-align: left;
//     @media(max-width:320px){
//         min-width:250px;
//     }
//   }

//   h4 {
//     color: #333;
//   }
// `;

// const FAQSection = styled.section`
//   text-align: center;
//   margin: 60px 0;

//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     // color: #ff6600;
//     color:#004aad;
//   }
// `;

// const FAQItem = styled.div`
//   background: #fff;
//   margin: 10px auto;
//   padding: 15px;
//   max-width: 800px;
//   border-radius: 6px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   cursor: pointer;
//   transition: 0.3s;
// `;

// const Question = styled.div`
//   font-size: 1.2rem;
//   font-weight: bold;
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   color: #333;
// `;

// const Answer = styled.div`
//   font-size: 1rem;
//   color: #555;
//   margin-top: 10px;
// `;

// const FormSection = styled.section`
//   text-align: center;
//   margin-top: 60px;

//   h2 {
//     font-size: 2.5rem;
//     margin-bottom: 20px;
//     color: #ff6600;
//   }

//   p {
//     font-size: 1.1rem;
//     color: #666;
//   }
// `;

// const ContactForm = styled.form`
//   max-width: 600px;
//   margin: auto;
//   background: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
//   display: flex;
//   flex-direction: column;

//   label {
//     font-size: 1rem;
//     font-weight: bold;
//     margin: 10px 0 5px;
//     color: #333;
//     text-align:left;
//   }

//   input, textarea {
//     width: 100%;
//     padding: 10px;
//     border: 1px solid #ccc;
//     border-radius: 5px;
//     font-size: 1rem;
//   }

//   button {
//     background: #004aad;
//     color: white;
//     padding: 12px;
//     border: none;
//     border-radius: 5px;
//     font-size: 1.1rem;
//     cursor: pointer;
//     margin-top: 15px;
//     transition: 0.3s;

//     &:hover {
//       background: gray;
//     }
//   }
// `;

// export default ContactUs;





import React, { useState } from "react";
import styled from "styled-components";
import Swal from "sweetalert2";

const faqs = [
  {
    question: "How can I apply for admission?",
    answer:
      "You can apply by submitting your documents to us. Our team will guide you through the process and help with visa applications.",
  },
  {
    question: "What countries do you provide admission services for?",
    answer:
      "We provide admission assistance for universities in the USA, UK, Canada, Australia, and many more.",
  },
  {
    question: "Do you offer visa assistance?",
    answer:
      "Yes, we provide full visa counseling services to ensure your application has the highest chances of success.",
  },
  {
    question: "Can you help with accommodation arrangements?",
    answer:
      "Absolutely! We assist in securing comfortable accommodation for students in their preferred study destination.",
  },
];

const ContactUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    phone:"",
  });

  const toggleFAQ = (index) => {
      setActiveIndex(activeIndex === index ? null : index);
    };

    const handleChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // =========================
    // VALIDATION
    // =========================

    // Trim inputs
    const name = formData.name?.trim();
    const email = formData.email?.trim();
    const message = formData.message?.trim();

    // Required fields
    if (!name || !email || !message) {
      return Swal.fire({
        title: "Validation Error",
        text: "All fields are required.",
        icon: "error",
        confirmButtonColor: "#ff0000",
      });
    }

    // Length limits
    if (name.length > 100) {
      return Swal.fire({
        title: "Validation Error",
        text: "Name is too long.",
        icon: "error",
      });
    }

    if (message.length > 3000) {
      return Swal.fire({
        title: "Validation Error",
        text: "Message is too long.",
        icon: "error",
      });
    }

    // Email validation
    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      return Swal.fire({
        title: "Invalid Email",
        text: "Please enter a valid email address.",
        icon: "error",
      });
    }

    // Anti-spam honeypot
    // Add hidden input named "website"
    if (formData.website) {
      return;
    }

    // =========================
    // SANITIZE DATA
    // =========================

    const sanitizedData = {
      name: name.replace(/[<>]/g, ""),
      email: email.replace(/[<>]/g, ""),
      message: message.replace(/[<>]/g, ""),
    };

    // =========================
    // SHOW LOADING
    // =========================

    Swal.fire({
      title: "Sending...",
      text: "Please wait while we send your message.",
      allowOutsideClick: false,
      showConfirmButton: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    // =========================
    // REQUEST TIMEOUT
    // =========================

    const controller = new AbortController();

    const timeout = setTimeout(() => {
      controller.abort();
    }, 15000);

    // =========================
    // CSRF TOKEN
    // =========================

    const csrfToken =
      localStorage.getItem("csrfToken");

    // =========================
    // SEND REQUEST
    // =========================

    const response = await fetch(
      "https://zutigoeduconsult.com/api/contact_form_endpoint.php",
      {
        method: "POST",

        signal: controller.signal,

        credentials: "same-origin",

        headers: {
          "Content-Type": "application/json",
          "X-Requested-With": "XMLHttpRequest",
          "X-CSRF-Token": csrfToken || "",
        },

        body: JSON.stringify(sanitizedData),
      }
    );

    clearTimeout(timeout);

    // =========================
    // VALIDATE RESPONSE TYPE
    // =========================

    const contentType =
      response.headers.get("content-type");

    if (
      !contentType ||
      !contentType.includes("application/json")
    ) {
      throw new Error("Invalid server response");
    }

    const result = await response.json();

    // =========================
    // HANDLE RESPONSE
    // =========================

    if (response.ok && result.success) {
      Swal.fire({
        title: "Success!",
        text:
          result.message ||
          "Your message has been sent successfully.",
        icon: "success",
        confirmButtonColor: "#004aad",
      });

      // Reset form
      setFormData({
        name: "",
        email: "",
        message: "",
        website: "", // honeypot
      });

    } else {
      Swal.fire({
        title: "Error!",
        text:
          result.error ||
          "Something went wrong. Please try again.",
        icon: "error",
        confirmButtonColor: "#ff0000",
      });
    }

  } catch (error) {

    console.error(error);

    let errorMessage =
      "Failed to send message. Please try again later.";

    // Timeout
    if (error.name === "AbortError") {
      errorMessage =
        "Request timed out. Please try again.";
    }

    Swal.fire({
      title: "Error!",
      text: errorMessage,
      icon: "error",
      confirmButtonColor: "#ff0000",
    });
  }
};

  return (
    <ContactPage>
      {/* Contact Section */}
      <ContactSection>
        <h2>Contact Us</h2>
        <p>
          We'd love to hear from you! Reach out to us via phone, email, or visit our offices.
        </p>
        <ContactDetails>
          <div>
            <h4>📍 Abuja Office</h4>
            <p>SUIT 036, MAJIA PLAZA, 6TH AVENUE, GWARINPA- ABUJA.</p>
            <p>📞 +2348174211261 | +2349014444327</p>
          </div>
          <div>
            <h4>📍 Lagos Office</h4>
            <p>15B, IDOWU RUFAI STREET, OFF AGO PALACE WAY, OKOTA, LAGOS.</p>
            <p>📞 +2349014444327 | +2348033048408</p>
          </div>
          <div>
            <h4>📍 Port Harcourt Office</h4>
            <p>76, KEN SARO WIWA (Stadium Road) PORT HARCOURT, RIVERS STATE.</p>
            <p>📞 +2349022436649 | +2347038607040</p>
          </div>
        </ContactDetails>
      </ContactSection>

      {/* FAQ Section */}
      <FAQSection>
        <h2>Frequently Asked Questions</h2>
        {faqs.map((faq, index) => (
          <FAQItem key={index} onClick={() => toggleFAQ(index)}>
            <Question>
              {faq.question} <span>{activeIndex === index ? "−" : "+"}</span>
            </Question>
            {activeIndex === index && <Answer>{faq.answer}</Answer>}
          </FAQItem>
        ))}
      </FAQSection>

      {/* Contact Form */}
      <FormSection>
        <h2>Send Us a Message</h2>
        <p>Fill out the form below and we'll get back to you as soon as possible.</p>
        <ContactForm onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Enter your name"
            onChange={handleChange}
            required
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleChange}
            required
          />
            <label>Phone</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Enter your phone number"
            onChange={handleChange}
            required
          />
          <label>Message</label>
          <textarea
            name="message"
            rows="5"
            value={formData.message}
            placeholder="Your message..."
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send Message</button>
        </ContactForm>
      </FormSection>
    </ContactPage>
  );
};

// Styled Components
const ContactPage = styled.div`
  padding: 60px 10%;
  background: #f8f9fa;

  @media (max-width: 428px) {
    padding: 60px 5%;
  }
`;

const ContactSection = styled.section`
  text-align: center;
  margin-bottom: 50px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ff6600;
  }

  p {
    font-size: 1.1rem;
    color: #666;
  }
`;

const ContactDetails = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
  gap: 20px;

  div {
    background: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    flex: 1;
    min-width: 300px;

    @media (max-width: 320px) {
      min-width: 250px;
    }
  }

  h4 {
    color: #333;
  }
`;

const FAQSection = styled.section`
  text-align: center;
  margin: 60px 0;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #004aad;
  }
`;

const FAQItem = styled.div`
  background: #fff;
  margin: 10px auto;
  padding: 15px;
  max-width: 800px;
  border-radius: 6px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: 0.3s;
`;

const Question = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #333;
`;

const Answer = styled.div`
  font-size: 1rem;
  color: #555;
  margin-top: 10px;
`;

// const FormSection = styled.section`
//   text-align: center;
//   margin-top: 60px;
// `;

// const ContactForm = styled.form`
//   max-width: 600px;
//   margin: auto;
//   background: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
// `;



const FormSection = styled.section`
  text-align: center;
  margin-top: 60px;

  h2 {
    font-size: 2.5rem;
    margin-bottom: 20px;
    color: #ff6600;
  }

  p {
    font-size: 1.1rem;
    color: #666;
  }
`;

const ContactForm = styled.form`
  max-width: 600px;
  margin: auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  label {
    font-size: 1rem;
    font-weight: bold;
    margin: 10px 0 5px;
    color: #333;
    text-align:left;
  }

  input, textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 1rem;
  }

  button {
    background: #004aad;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    font-size: 1.1rem;
    cursor: pointer;
    margin-top: 15px;
    transition: 0.3s;

    &:hover {
      background: gray;
    }
  }
`;


export default ContactUs;

