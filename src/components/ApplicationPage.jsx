// import React from 'react';
// import styled from 'styled-components';
// import apply from '../Images/apply.jpg'

// const PageWrapper = styled.div`
//   font-family: 'Segoe UI', sans-serif;
//   color: #0056b3;
//   background-color: white;
// `;

// const HeroSection = styled.section`
//   background-color: #f0f6ff;
//   padding: 60px 20px;
//   text-align: center;
//   background-image:url(${apply});
//   background-size:cover;
//   background-position:center;

// `;

// const HeroTitle = styled.h1`
//   font-size: 2.5rem;
//   margin-bottom: 10px;
//   color:white;
//    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);

//   @media (max-width: 768px) {
//     font-size: 2rem;
//   }
// `;

// const SubText = styled.p`
//   font-size: 1.1rem;
//   color: white;
//   font-weight: bold;
//   text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9); /* Adds a shadow for better contrast */
// `;


// const FormSection = styled.section`
//   padding: 40px 20px;
//   max-width: 1000px;
//   margin: 0 auto;
// `;

// const FormTitle = styled.h2`
//   text-align: center;
//   margin-bottom: 30px;
//   font-size: 2rem;
// `;

// const StyledForm = styled.form`
//   display: grid;
//   grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
//   gap: 20px;
// `;

// const Input = styled.input`
//   padding: 12px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
// `;

// const Textarea = styled.textarea`
//   padding: 12px;
//   font-size: 1rem;
//   border: 1px solid #ccc;
//   border-radius: 8px;
//   grid-column: 1 / -1;
//   min-height: 120px;
// `;

// const FileInput = styled.input`
//   padding: 8px;
//   font-size: 1rem;
//   border: none;
// `;

// const Label = styled.label`
//   display: flex;
//   flex-direction: column;
//   font-size: 0.9rem;
//   color: #222;
// `;

// const SubmitButton = styled.button`
//   grid-column: 1 / -1;
//   padding: 14px;
//   font-size: 1rem;
//   background-color: #0056b3;
//   color: white;
//   border: none;
//   border-radius: 8px;
//   cursor: pointer;
// `;

// const BankSection = styled.section`
//   background-color: #f9f9f9;
//   padding: 40px 20px;
//   text-align: center;
// `;

// const BankTitle = styled.h3`
//   font-size: 1.5rem;
//   margin-bottom: 10px;
// `;

// const BankDetails = styled.p`
//   font-size: 1rem;
//   margin: 4px 0;
//   color: #222;
// `;

// const ApplicationPage = () => {
//   return (
//     <PageWrapper>
//       <HeroSection>
//         <HeroTitle>Application Form</HeroTitle>
//         <SubText>
//           Kindly complete the form below to commence your university application online
//         </SubText>
//       </HeroSection>

//       <FormSection>
//         <FormTitle>Apply Now</FormTitle>
//         <StyledForm onSubmit={(e) => e.preventDefault()}>
//           <Label>
//             Full Name*
//             <Input type="text" required />
//           </Label>
//           <Label>
//             Phone Number*
//             <Input type="tel" required />
//           </Label>

//           <Label>
//             Email*
//             <Input type="email" required />
//           </Label>
//           <Label>
//             Course*
//             <Input type="text" required />
//           </Label>

//           <Label>
//             Transcript
//             <FileInput type="file" accept=".pdf,image/*" />
//           </Label>
//           <Label>
//             Proof of English (IELTS, TOEFL, etc.) Proficiency
//             <FileInput type="file" accept=".pdf,image/*" />
//           </Label>

//           <Label style={{ gridColumn: '1 / -1' }}>
//             Message*
//             <Textarea required placeholder="Write your message here..." />
//           </Label>

//           <SubmitButton type="submit">Submit Application</SubmitButton>
//         </StyledForm>
//       </FormSection>

//       <BankSection>
//         <BankTitle>Payment Information</BankTitle>
//         <BankDetails><strong>Account Name:</strong> Zutigo Educonsult Limited</BankDetails>
//         <BankDetails><strong>Account Number:</strong> 1486331619</BankDetails>
//         <BankDetails><strong>Bank:</strong> Access Bank</BankDetails>
//       </BankSection>
//     </PageWrapper>
//   );
// };

// export default ApplicationPage;


import React, { useState } from 'react';
import styled from 'styled-components';
import apply from '../Images/apply.jpg';
import Swal from 'sweetalert2';

const PageWrapper = styled.div`
  font-family: 'Segoe UI', sans-serif;
  color: #0056b3;
  background-color: white;
`;

const HeroSection = styled.section`
  background-color: #f0f6ff;
  padding: 60px 20px;
  text-align: center;
  background-image: url(${apply});
  background-size: cover;
  background-position: center;
`;

const HeroTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 10px;
  color: white;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const SubText = styled.p`
  font-size: 1.1rem;
  color: white;
  font-weight: bold;
  text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.9);
`;

const FormSection = styled.section`
  padding: 40px 20px;
  max-width: 1000px;
  margin: 0 auto;
`;

const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
`;

const StyledForm = styled.form`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 20px;
`;

const Input = styled.input`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
`;

const Textarea = styled.textarea`
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 8px;
  grid-column: 1 / -1;
  min-height: 120px;
`;

const FileInput = styled.input`
  padding: 8px;
  font-size: 1rem;
  border: none;
`;

const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  color: #222;
`;

const SubmitButton = styled.button`
  grid-column: 1 / -1;
  padding: 14px;
  font-size: 1rem;
  background-color: #0056b3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
`;

const BankSection = styled.section`
  background-color: #f9f9f9;
  padding: 40px 20px;
  text-align: center;
`;

const BankTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 10px;
`;

const BankDetails = styled.p`
  font-size: 1rem;
  margin: 4px 0;
  color: #222;
`;

const ApplicationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: '',
    message: '',
    transcript: null,
    proofOfEnglish: null,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    const file = files[0];

    // Check if the file is an image
    if (file) {
      const isValidImage = file.type.startsWith('image/');
      if (!isValidImage) {
        Swal.fire({
          title: 'Error!',
          text: 'Only image files (JPG, PNG, GIF) are allowed.',
          icon: 'error',
          confirmButtonText: 'OK',
        });
        return;
      }
    }

    setFormData({ ...formData, [name]: file });
  };




const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    // Basic frontend validation
    if (!formData.name || !formData.email || !formData.phone) {
      return Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill all required fields',
      });
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(formData.email)) {
      return Swal.fire({
        icon: 'error',
        title: 'Invalid Email',
        text: 'Please enter a valid email address',
      });
    }

    // Validate file types
    const allowedTypes = [
      'application/pdf',
      'image/jpeg',
      'image/png',
    ];

    // Validate transcript
    if (formData.transcript) {
      if (!allowedTypes.includes(formData.transcript.type)) {
        return Swal.fire({
          icon: 'error',
          title: 'Invalid File',
          text: 'Transcript must be PDF, JPG, or PNG',
        });
      }

      // 5MB limit
      if (formData.transcript.size > 5 * 1024 * 1024) {
        return Swal.fire({
          icon: 'error',
          title: 'File Too Large',
          text: 'Transcript must be less than 5MB',
        });
      }
    }

    // Validate proof of English
    if (formData.proofOfEnglish) {
      if (!allowedTypes.includes(formData.proofOfEnglish.type)) {
        return Swal.fire({
          icon: 'error',
          title: 'Invalid File',
          text: 'Proof of English must be PDF, JPG, or PNG',
        });
      }

      if (formData.proofOfEnglish.size > 5 * 1024 * 1024) {
        return Swal.fire({
          icon: 'error',
          title: 'File Too Large',
          text: 'Proof of English must be less than 5MB',
        });
      }
    }

    // Honeypot anti-bot field
    if (formData.website) {
      return;
    }

    // Build FormData
    const formDataToSend = new FormData();

    formDataToSend.append('name', formData.name.trim());
    formDataToSend.append('phone', formData.phone.trim());
    formDataToSend.append('email', formData.email.trim());
    formDataToSend.append('course', formData.course.trim());
    formDataToSend.append('message', formData.message.trim());

    if (formData.transcript) {
      formDataToSend.append('transcript', formData.transcript);
    }

    if (formData.proofOfEnglish) {
      formDataToSend.append(
        'proof_of_english',
        formData.proofOfEnglish
      );
    }

    // CSRF token
    const csrfToken = localStorage.getItem('csrfToken');

    // Loading alert
    Swal.fire({
      title: 'Submitting...',
      text: 'Please wait while we submit your application.',
      icon: 'info',
      showConfirmButton: false,
      allowOutsideClick: false,
      didOpen: () => {
        Swal.showLoading();
      },
    });

    const response = await fetch(
      'https://zutigoeduconsult.com/api/submit_admission_form.php',
      {
        method: 'POST',

        headers: {
          'X-CSRF-Token': csrfToken,
          'X-Requested-With': 'XMLHttpRequest',
        },

        credentials: 'same-origin',

        body: formDataToSend,
      }
    );

    // Block non-JSON response
    const contentType = response.headers.get('content-type');

    if (!contentType || !contentType.includes('application/json')) {
      throw new Error('Invalid server response');
    }

    const result = await response.json();

    if (result.success) {
      Swal.fire({
        title: 'Success!',
        text: result.message,
        icon: 'success',
        confirmButtonText: 'OK',
      });

      window.location.reload();
    } else {
      Swal.fire({
        title: 'Error!',
        text:
          result.error ||
          'Something went wrong. Please try again later.',
        icon: 'error',
        confirmButtonText: 'OK',
      });
    }
  } catch (error) {
    console.error(error);

    Swal.fire({
      title: 'Error!',
      text: 'Secure submission failed.',
      icon: 'error',
      confirmButtonText: 'OK',
    });
  }
};



  return (
    <PageWrapper>
      <HeroSection>
        <HeroTitle>Application Form</HeroTitle>
        <SubText>Kindly complete the form below to commence your university application online</SubText>
      </HeroSection>

      <FormSection>
        <FormTitle>Apply Now</FormTitle>
        <StyledForm onSubmit={handleSubmit}>
          <Label>
            Full Name*
            <Input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </Label>
          <Label>
            Phone Number*
            <Input type="tel" name="phone" value={formData.phone} onChange={handleChange} required />
          </Label>

          <Label>
            Email*
            <Input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </Label>
          <Label>
            Course*
            <Input type="text" name="course" value={formData.course} onChange={handleChange} required />
          </Label>

          {/* <Label>
            Transcript
            <FileInput type="file" name="transcript" accept="image/*" onChange={handleFileChange} />
          </Label> */}

          {/* <Label>
            Proof of English (IELTS, TOEFL, etc.)
            <FileInput type="file" name="proofOfEnglish" accept="image/*" onChange={handleFileChange} />
          </Label> */}

          <Label style={{ gridColumn: '1 / -1' }}>
            Message*
            <Textarea name="message" value={formData.message} onChange={handleChange} required placeholder="Write your message here..." />
          </Label>

          <SubmitButton type="submit">Submit Application</SubmitButton>
        </StyledForm>
      </FormSection>

      <BankSection>
        <BankTitle>Payment Information</BankTitle>
        <BankDetails><strong>Account Name:</strong> Zutigo Educonsult Limited</BankDetails>
        <BankDetails><strong>Account Number:</strong> 1486331619</BankDetails>
        <BankDetails><strong>Bank:</strong> Access Bank</BankDetails>
      </BankSection>
    </PageWrapper>
  );
};

export default ApplicationPage;
