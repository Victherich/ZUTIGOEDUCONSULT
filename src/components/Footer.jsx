// import React from "react";
// import styled from "styled-components";
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <FooterContainer>
//       <FooterContent>
//         {/* Logo & About */}
//         <FooterSection>
//           <Logo>Zutigo EduConsult</Logo>
//           <p>Empowering students with expert academic guidance and seamless international admissions.</p>
//         </FooterSection>

//         {/* Quick Links */}
//         <FooterSection>
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">Our Services</a></li>
//             <li><a href="#">Success Stories</a></li>
//             <li><a href="#">Contact</a></li>
//           </ul>
//         </FooterSection>

//         {/* Contact Info */}
//         <FooterSection>
//           <h3>Contact Us</h3>
//           <p><FaMapMarkerAlt /> 123 Education Avenue, City, Country</p>
//           <p><FaPhone /> +123 456 7890</p>
//           <p><FaEnvelope /> info@zutigoedu.com</p>
//         </FooterSection>

//         {/* Newsletter Signup */}
//         <FooterSection>
//           <h3>Subscribe to Our Newsletter</h3>
//           <NewsletterForm>
//             <input type="email" placeholder="Enter your email" />
//             <button type="submit">Subscribe</button>
//           </NewsletterForm>
//           <SocialIcons>
//             <a href="#"><FaFacebook /></a>
//             <a href="#"><FaTwitter /></a>
//             <a href="#"><FaInstagram /></a>
//             <a href="#"><FaLinkedin /></a>
//           </SocialIcons>
//         </FooterSection>
//       </FooterContent>

//       {/* Copyright */}
//       <Copyright>
//         &copy; {new Date().getFullYear()} Zutigo EduConsult. All Rights Reserved.
//       </Copyright>
//     </FooterContainer>
//   );
// };

// // Styled Components
// const FooterContainer = styled.footer`
//   background: #111;
//   color: white;
//   padding: 60px 10%;
// `;

// const FooterContent = styled.div`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//   gap: 30px;
//   text-align: left;

//   @media (max-width: 768px) {
//     text-align: center;
//   }
// `;

// const FooterSection = styled.div`
//   h3 {
//     font-size: 1.5rem;
//     margin-bottom: 15px;
//     color: #ff6600;
//   }

//   p, ul, li {
//     font-size: 1rem;
//     color: #ccc;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//   }

//   li {
//     margin: 8px 0;
//   }

//   a {
//     color: #ccc;
//     text-decoration: none;
//     transition: color 0.3s ease-in-out;

//     &:hover {
//       color: #ff6600;
//     }
//   }
// `;

// const Logo = styled.h2`
//   font-size: 2rem;
//   color: #ff6600;
//   margin-bottom: 10px;
// `;

// const NewsletterForm = styled.form`
//   display: flex;
//   align-items: center;
//   margin-top: 10px;

//   input {
//     flex: 1;
//     padding: 10px;
//     border: none;
//     border-radius: 5px 0 0 5px;
//   }

//   button {
//     padding: 10px 15px;
//     border: none;
//     background: #ff6600;
//     color: white;
//     cursor: pointer;
//     border-radius: 0 5px 5px 0;
//     transition: background 0.3s ease-in-out;

//     &:hover {
//       background: #e65500;
//     }
//   }
// `;

// const SocialIcons = styled.div`
//   margin-top: 20px;

//   a {
//     color: white;
//     font-size: 1.5rem;
//     margin-right: 15px;
//     transition: color 0.3s ease-in-out;

//     &:hover {
//       color: #ff6600;
//     }
//   }
// `;

// const Copyright = styled.div`
//   text-align: center;
//   padding: 20px 0;
//   font-size: 0.9rem;
//   color: #ccc;
//   margin-top: 40px;
//   border-top: 1px solid #444;
// `;

// export default Footer;






import React from "react";
import styled from "styled-components";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { useState } from "react";

const Footer = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("");

    const handleSubscribe = async (e) => {
      e.preventDefault();
  
      if (!email) {
        Swal.fire("Error!", "Please enter a valid email address.", "error");
        return;
      }
  
      // Show loading alert
      Swal.fire({
        title: "Subscribing...",
        text: "Please wait while we add you to our newsletter.",
        allowOutsideClick: false,
        didOpen: () => {
          Swal.showLoading();
        },
      });
  
      try {
        const response = await fetch("https://zutigoeduconsult.com/api/newsletter_subscribe.php", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });
  
        const result = await response.json();
  
        if (result.success) {
          Swal.fire("Success!", result.message, "success");
          setEmail(""); // Reset email field
        } else {
          Swal.fire("Error!", result.error, "error");
        }
      } catch (error) {
        Swal.fire("Error!", "Something went wrong. Please try again.", "error");
      }
    };

  return (
    <FooterContainer>
      <FooterContent>
        {/* Logo & About */}
        <FooterSection>
          <Logo>Zutigo EduConsult</Logo>
          <p>Empowering students with expert academic guidance and seamless international admissions.</p>
        </FooterSection>

        {/* Quick Links */}
        <FooterSection>
          <h3>Quick Links</h3>
          <ul>
            <li><a onClick={()=>navigate("/")}>Home</a></li>
            <li><a onClick={()=>navigate("/aboutus")}>About Us</a></li>
            <li><a onClick={()=>navigate("/services")}>Our Services</a></li>
            <li><a onClick={()=>navigate("/schoolinfo")}>School Info</a></li>
            <li><a onClick={()=>navigate("/contactus")}>Contact Us</a></li>
          </ul>
        </FooterSection>

        {/* Contact Info */}
        <FooterSection>
          <h3>Contact Us</h3>
          <p><FaEnvelope /> info@zutigoeduconsult.com</p>
          <p><FaPhone /> +234 901 444 4327</p>
        </FooterSection>

       

        {/* Newsletter Signup */}
        <FooterSection>
          <h3>Subscribe to Our Newsletter</h3>
          <NewsletterForm onSubmit={handleSubscribe}> 
          <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
            <button type="submit">Subscribe</button>
          </NewsletterForm>
          <SocialIcons>
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaLinkedin /></a>
          </SocialIcons>
        </FooterSection>
      </FooterContent>


      {/* <FooterSection>

      </FooterSection> */}


       {/* Office Addresses */}
       <FooterSection style={{marginTop:"40px"}}>
          <h3>Our Offices</h3>
          <Div>
          <AddressBlock>
            <p><FaMapMarkerAlt /> <strong>Abuja Office:</strong></p>
            <p>SUIT 036, Majia Plaza, 6th Avenue, Gwarinpa, Abuja.</p>
            <p><FaPhone /> +234 817 421 1261 | +234 901 444 4327</p>
          </AddressBlock>

          <AddressBlock>
            <p><FaMapMarkerAlt /> <strong>Lagos Office:</strong></p>
            <p>15B, Idowu Rufai Street, Off Ago Palace Way, Okota, Lagos.</p>
            <p><FaPhone /> +234 901 444 4327 | +234 803 304 8408</p>
          </AddressBlock>

          <AddressBlock>
            <p><FaMapMarkerAlt /> <strong>Port Harcourt Office:</strong></p>
            <p>76, Ken Saro Wiwa (Stadium Road), Port Harcourt, Rivers State.</p>
            <p><FaPhone /> +234 902 243 6649 | +234 703 860 7040</p>
          </AddressBlock>
          </Div>
        </FooterSection>

      {/* Copyright */}
      <Copyright>
        &copy; {new Date().getFullYear()} Zutigo EduConsult. All Rights Reserved.
      </Copyright>
    </FooterContainer>
  );
};

// Styled Components
const FooterContainer = styled.footer`
  background: #111;
  color: white;
  padding: 60px 10%;
`;

const FooterContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 30px;
  text-align: left;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const FooterSection = styled.div`
  h3 {
    font-size: 1.5rem;
    margin-bottom: 15px;
    color: #ff6600;
  }

  p, ul, li {
    font-size: 1rem;
    color: #ccc;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin: 8px 0;
  }

  a {
    color: #ccc;
    text-decoration: none;
    transition: color 0.3s ease-in-out;
    cursor:pointer;

    &:hover {
      color: #ff6600;
    }
  }
`;

const AddressBlock = styled.div`
  margin-bottom: 15px;
  padding: 10px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  width:100%;

  p {
    margin: 5px 0;
    font-size: 0.95rem;
  }

  strong {
    color: #ff6600;
  }
`;

const Logo = styled.h2`
  font-size: 2rem;
  color: #ff6600;
  margin-bottom: 10px;
`;

const NewsletterForm = styled.form`
  display: flex;
  align-items: center;
  margin-top: 10px;

  input {
    flex: 1;
    padding: 10px;
    border: none;
    border-radius: 5px 0 0 5px;
  }

  button {
    padding: 10px 15px;
    border: none;
    background: #ff6600;
    color: white;
    cursor: pointer;
    border-radius: 0 5px 5px 0;
    transition: background 0.3s ease-in-out;

    &:hover {
      background: #e65500;
    }
  }
`;

const SocialIcons = styled.div`
  margin-top: 20px;

  a {
    color: white;
    font-size: 1.5rem;
    margin-right: 15px;
    transition: color 0.3s ease-in-out;

    &:hover {
      color: #ff6600;
    }
  }
`;

const Copyright = styled.div`
  text-align: center;
  padding: 20px 0;
  font-size: 0.9rem;
  color: #ccc;
  margin-top: 40px;
  border-top: 1px solid #444;
`;

const Div = styled .div`
display:flex;
gap:10px;
jusify-content:center;
align-items:center;

@media(max-width:768px){
  flex-direction:column;
}

`

export default Footer;

