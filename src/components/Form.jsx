import "../form_style.css";
import React, { useState, useRef } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import membershipFormPDF from "./membershipform.pdf";
import APIStandards from "../utils/API_standards";
import communication_service from "../services/communication_service";
import axios from "axios";


function App() {
  const [dob, setDOB] = useState(null);
  const [joining, setJoining] = useState(null);
  const [selectedDistrict, setSelectedDistrict] = useState("");
  const [taluks, setTaluks] = useState([]);
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const [showModal, setShowModal] = useState(false);



  React.useEffect(() => {
    const script = document.createElement('script');
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  const handleRazorpay = () => {
    setShowModal(false);
  
    const options = {
      key: "rzp_test_IuyW21ROEkWdLW", // ✅ Your test key_id
      amount: 100, // ₹1000 in paisa
      currency: "INR",
      name: "Membership Payment",
      description: "₹1000 membership fee",
      handler: function (response) {
        console.log("✅ Payment success", response);
        alert("Payment successful! ID: " + response.razorpay_payment_id);
  
        // ✅ Now submit form if needed
        const data = new FormData(document.getElementById("myform"));
        setLoading(true);
        uploadData(data); // call your submit function
      },
      prefill: {
        name: "Test User",
        email: "test@example.com",
        contact: "9999999999",
      },
      theme: {
        color: "#4CAF50",
      },
    };
  
    const rzp = new window.Razorpay(options);
    rzp.open();
  };
  
  

  const taluksData = {
    Bagalkote: [
      "Bagalkote",
      "Jamkhandi",
      "Mudhola",
      "Badami",
      "Bilagi",
      "Hunagunda",
      "Ilkal",
      "Rabkavi Banhatti",
      "Guledgudda",
    ],
    Ballari: ["Ballari", "Kurugodu", "Kampli", "Sanduru", "Siraguppa"],
    Belagavi: [
      "Belagavi",
      "Athani",
      "Bailhongal",
      "Chikkodi",
      "Gokak",
      "Khanapura",
      "Mudalgi",
      "Nippani",
      "Rayabaga",
      "Savadatti",
      "Ramadurga",
      "Kagawada",
      "Hukkeri",
      "Kitturu",
    ],
    "Bengaluru Urban": [
      "Hebbala",
      "Kengeri",
      "Krishnarajapura",
      "Anekal",
      "Yelahanka",
    ],
    "Bengaluru Rural": [
      "Nelamangala",
      "Doddaballapura",
      "Devanahalli",
      "Hosakote",
    ],
    Bidar: [
      "Aurad",
      "Basavakalyana",
      "Bhalki",
      "Bidar",
      "Chitgoppa",
      "Hulsuru",
      "Humnabad",
      "Kamalanagara",
    ],
    Chamarajanagara: [
      "Chamarajanagara",
      "Gundlupete",
      "Kollegala",
      "Yelanduru",
      "Hanuru",
    ],
    Chikkaballapura: [
      "Chikkaballapura",
      "Bagepalli",
      "Chintamani",
      "Gauribidanuru",
      "Gudibanda",
      "Sidlaghatta",
      "Cheluru",
    ],
    Chikkmagaluru: [
      "Chikkamagaluru",
      "Kaduru",
      "Koppa",
      "Mudigere",
      "Narasimharajapura",
      "Sringeri",
      "Tarikere",
      "Ajjampura",
      "Kalasa",
    ],
    Chitradurga: [
      "Chitradurga",
      "Challakere",
      "Hiriyur",
      "Holalkere",
      "Hosadurga",
      "Molakalmuru",
    ],
    "Dakshina Kannada": [
      "Mangaluru",
      "Ullal",
      "Mulki",
      "Moodbidri",
      "Bantwala",
      "Belathangadi",
      "Putturu",
      "Sulya",
      "Kadaba",
    ],
    Davanagere: [
      "Davanagere",
      "Harihara",
      "Channagiri",
      "Honnali",
      "Nyamathi",
      "Jagaluru",
    ],
    Dharwad: [
      "Kalghatgi",
      "Dharwad",
      "Hubballi (Rural)",
      "Hubballi (Urban)",
      "Kundagolu",
      "Navalgunda",
      "Alnavara",
      "Annigeri",
    ],
    Gadag: [
      "Gadag",
      "Naragunda",
      "Mundaragi",
      "Rona",
      "Gajendragada",
      "Lakshmeshwara",
      "Shirahatti",
    ],
    Hassan: [
      "Hassan",
      "Arasikere",
      "Channarayapattana",
      "Holenarsipura",
      "Sakleshpura",
      "Aluru",
      "Arakalagudu",
      "Beluru",
    ],
    Haveri: [
      "Ranibennur",
      "Byadgi",
      "Hangala",
      "Haveri",
      "Savanuru",
      "Hirekeruru",
      "Shiggavi",
      "Rattihalli",
    ],
    Kalaburagi: [
      "Kalaburagi",
      "Afzalpura",
      "Alanda",
      "Chincholi",
      "Chitapura",
      "Jevargi",
      "Sedam",
      "Kamalapura",
      "Shahabad",
      "Kalgi",
      "Yedrami",
    ],
    Kodagu: [
      "Madikeri",
      "Somawarapete",
      "Virajapete",
      "Ponnammapete",
      "Kushalnagara",
    ],
    Kolar: [
      "Kolar",
      "Bangarapete",
      "Maluru",
      "Mulabagilu",
      "Srinivasapura",
      "Kolar Gold Fields (Robertsonpete)",
    ],
    Koppala: [
      "Koppala",
      "Gangavathi",
      "Kushtagi",
      "Yelaburga",
      "Kanakagiri",
      "Karatagi",
      "Kukanuru",
    ],
    Mandya: [
      "Mandya",
      "Madduru",
      "Malavalli",
      "Srirangapattana",
      "Krishnarajapete",
      "Nagamangala",
      "Pandavapura",
    ],
    Mysuru: [
      "Mysuru",
      "Hunasuru",
      "Krishnarajanagara",
      "Nanjanagodu",
      "Heggadadevanakote",
      "Piriyapattana",
      "Tirumakudalu Narasipura",
      "Saraguru",
      "Saligrama",
    ],
    Raichuru: [
      "Raichuru",
      "Sindhanuru",
      "Manvi",
      "Devadurga",
      "Lingasaguru",
      "Mudgal",
      "Maski",
      "Sirawara",
    ],
    Ramanagara: [
      "Ramanagara",
      "Magadi",
      "Kanakapura",
      "Channapattana",
      "Harohalli",
    ],
    Shivamogga: [
      "Shivamogga",
      "Sagara",
      "Bhadravathi",
      "Hosanagara",
      "Shikaripura",
      "Soraba",
      "Tirthahalli",
    ],
    Tumakuru: [
      "Tumakuru",
      "Chikkanayakanahalli",
      "Kunigal",
      "Madhugiri",
      "Sira",
      "Tipturu",
      "Gubbi",
      "Koratagere",
      "Pavagada",
      "Turuvekere",
    ],
    Udupi: [
      "Udupi",
      "Kapu",
      "Bynduru",
      "Karkala",
      "Kundapura",
      "Hebri",
      "Brahmavara",
    ],
    "Uttara Kannada": [
      "Karwara",
      "Sirsi",
      "Joida",
      "Dandeli",
      "Bhatkal",
      "Kumta",
      "Ankola",
      "Haliyal",
      "Honnavara",
      "Mundagodu",
      "Siddapura",
      "Yellapura",
    ],
    Vijayapura: [
      "Vijayapura",
      "Indi",
      "Basavana Bagewadi",
      "Sindgi",
      "Muddebihala",
      "Talikote",
      "Devara Hipparagi",
      "Chadchana",
      "Tikote",
      "Babaleshwara",
      "Kolhara",
      "Nidagundi",
      "Alamela",
    ],
    Yadagiri: [
      "Yadagiri",
      "Shahapura",
      "Surapura",
      "Gurmitkala",
      "Vadagera",
      "Hunsagi",
    ],
    Vijayanagara: [
      "Hosapete",
      "Hagaribommanahalli",
      "Harapanahalli",
      "Hoovina Hadagali",
      "Kudligi",
      "Kotturu",
    ],
  };

  const onFileSelected = (event) => {
    const target = event.target;
    if (target.files && target.files[0]) {
      const maxAllowedSize = 1 * 1024 * 1024;
      if (target.files[0].size > maxAllowedSize) {
        alert("Please select file <1MB");
        target.value = "";
      }
    }
  };

  const handleDistrictChange = (event) => {
    const district = event.target.value;
    setSelectedDistrict(district);
    setTaluks(taluksData[district] || []);
  };

  const districts = Object.keys(taluksData);

  const formRef = useRef(null);

  const scrollToForm = () => {
    if (formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const downloadPDF = (pdfFile, filename) => {
    const link = document.createElement("a");
    link.href = pdfFile;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    alert("Membership form has been downloaded.");
  };

   const uploadData = async (data) => {
    try {
      const response = await communication_service.post(
        APIStandards.USER.SET_MEMBER_DATA,
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data", // Set the content type to multipart/form-data
          },
        }
      );
      console.log(response);
      setResult(response.data);

      window.location.href = response.data["link"];
    } catch (ex) {
      console.log(ex);
      alert("Please try again later!");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault(); 
    setShowModal(true);  // Show the Razorpay modal
  };


  return (
    <>
      <div className="p-3 md:px-20 lg:px-32">
        <h1 className="text-3xl my-3 font-semibold text-green">ಸದಸ್ಯತ್ವ</h1>
        <p className="lg:text-xl md:text-2xl md:leading-8">
          ಕರ್ನಾಟಕ ರಾಜ್ಯ ಭೂಮಾಪನ ಕಂದಾಯವ್ಯವಸ್ಥೆ ಹಾಗೂ ಭೂಧಾಖಲೆಯ ಇಲಾಖೆಯ ಪರವಾನಗಿ
          ಭೂಮಾಪಕರ ಕ್ಷೇಮಾಭಿವೃಧ್ದಿ ಸಂಘದ ಸದಸ್ಯರಾಗುವ ಮೂಲಕ ಸಂಘವನ್ನು ಪ್ರೋತ್ಸಾಹಿಸಿ
          ಬೆಳೆಸಿ ವಿಶೇಷ ಹಕ್ಕುಗಳು & ಸ್ಥಾನಮಾನಗಳನ್ನು ಹೊಂದುವುದಲ್ಲದೇ ರಾಜ್ಯಾದ್ಯಂತ
          ಪರವಾನಗಿ ಭೂಮಾಪಕರನ್ನು ಒಂದುಗೂಡಿಸಲು ಸಹಕಾರಿಯಾಗಬೇಕೆಂದು ಕೋರಿದೆ. ಸಂಘಕ್ಕೆ
          ಸದಸ್ಯರಾಗುವುದರ ಲಾಭಗಳು.{" "}
          <span className="">
            <br /> 1. ಸಂಘದ ಚುನಾವಣೆಯಲ್ಲಿ ಮತ ಚಲಾಯಿಸುವ ಹಕ್ಕು ಹೊಂದಬಹುದು <br /> 2.
            ಸಂಘದ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಉಚಿತ ಪ್ರವೇಶವಿರುತ್ತದೆ.(ಆನ್ಲೈನ್ ಕಲಿಕೆಯ
            ಕಾರ್ಯಕ್ರಮಗಳು, ಕೌಶಲ್ಯಾಭಿವೃಧ್ದಿ ಶಿಬಿರಗಳು, ಇತರೆ) <br />
            3. ರಾಜ್ಯಮಟ್ಟದ ಕ್ರೀಡಾಕೂಟದಲ್ಲಿ ಭಾಗವಹಿಸುವುದು. <br /> 4. ರಾಜ್ಯಮಟ್ಟದ
            ಪ್ರತಿಭಾ ಸ್ಪರ್ಧೆಗಳಲ್ಲಿ ಭಾಗವಹಿಸುವುದು...etc etc. <br />
          </span>
          ಸಂಘಕ್ಕೆ ಸದಸ್ಯರಾಗಲು ಸದಸ್ಯತ್ವ ಶುಲ್ಕ ೧೦೦೦ ರೂಗಳನ್ನು ಪಾವತಿಸಿ ಸದಸ್ಯತ್ವ
          ಗುರುತಿನ ಚೀಟಿಗಳನ್ನು ಪಡೆಯುವ ಮೂಲಕ ಸೇರಬಹುದಾಗಿರುತ್ತದೆ.{" "}
          <span className="">
            <br /> ೧.{" "}
            <a
              onClick={scrollToForm}
              className="cursor-pointer underline-offset-2 underline text-green  hover:text-lightgreen duration-200 font-semibold"
            >
              ಆನ್ಲೈನ್{" "}
            </a>{" "}
            ಮೂಲಕ ಸದಸ್ಯರಾಗಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ. <br />
            ೨.{" "}
            <a
              onClick={() =>
                downloadPDF(membershipFormPDF, "MembershipForm.pdf")
              }
              href=""
              className="cursor-pointer underline-offset-2 underline text-green hover:text-lightgreen duration-200 font-semibold"
            >
              ಆಫ್ಲೈನ್
            </a>{" "}
            ಮೂಲಕ ಸದಸ್ಯರಾಗಲು ಇಲ್ಲಿ ಕ್ಲಿಕ್ ಮಾಡಿ. <br /> ೩.ಒಂದು ಗುಂಪು ಅಥವಾ
            ಪ್ರತಿನಿಧಿಗಳ ಮೂಲಕ ಸದಸ್ಯತ್ವ ಪಡೆಯಲು ಸಹಾಯವಾಣಿಗೆ ಕರೆಮಾಡಿ.
          </span>
        </p>
      </div>

      <div className="form-v10" ref={formRef}>
        <div className="page-content">
          <div className="form-v10-content">
            <form
              className="form-detail"
              action="#"
              method="post"
              id="myform"
              onSubmit={handleSubmit}
            >
              <div className="form-left">
                <h2>General Information</h2>
                <div className="form-row">
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <label>First Name:</label>
                    <input
                      type="text"
                      name="fname"
                      id="first_name"
                      className="input-text"
                      placeholder="First Name"
                      required
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <label>Last Name:</label>
                    <input
                      type="text"
                      name="lname"
                      id="last_name"
                      className="input-text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <label>Aadhar Number:</label>
                    <input
                      type="number"
                      name="aadhar_number"
                      id="aadhar_number"
                      className="input-text"
                      placeholder="Aadhar Number"
                      required
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <label>Aadhar Copy:</label>
                    <input
                      type="file"
                      name="aadhar_copy"
                      id="aadhar_copy"
                      onChange={onFileSelected}
                      className="input-text"
                      placeholder=""
                      accept=".jpg, .jpeg, .png, .pdf"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <label>License Number:</label>
                    <input
                      type="text"
                      name="license_number"
                      id="license_number"
                      className="input-text"
                      placeholder="License Number"
                      required
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <label>Father's Name:</label>
                    <input
                      type="text"
                      name="fathers_name"
                      id="fathers_name"
                      className="input-text"
                      placeholder="Father's Name"
                      
                    />
                  </div>
                </div>

                <div className="form-row z-50">
                  <label>Date of Birth:</label>
                  <DatePicker
                    selected={dob}
                    name="dob"
                    onChange={(date) => setDOB(date)}
                    dateFormat="dd/MM/yyyy" // Set the date format to day/month/year
                    required
                  />
                </div>
                <div className="form-group">
                  <div className="form-row form-row-1">
                    <label htmlFor="blood_group">Blood Group:</label>
                    <select
                      name="blood_group"
                      id="blood_group"
                      className="blood_group"
                      required
                      
                    >
                      <option value="" disabled selected>
                        Select Blood Group
                      </option>
                      <option value="A+">A+</option>
                      <option value="A-">A-</option>
                      <option value="B+">B+</option>
                      <option value="B-">B-</option>
                      <option value="AB+">AB+</option>
                      <option value="AB-">AB-</option>
                      <option value="O+">O+</option>
                      <option value="O-">O-</option>
                    </select>
                  </div>

                  <div className="form-row form-row-2">
                    <label htmlFor="gender">Gender:</label>
                    <select name="gender" id="gender"                       required>
                      <option value="" disabled selected>
                        Select Gender
                      </option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                    <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <label>Religion:</label>
                    <input
                      type="text"
                      name="religion"
                      id="religion"
                      className="input-text"
                      placeholder="Religion"
                      
                    />
                  </div>

                  <div className="form-row form-row-2">
                    <label htmlFor="category">Category:</label>
                    <select
                      name="category"
                      id="category"
                      className="category"
                      required
                    >
                      <option value="" disabled selected>
                        Select Category
                      </option>
                      <option value="GM">GM</option>
                      <option value="SC">SC</option>
                      <option value="ST">ST</option>
                      <option value="Cat-1">Cat-1</option>
                      <option value="2A">2A</option>
                      <option value="2B">2B</option>
                      <option value="3A">3A</option>
                      <option value="3B">3B</option>
                      <option value="XMP">XMP</option>
                    </select>
                    <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <label htmlFor="marital">Marital Status:</label>
                    <select name="marital" id="marital" >
                      <option value="" disabled selected>
                        Marital Status
                      </option>
                      <option value="marital_yes">Yes</option>
                      <option value="marital_no">No</option>
                    </select>
                    <span className="select-btn">
                      <i className="zmdi zmdi-chevron-down"></i>
                    </span>
                  </div>
                  <div className="form-row form-row-2 z-40">
                    <label htmlFor="joining">Joining Date:</label>
                    <DatePicker
                      selected={joining}
                      name="joining"
                      onChange={(date) => setJoining(date)}
                      dateFormat="dd/MM/yyyy"
                      required
                    />
                  </div>
                </div>
                <div className="form-row form-row-1">
                  <label htmlFor="qualification">Qualification:</label>
                  <input
                    type="text"
                    name="qualification"
                    className="qualification"
                    id="qualification"
                    placeholder="Qualification"
                    required
                  />
                </div>
              </div>

              <div className="form-right">
                <h2>Other Details</h2>

                {/* District */}
                <div className="form-row form-row-1">
                  <label htmlFor="district">Working District:</label>
                  <select
                    name="district"
                    id="district"
                    value={selectedDistrict}
                    onChange={handleDistrictChange}
                    required
                  >
                    <option value="" disabled>
                      Select District
                    </option>
                    {districts.map((district) => (
                      <option key={district} value={district}>
                        {district}
                      </option>
                    ))}
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>

                <div className="form-row">
                  <label htmlFor="taluk" className="text-white">
                    Working Taluk:
                  </label>
                  <select name="taluk" id="taluk"                       required >
                    <option value="" disabled>
                      Select Taluk
                    </option>
                    {taluks.map((taluk) => (
                      <option key={taluk} value={taluk}>
                        {taluk}
                      </option>
                    ))}
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>
                <div className="form-row">
                  <label htmlFor="region">Division</label>
                  <select name="region" id="division" >
                    <option value="" disabled selected>
                      Select division
                    </option>
                    <option value="belgavi">Belgavi</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="mysuru">Mysuru</option>
                    <option value="kalburgi">Kalburgi</option>
                  </select>
                  <span className="select-btn">
                    <i className="zmdi zmdi-chevron-down"></i>
                  </span>
                </div>

                <div className="form-row">
                  <input
                    type="text"
                    name="address"
                    className="street"
                    id="address"
                    placeholder="Permanent address"
                    required
                  />
                </div>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="zip"
                      className="zip"
                      id="zip"
                      placeholder="Zip Code"
                      required
                    />
                  </div>
                </div>

                <div className="form-group">
                  <div className="form-row form-row-1">
                    <input
                      type="text"
                      name="code"
                      className="code"
                      id="code"
                      placeholder="+91"
                      required
                    />
                  </div>
                  <div className="form-row form-row-2">
                    <input
                      type="text"
                      name="phone"
                      className="phone"
                      id="phone"
                      placeholder="Phone Number"
                      required
                    />
                  </div>
                </div>
                <div className="form-row">
                  <input
                    type="text"
                    name="email"
                    id="your_email"
                    className="input-text"
                    required
                    pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}"
                    placeholder="Your Email"
                  />
                </div>
                <div className="form-row form-row-2">
                  <label>Passport size photo:</label>

                  <input
                    type="file"
                    name="photo_copy"
                    id="photo_copy"
                    onChange={onFileSelected}
                    className="input-text"
                    placeholder=""
                    accept=".jpg, .jpeg, .png, .pdf"
                    required
                  />
                </div>
                <div className="form-checkbox">
                  <label className="container">
                    <p>
                      I do accept the{" "}
                      <a href="#" className="text">
                        Terms and Conditions
                      </a>{" "}
                      of your site.
                    </p>
                    <input type="checkbox" name="checkbox" required/>
                    <span className="checkmark"></span>
                  </label>
                </div>
                <div className="form-row-last">
                  <input
                    type="submit"
                    name="register"
                    className="register"
                    value="Register"
                    disabled={loading}
                  />
                </div>
                {loading && (
                  <div className="loading-indicator text-bgWhite text-xl font-medium text-center p-3">
                    Submitting, please wait...
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
      {showModal && (
  <div className="fixed inset-0 flex items-center justify-center z-[1000] bg-black bg-opacity-60">
    <div
      className="bg-lightyellow p-6 rounded-xl text-center shadow-2xl w-[90%] max-w-md border border-yellow-400"
      style={{
        backgroundColor: "#fff9db", // fallback yellow in case Tailwind fails
        opacity: 1,
      }}
    >
      <h2 className="text-2xl font-bold mb-4 text-green-700">Confirm Payment</h2>
      <p className="mb-6 text-gray-900 text-lg">
        Do you want to make a payment of <span className="font-semibold text-black">₹1000</span> for membership?
      </p>
      <div className="flex justify-between px-4">
        <button
          onClick={() => setShowModal(false)}
          className="bg-gray-300 text-black font-medium px-6 py-2 rounded hover:bg-gray-400 transition"
        >
          Cancel
        </button>
        <button
          onClick={handleRazorpay}
          className="bg-green-600 text-white font-medium px-6 py-2 rounded hover:bg-green-700 transition"
        >
          Pay
        </button>
      </div>
    </div>
  </div>
)}



  </>
  );
}


export default App;
