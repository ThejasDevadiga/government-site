import React from "react";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";

function Contact() {
  return (
    <div className="  px-3 md:px-20 lg:px-32 min-h-screen  md:my-0 flex justify-center items-center flex-col md:flex-row">
      <iframe
        className="rounded-2xl md:h-[80vh] min-h-[30vh] md:mt-0  md:mr-6 mt-[10rem]"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3898.2911281397355!2d76.702648!3d12.296170799999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf71d8e34aaac9%3A0x52e36c9e81d1df89!2s276%2C%20T%20Narsipura%20Rd%2C%201st%20Stage%2C%20Nandini%20Layout%2C%20Nadanahalli%2C%20Mysuru%2C%20Karnataka%20570028!5e0!3m2!1sen!2sin!4v1717998569465!5m2!1sen!2sin"
        width="100%"
       
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        alt="Map is loading"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      <section class="bg-bgWhite my-12 md:my-0 flex justify-center items-center px-5 rounded-xl drop-shadow-lg md:h-[80vh] min-h-[80vh]">
        <div class=" px-4 mx-auto ">
          <h2 class="mb-4 text-4xl pt-6 md:py-0  tracking-tight font-extrabold text-center text-black dark:text-white">
          ಸಂಪರ್ಕಿಸಿ
          </h2>
          <p class="mb-4 lg:mb-6 font-light text-center md:text-left text-gray-500 dark:text-gray-400 sm:text-xl">
          ಸಂಪರ್ಕ ಪುಟಕ್ಕೆ ಸ್ವಾಗತ!  ನಿಮ್ಮ ಸಮಸ್ಯೆಗಳಿಗಾಗಿ ನಾವು ಸಹಾಯಕರಾಗಬಲ್ಲೆವು.
          </p>
          <div className="  ">
            <form
              // action="https://formsubmit.co/office.sandeepkprabhu@gmail.com"
              method="POST"
              class="space-y-8"
            >
              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="Email"
                  id="email"
                  class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="name@xyz.com"
                  required
                />
              </div>
              <div>
                <label
                  for="subject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                >
                  Subject
                </label>
                <input
                  type="text"
                  name="Subject"
                  id="subject"
                  class="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                  placeholder="Let us know how we can help you"
                  required
                />
              </div>
              <div class="sm:col-span-2">
                <label
                  for="message"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400"
                >
                  Your message
                </label>
                <textarea
                  id="message"
                  name="Message"
                  rows="6"
                  class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                  placeholder="Leave a comment..."
                ></textarea>
              </div>
              <button
                type="submit"
                class="py-3 px-5 rounded-full text-sm font-medium text-center text-black  bg-yellow sm:w-fit hover:bg-lightyellow  border-yellow duration-300 y-600   "
              >
                Send message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
