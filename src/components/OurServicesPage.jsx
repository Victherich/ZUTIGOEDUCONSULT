// import React, { useState } from "react";
// import styled from "styled-components";
// import { FaChalkboardTeacher, FaUniversity, FaGlobe, FaHandsHelping } from "react-icons/fa";
// import servicesHero from "../Images/im8.JPG"; // Hero Section Image

// const servicesData = [
//     {
//         title: "Academic Counseling",
//         icon: <FaChalkboardTeacher />,
//         content: `At Zutigo EduConsult, we understand that choosing a career path can be a daunting task for students. 
//       With so many options available and limited knowledge about each field, it's easy to feel overwhelmed 
//       and unsure of which direction to take. That's where our professional career advisory services come in. 
//       Our skilled advice will help pave the student’s path to success, smoothing out any bumps along the way.\n\n
      
//       We are here to assist them in achieving their goals and objectives. We value business ethics, integrity, 
//       and pride ourselves on maintaining the highest professional standards. Our experienced team can be relied 
//       upon in almost any circumstance, as quality service is what we strive for at Zutigo EduConsult.\n\n
      
//       Our team of experienced career advisors is dedicated to helping students navigate the complex world of 
//       career choices. We provide personalized guidance and support to help you make informed decisions about your future.\n\n
      
//       Our Services Include:\n\n
      
//       - **Career Assessments:** Our career assessments are designed to help you identify your strengths, skills, interests, and values. 
//         By understanding your unique profile, we can help you explore career options that align with your personality and goals.\n\n
      
//       - **Resume Review:** Your resume is often the first impression you make with potential employers. Our team can provide feedback 
//         and guidance on how to make your resume stand out and showcase your skills and experience.\n\n
      
//       - **Career Planning:** Our career planning services help you create a roadmap for achieving your long-term career goals. 
//         We provide guidance on education and training options, career advancement opportunities, immigration to your choice of country, 
//         and how to stay on track to achieve your objectives.\n\n
      
//       At Zutigo EduConsult, we are committed to helping you achieve your career goals. Contact us today to learn more about our 
//       professional career advisory services for students.\n\n
      
//       In line with the vision of the company to provide an all-rounded educational service package, a list of top professionals 
//       with industry experience has been recruited.\n\n
      
//       We understand that managing the career of education seekers can be quite delicate; therefore, we attach so much importance 
//       to details and utmost adherence to standards.\n\n
      
//       If you have decided on your study plan already, it would be wise to seek expert consultation with one of our staff - 
//       info@zutigoeduconsult.com.`,
//       }
// ,      
      
      
//   {
//     title: "University Enrollment",
//     icon: <FaUniversity />,
//     content: "Our team assists with university applications, ensuring students meet admission requirements and get placed in their preferred institutions.",
//   },
//   {
//     title: "International Education",
//     icon: <FaGlobe />,
//     content: "We connect students with global educational opportunities, helping them secure placements in prestigious institutions worldwide.",
//   },
//   {
//     title: "Student Support",
//     icon: <FaHandsHelping />,
//     content: "From visa assistance to pre-departure orientation, we ensure students have all the support they need for a smooth transition.",
//   },
// ];

// const Services = () => {
//   const [activeIndex, setActiveIndex] = useState(0);

//   return (
//     <Container>
//       {/* Hero Section */}
//       <HeroSection>
//         <HeroContent>
//           <h1>Our Services</h1>
//           <p>Providing expert guidance, enrollment support, and international education opportunities.</p>
//         </HeroContent>
//       </HeroSection>

//       {/* Services Dashboard */}
//       <ServicesSection>
//         <Sidebar>
//           {servicesData.map((service, index) => (
//             <TabButton 
//               key={index} 
//               active={activeIndex === index}
//               onClick={() => setActiveIndex(index)}
//             >
//               {service.icon} {service.title}
//             </TabButton>
//           ))}
//         </Sidebar>

//         <ContentArea>
//           <h2>{servicesData[activeIndex].title}</h2>
//           <p>{servicesData[activeIndex].content}</p>
//         </ContentArea>
//       </ServicesSection>
//     </Container>
//   );
// };

// // Styled Components
// const Container = styled.div`
//   font-family: "Arial", sans-serif;
// `;

// const HeroSection = styled.section`
//   background: url(${servicesHero}) center/cover no-repeat;
//   height: 60vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   text-align: center;
//   color: white;
//   padding: 20px;
//   position: relative;

//   &::before {
//     content: "";
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: rgba(0, 0, 0, 0.6);
//   }
// `;

// const HeroContent = styled.div`
//   position: relative;
//   z-index: 1;
//   max-width: 700px;

//   h1 {
//     font-size: 2.5rem;
//     margin-bottom: 10px;
//   }

//   p {
//     font-size: 1.2rem;
//   }
// `;

// const ServicesSection = styled.section`
//   display: flex;
//   padding: 60px 10%;
//   background: #f8f8f8;
//   gap: 30px;

//   @media (max-width: 768px) {
//     flex-direction: column;
//   }
// `;

// const Sidebar = styled.div`
//   width: 300px;
//   display: flex;
//   flex-direction: column;
//   background: white;
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     width: 100%;
//   }
// `;

// const TabButton = styled.button`
//   display: flex;
//   align-items: center;
//   gap: 10px;
//   background: ${({ active }) => (active ? "#ff6600" : "transparent")};
//   color: ${({ active }) => (active ? "white" : "#333")};
//   font-size: 1.1rem;
//   padding: 12px;
//   border: none;
//   border-radius: 5px;
//   margin-bottom: 10px;
//   cursor: pointer;
//   transition: 0.3s;

//   svg {
//     font-size: 1.5rem;
//   }

//   &:hover {
//     background: #ff6600;
//     color: white;
//   }
// `;

// const ContentArea = styled.div`
//   flex: 1;
//   background: white;
//   padding: 40px;
//   border-radius: 10px;
//   box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

//   h2 {
//     font-size: 2rem;
//     color: #ff6600;
//   }

//   p {
//     font-size: 1.1rem;
//     margin-top: 10px;
//   }
// `;

// export default Services;





import React, { useState } from "react";
import styled from "styled-components";
import { FaChalkboardTeacher, FaUniversity, FaGlobe, FaHandsHelping, FaUserTie, FaUniregistry, FaPlaneDeparture, FaPassport, FaHome, FaMoneyBillWave } from "react-icons/fa";
import servicesHero from "../Images/im8.JPG"; // Hero Section Image



const Services = () => {
  const [activeIndex, setActiveIndex] = useState(1);


  const scrollToContainer = (containerId) => {
    const element = document.getElementById(containerId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };



  return (
    <Container>
      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <h1>Our Services</h1>
          <p>Providing expert guidance, enrollment support, and international education opportunities.</p>
        </HeroContent>
      </HeroSection>

      {/* Services Dashboard */}
      <ServicesSection id="myContainer">
        <Sidebar>
         
            <TabButton s 
            style={{backgroundColor:activeIndex===1?"#ff6600":"",
                color:activeIndex===1?"white":"",
            }}
             onClick={()=>{setActiveIndex(1);scrollToContainer("myContainer")}}> 
             <FaUserTie/><p>One to One Free Consultancy</p> 
            </TabButton>

            <TabButton 
            style={{backgroundColor:activeIndex===2?"#ff6600":"",
                color:activeIndex===2?"white":"",
            }}
             onClick={()=>{setActiveIndex(2);scrollToContainer("myContainer")}}> 
             <FaUniversity/><p>Admission Processing</p> 
            </TabButton>

            <TabButton 
            style={{backgroundColor:activeIndex===3?"#ff6600":"",
                color:activeIndex===3?"white":"",
            }}
             onClick={()=>{setActiveIndex(3);scrollToContainer("myContainer")}}> 
             <FaPlaneDeparture/><p>Pre-Depature Briefing</p>
            </TabButton>

            <TabButton 
            style={{backgroundColor:activeIndex===4?"#ff6600":"",
                color:activeIndex===4?"white":"",
            }}
             onClick={()=>{setActiveIndex(4);scrollToContainer("myContainer")}}> 
             <FaPassport/><p>Visa Assistance & Counselling</p>
            </TabButton>

            <TabButton 
            style={{backgroundColor:activeIndex===5?"#ff6600":"",
                color:activeIndex===5?"white":"",
            }}
             onClick={()=>{setActiveIndex(5);scrollToContainer("myContainer")}}> 
             <FaHome/><p>Accommodation</p>
            </TabButton>

            <TabButton 
            style={{backgroundColor:activeIndex===6?"#ff6600":"",
                color:activeIndex===6?"white":"",
            }}
             onClick={()=>{setActiveIndex(6);scrollToContainer("myContainer")}}> 
             <FaMoneyBillWave/><p>Budgeting</p>
            </TabButton>
    
        </Sidebar>

        {activeIndex===1&&<ContentArea>
  <h2>One to One Free Consultancy</h2>

  <p>
    At <strong>Zutigo EduConsult</strong>, we understand that choosing a career path can be a daunting task for students. 
    With so many options available and limited knowledge about each field, it's easy to feel overwhelmed and unsure of which direction to take. 
    That's where our professional career advisory services come in. Our skilled advice will help pave the student’s path to success, 
    smoothing out any bumps along the way.
  </p>

  <p>
    We are here to assist students in achieving their goals and objectives. We value business ethics, integrity, 
    and pride ourselves on maintaining the highest professional standards. Our experienced team can be relied upon in almost any circumstance, 
    as quality service is what we strive for at Zutigo EduConsult.
  </p>

  <h3>Our Services Include:</h3>

  <h4>Career Assessments</h4>
  <p>
    Our career assessments are designed to help you identify your <strong>strengths, skills, interests, and values</strong>. 
    By understanding your unique profile, we can help you explore career options that align with your personality and goals.
  </p>

  <h4>Resume Review</h4>
  <p>
    Your resume is often the first impression you make with potential employers. Our team can provide <strong>feedback and guidance</strong> 
    on how to make your resume stand out and showcase your skills and experience.
  </p>

  <h4>Career Planning</h4>
  <p>
    Our career planning services help you create a <strong>roadmap</strong> for achieving your long-term career goals. 
    We provide guidance on <strong>education and training options, career advancement opportunities, immigration</strong> to your choice of country, 
    and how to stay on track to achieve your objectives.
  </p>

  <p>
    At <strong>Zutigo EduConsult</strong>, we are committed to helping you achieve your career goals. Contact us today to learn more about our 
    professional career advisory services for students.
  </p>

  <p>
    In line with the vision of the company to provide an <strong>all-rounded educational service package</strong>, a list of top professionals 
    with industry experience has been recruited. We understand that managing the career of education seekers can be quite delicate; therefore, 
    we attach so much importance to details and utmost adherence to standards.
  </p>

  <p>
    If you have decided on your study plan already, it would be wise to seek expert consultation with one of our staff at  
    <a href="mailto:info@zutigoeduconsult.com"><strong>info@zutigoeduconsult.com</strong></a>.
  </p>
</ContentArea>}

{activeIndex===2&&<ContentArea>
  <h2>Admission Processing</h2>

  <h3>Information and Updates</h3>
  
  <p>
    Our focus is on activities that provide students with vital <strong>information about studying abroad</strong>. 
    These include <strong>seminars, presentations, bulk emails, and SMS</strong>. This ensures that our students stay updated on 
    the latest offers from partner institutions, such as <strong>scholarships, internships, and other benefits</strong>.
  </p>

  <p>
    Apart from assisting students, we also provide <strong>on-site strategic information</strong> to our partner institutions 
    to help them penetrate the Nigerian market. This information may include <strong>marketing strategies, government-funded 
    scholarships, institutional events to attend, and much more</strong>.
  </p>

  <p>
    At our admission processing service, we understand the challenges that <strong>international students</strong> face 
    when applying to study abroad. That’s why we are committed to delivering <strong>high-quality services</strong> 
    to make the admission process as smooth and stress-free as possible.
  </p>

  <p>
    We work closely with our clients to ensure that they are <strong>well-informed</strong> throughout the process and 
    that their applications are submitted on time. If you are an international student looking to study abroad, 
    our admission processing services can help you achieve your academic goals.
  </p>

  <p>
    <strong>Contact us today</strong> to learn more about our services and how we can assist you with your application.
  </p>

  <h3>Our Admission Processing Services Include:</h3>

  <h4>📌 Application Review</h4>
  <p>
    Our team will <strong>review your application</strong> to ensure that it is complete and meets the admission requirements 
    of your desired program.
  </p>

  <h4>📌 Document Translation and Notarization</h4>
  <p>
    If your documents are not in the language of the institution you are applying to, we can provide <strong>translation services</strong>. 
    Additionally, we offer <strong>notarization services</strong> if required.
  </p>

  <h4>📌 Application Submission</h4>
  <p>
    We will <strong>submit your application</strong> to the institution on your behalf, ensuring that it meets all requirements 
    and is submitted before the deadline.
  </p>

  <h4>📌 Follow-up</h4>
  <p>
    We will <strong>follow up with the institution</strong> to track the progress of your application and provide any additional 
    information that may be required.
  </p>

  <h4>📌 Visa Assistance</h4>
  <p>
    We can assist you with the <strong>visa application process</strong>, providing guidance and support to help you 
    obtain your student visa without stress.
  </p>

  <h3>Arrival Assistance</h3>

  <p>
    This is one of the <strong>most important parts</strong> of our job because the student has now obtained a visa 
    to study in a <strong>new environment</strong>. It is crucial to prepare them both <strong>psychologically and physically</strong> 
    for this transition.
  </p>

  <p>
    Our counselors advise students on <strong>important travel documents</strong> and emphasize the importance of arriving at the 
    airport on time. We also stress the importance of <strong>respecting the culture and laws</strong> of the host country.
  </p>

  <p>
    Additionally, we strongly warn against <strong>plagiarism</strong>, which is a major reason why some students 
    struggle in international academic settings.
  </p>

  <p>
    We also arrange your <strong>arrival and settling down</strong> in the study destination. Whether in conjunction with your 
    chosen institution or through private arrangements, we ensure that you <strong>settle in comfortably</strong>.
  </p>
</ContentArea>}

{activeIndex===3&&<ContentArea>
  <h2>Pre-Departure Briefing</h2>

  <p>
    We understand that preparing to study abroad can be both <strong>exciting and overwhelming</strong>. 
    That’s why we offer a <strong>comprehensive pre-departure briefing</strong> to help you prepare for your journey and 
    maximize your international education experience.
  </p>

  <p>
    Our pre-departure briefing is designed to help you feel <strong>confident and well-prepared</strong>. 
    We offer both <strong>online and in-person briefing sessions</strong>, allowing you to choose the format that works best for you. 
    Our experienced advisors are always available to answer your questions and provide ongoing support throughout your journey.
  </p>

  <p>
    If you’re an international student preparing to study abroad, <strong>don’t hesitate to contact us</strong> for our 
    pre-departure briefing services. We’re here to support you at every step of the way!
  </p>

  <h3>📌 Personalized Support</h3>

  <p>
    We offer both <strong>one-on-one consultations</strong> and <strong>group sessions</strong>, based on your preferences and needs. 
    Our team provides <strong>personalized advice and guidance</strong> tailored to your destination country.
  </p>

  <p>
    By taking advantage of our <strong>pre-departure briefing service</strong>, you'll be well-equipped to handle the challenges of studying abroad. 
    You’ll also have the peace of mind of knowing that you have a <strong>trusted resource</strong> to turn to for advice and support.
  </p>

  <p><strong>So why wait?</strong> Contact us today to schedule your pre-departure briefing and start your journey with confidence!</p>

  <h3>🔹 What Our Pre-Departure Briefing Covers:</h3>

  <h4>✅ Culture Shock and Adjustment</h4>
  <p>
    Moving to a new country can be a major adjustment. We provide expert guidance on <strong>coping with culture shock</strong>, 
    understanding <strong>cultural differences</strong>, and making a smooth transition into your new environment.
  </p>

  <h4>✅ Legal and Administrative Requirements</h4>
  <p>
    We will guide you through the <strong>visa application process</strong> and help you understand the <strong>legal 
    and administrative requirements</strong> of studying abroad.
  </p>

  <h4>✅ Housing and Accommodation</h4>
  <p>
    Finding a safe and comfortable place to live in a new country can be challenging. We provide <strong>tips and advice</strong> 
    on securing <strong>suitable housing</strong> and accommodation options.
  </p>

  <h4>✅ Healthcare and Insurance</h4>
  <p>
    Navigating the healthcare system in a new country can be complex. We offer guidance on <strong>healthcare options</strong> 
    and help you understand <strong>health insurance policies</strong> to ensure you’re covered.
  </p>

  <h4>✅ Financial Management</h4>
  <p>
    Studying abroad can be costly, so it’s essential to have a solid financial plan. We offer expert advice on <strong>budgeting, 
    banking, and managing your finances</strong> while studying abroad.
  </p>

  <h4>✅ Safety and Security</h4>
  <p>
    Your safety is our priority. We provide key tips on <strong>staying safe and secure</strong>, including advice on 
    <strong>personal safety, emergency procedures, and cultural norms</strong> in your host country.
  </p>

  <p>
    Our pre-departure briefing is designed to set you up for success. <strong>Let us help you embark on your international 
    education journey with confidence!</strong>
  </p>
</ContentArea>}

{activeIndex===4&&<ContentArea>
  <h2>Visa Counselling Services</h2>

  <p>
    <strong>Are you planning to travel abroad?</strong> Are you unsure of the visa requirements and procedures?  
    Don't worry, we've got you covered! At <strong>Visa Counselling Services</strong>, we provide <strong>comprehensive visa 
    counselling</strong> to help you navigate the complex visa application process.
  </p>

  <p>
    Our team of <strong>experienced visa counsellors</strong> understands the challenges and frustrations of visa processing. 
    That’s why we offer <strong>tailored services</strong> that cater to your specific needs. Whether you’re a 
    <strong>student, business traveler, or tourist</strong>, we provide the necessary guidance and support to ensure a 
    smooth visa application process.
  </p>

  <p>
    We take pride in our <strong>unmatched visa success rate</strong>. This success is due to the <strong>high professionalism</strong> 
    of our visa officers and their deep understanding of <strong>immigration policies</strong> in various destinations.  
    We know that obtaining a student visa can be a challenge for students and universities alike.  
    That’s why we ensure that all the hard work put into securing admission <strong>does not go to waste</strong>.
  </p>

  <h3>🌟 Our Guarantee</h3>

  <p>
    At <strong>Visa Counselling Services</strong>, we are committed to achieving the <strong>highest success rate</strong> in visa processing.  
    We guarantee that we will work with you until your <strong>visa application is approved</strong>.  
  </p>

  <p>
    <strong>If your visa application is rejected due to our negligence, we will refund our service fees.</strong>
  </p>

  <p>
    Our approach follows a <strong>step-by-step adherence to visa policies</strong>, ensuring that each applicant has the 
    <strong>highest chances of obtaining a visa</strong> to study or travel abroad.
  </p>

  <h3>🛂 Our Visa Counselling Services</h3>

  <p>We offer a range of services to assist you with your visa application, including:</p>

  <h4>✅ Visa Assessment</h4>
  <p>
    We assess your <strong>eligibility for a visa</strong> based on your <strong>purpose of travel, nationality</strong>, and 
    other relevant factors.
  </p>

  <h4>✅ Visa Application</h4>
  <p>
    Our team assists you in <strong>completing your visa application form</strong> and provides expert guidance on 
    <strong>required documents and fees</strong>.
  </p>

  <h4>✅ Document Verification</h4>
  <p>
    We verify all your documents to ensure that they <strong>meet the visa application requirements</strong> and 
    avoid any delays or rejections.
  </p>

  <h4>✅ Interview Preparation</h4>
  <p>
    Our team prepares you for your <strong>visa interview</strong> by providing <strong>tips, guidance</strong>, and practice 
    sessions to help you answer common visa questions with confidence.
  </p>

  <h4>✅ Visa Tracking</h4>
  <p>
    We <strong>track your visa application</strong> and provide timely updates on its status until final approval.
  </p>

  <p>
    <strong>Let us help you secure your visa hassle-free!</strong> Contact us today to get started with expert visa 
    counselling tailored to your needs.
  </p>
</ContentArea>}

{activeIndex===5&&<ContentArea>
  <h2>🏡 Accommodation Services</h2>

  <h3>📢 Information and Updates</h3>

  <p>
    As an <strong>international student</strong>, finding suitable accommodation can be a daunting task.  
    Navigating a new <strong>country, culture, and language</strong> while also searching for a comfortable and affordable 
    place to stay can be overwhelming.
  </p>

  <p>
    Fortunately, there are many <strong>accommodation arrangement services</strong> available to help international students 
    secure safe and convenient housing. These services provide valuable <strong>support and guidance</strong> to ensure that 
    students find a home that meets their needs and preferences.
  </p>

  <p>
    By working with professional <strong>accommodation services</strong>, students can gain <strong>peace of mind</strong>, focus on 
    their studies, and enjoy their international experience without worrying about housing challenges.
  </p>

  <h3>🛏️ Our Accommodation Services</h3>

  <p>We offer a range of accommodation support services to help international students settle comfortably, including:</p>

  <h4>✅ Accommodation Search & Placement</h4>
  <p>
    We help students find <strong>suitable housing options</strong> based on their <strong>budget, location preferences</strong>, and 
    other specific requirements.
  </p>

  <h4>✅ Housing Advice & Guidance</h4>
  <p>
    Our team provides guidance on the different <strong>types of housing available</strong>, including <strong>apartments, homestays, 
    and shared housing</strong>. We also offer advice on the <strong>legal and financial aspects</strong> of renting accommodation 
    in a foreign country.
  </p>

  <h4>✅ Arrival & Move-in Support</h4>
  <p>
    We offer assistance with <strong>airport pickup, transportation to accommodation</strong>, and move-in support to help 
    students settle into their new homes comfortably.
  </p>

  <h4>✅ Assistance with Paperwork & Contracts</h4>
  <p>
    Our team helps with the <strong>paperwork and rental contracts</strong> involved in securing accommodation.  
    We ensure that international students fully understand the <strong>terms and conditions</strong> of their rental agreements 
    before signing.
  </p>

  <h3>🌍 Cultural & Social Integration</h3>

  <p>
    In addition to housing support, we may also organize <strong>social activities and cultural events</strong> to help 
    international students adjust to their new surroundings.  
    These events provide a sense of <strong>community and belonging</strong>, making it easier to meet new people and feel 
    comfortable in a new environment.
  </p>

  <h3>🎯 Why Choose Our Accommodation Services?</h3>

  <p>
    Finding housing in a new country can be stressful, but with our expert guidance, students can secure 
    <strong>safe and affordable accommodation</strong> with ease.  
    Our goal is to ensure that students can focus on their studies and personal growth, without the added stress of 
    navigating the local housing market alone.
  </p>

  <p><strong>Contact us today</strong> to learn more about our accommodation services and start your journey with confidence!</p>
</ContentArea>}


{activeIndex===6&&<ContentArea>
  <h2>💰 Education Budgeting & Costing Services</h2>

  <h3>📢 Why Financial Planning Matters for International Students</h3>

  <p>
    As an <strong>international student</strong>, careful planning and budgeting are essential to ensure that you have 
    enough funds to cover <strong>tuition, accommodation, food, and other living expenses</strong>. However, 
    navigating the financial landscape in a foreign country can be overwhelming.  
  </p>

  <p>
    <strong>Education budgeting and costing services</strong> provide invaluable support to students looking to manage their 
    finances effectively while studying abroad. These services help students <strong>understand education costs, create 
    personalized budgets</strong>, and develop strategies to achieve their academic and financial goals.
  </p>

  <h3>🎯 Benefits of Education Budgeting & Costing Services</h3>

  <p>Our budgeting and costing services help international students:</p>

  <ul>
    <li>💡 <strong>Understand the cost of living</strong> in their new country.</li>
    <li>📊 <strong>Create a realistic budget</strong> tailored to their financial circumstances.</li>
    <li>💰 <strong>Identify ways to save money</strong> on education and daily expenses.</li>
    <li>🔍 <strong>Plan for unexpected expenses</strong> and financial emergencies.</li>
    <li>📈 <strong>Stay on track with financial goals</strong> while focusing on academic success.</li>
  </ul>

  <h3>🔹 Our Education Budgeting & Costing Services</h3>

  <h4>✅ Expert Guidance</h4>
  <p>
    Our <strong>financial experts</strong> have in-depth knowledge of international education costs and can provide 
    valuable advice on how to <strong>manage finances effectively</strong> while studying abroad.
  </p>

  <h4>✅ Personalized Budgeting</h4>
  <p>
    We help students <strong>create a customized budget</strong> based on their specific financial circumstances, 
    ensuring that they have a well-structured financial plan.
  </p>

  <h4>✅ Cost-Saving Strategies</h4>
  <p>
    Our team assists students in <strong>identifying smart ways to cut costs</strong>, such as finding 
    <strong>affordable housing, scholarships, discounts</strong>, and other money-saving opportunities.
  </p>

  <h4>✅ Access to Financial Resources</h4>
  <p>
    We provide access to <strong>financial planning tools, calculators</strong>, and other resources 
    that help students make informed financial decisions.
  </p>

  <h3>📌 Why Choose Our Services?</h3>

  <p>
    By working with our <strong>education budgeting experts</strong>, international students can gain financial 
    stability and peace of mind while focusing on their academic journey.  
    Our services ensure that students can make informed decisions, reduce financial stress, and 
    successfully complete their studies without financial burdens.
  </p>

  <p><strong>Contact us today</strong> to learn how we can help you create a solid financial plan for your education abroad! 📞✨</p>
</ContentArea>}



      </ServicesSection>
    </Container>
  );
};

// Styled Components
const Container = styled.div`
//   font-family: "Arial", sans-serif;
`;

const HeroSection = styled.section`
  background: url(${servicesHero}) center/cover no-repeat;
  height: 60vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  padding: 20px;
  position: relative;

  @media(max-width:428px){
    padding:5px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.6);
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 1;
  max-width: 700px;

  h1 {
    font-size: 2.5rem;
    margin-bottom: 10px;
  }

  p {
    font-size: 1.2rem;
  }
`;

const ServicesSection = styled.section`
  display: flex;
  padding: 60px 10%;
  background: #f8f8f8;
  gap: 30px;


  @media (max-width: 768px) {
    flex-direction: column;
    padding:60px 3%;
  }
`;

const Sidebar = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

//   @media (max-width: 768px) {
//     width: 10%;
//     padding:0px;
//     flex-direction:row;
//     position:fixed;
//     bottom:3px;
//     left:50%;
//     transform:translateX(-50%);
//   }

@media (max-width: 768px) {
  width: 80%; /* Adjusted for better visibility */
  max-width: 300px; /* Prevents it from getting too large */
  padding: 10px; /* Adds some space inside */
  flex-direction:row;
  justify-content: center; /* Centers content inside */
  align-items: center;
  position: fixed;
  bottom:5px; /* Increased for better visibility */
  left: 50%;
  transform: translateX(-50%);
  background-color: rgba(0, 0, 0, 0.8); /* Optional: Adds background for contrast */
  border-radius: 10px; /* Optional: Adds a nice rounded effect */
}



`;

const TabButton = styled.button`
  display: flex;
  align-items: center;
  gap: 10px;
  background: ${({ active }) => (active ? "#ff6600" : "lightgray")};
  color: ${({ active }) => (active ? "white" : "#333")};
  font-size: 1.1rem;
  padding: 12px;
  border: none;
  border-radius: 5px;
  margin-bottom: 10px;
  cursor: pointer;
  transition: 0.3s;
  text-align:left;

  svg {
    font-size: 1.5rem;
  }

  p{
  @media(max-width:768px){
    display:none;
  }
  }

  &:hover {
    background: #ff6600;
    color: white;
  }
`;

const ContentArea = styled.div`
  flex: 1;
  background: white;
  padding: 40px;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color:#333;
  height:400px;
  overflow-y:scroll;

  @media(max-width:428px){
    padding:15px;
  }

  h2 {
    font-size: 2rem;
    color: #ff6600;
  }

  p {
    font-size: 1.1rem;
    margin-top: 10px;
  }
`;

export default Services;

