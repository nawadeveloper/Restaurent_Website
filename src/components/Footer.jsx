import React from "react";

const Footer = () => {
  return (
    <div className="max-w-5xl flex flex-col items-center md:items-start md:flex-row w-full px-4 lg:px-0 justify-between gap-6 py-6">
      <div className="flex-1 border-b-[1px] pb-6 border-gray-400 md:border-none md:pb-0">
        <h6 className="uppercase text-lg text-white pb-3">contact us</h6>
        <address className="text-gray-300 text-sm">
          <p>
            10044 Cross Creek Blvd <br />
            Tampa, FL 33647
          </p>
          <span>Phone: </span> <a href="tel:8133886404">813 388 6404</a> <br />
          <span>Email: </span>
          <a className="underline" href="mailto:gorkhalikitchentampa@gmail.com">
            gorkhalikitchentampa@gmail.com
          </a>
        </address>

        <div className="flex w-full justify-start gap-14 pl-4 pt-6">
          <a
            href="https://www.facebook.com/profile.php?id=100083059342535"
            target="_blank"
          >
            <svg
              fill="#ffffff"
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              stroke="#ffffff"
            >
              <g id="SVGRepo_bgCarrier" strokwidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path d="M12 2.03998C6.5 2.03998 2 6.52998 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.84998C10.44 7.33998 11.93 5.95998 14.22 5.95998C15.31 5.95998 16.45 6.14998 16.45 6.14998V8.61998H15.19C13.95 8.61998 13.56 9.38998 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96C15.9164 21.5878 18.0622 20.3855 19.6099 18.57C21.1576 16.7546 22.0054 14.4456 22 12.06C22 6.52998 17.5 2.03998 12 2.03998Z"></path>{" "}
              </g>
            </svg>
          </a>

          <a
            href="https://www.instagram.com/gorkhalikitchen/?igshid=YmMyMTA2M2Y%3D"
            target="_blank"
          >
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="SVGRepo_bgCarrier" strokwidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M2 6C2 3.79086 3.79086 2 6 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H6C3.79086 22 2 20.2091 2 18V6ZM6 4C4.89543 4 4 4.89543 4 6V18C4 19.1046 4.89543 20 6 20H18C19.1046 20 20 19.1046 20 18V6C20 4.89543 19.1046 4 18 4H6ZM12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9ZM7 12C7 9.23858 9.23858 7 12 7C14.7614 7 17 9.23858 17 12C17 14.7614 14.7614 17 12 17C9.23858 17 7 14.7614 7 12ZM17.5 8C18.3284 8 19 7.32843 19 6.5C19 5.67157 18.3284 5 17.5 5C16.6716 5 16 5.67157 16 6.5C16 7.32843 16.6716 8 17.5 8Z"
                  fill="#ffffff"
                ></path>{" "}
              </g>
            </svg>
          </a>

          <a href="mailto:gorkhalikitchentampa@gmail.com" target="_blank">
            <svg
              width="32px"
              height="32px"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              fill="#000000"
            >
              <g id="SVGRepo_bgCarrier" strokwidth="0"></g>
              <g
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g id="SVGRepo_iconCarrier">
                {" "}
                <title></title>{" "}
                <g id="Complete">
                  {" "}
                  <g id="mail">
                    {" "}
                    <g>
                      {" "}
                      <polyline
                        fill="none"
                        points="4 8.2 12 14.1 20 8.2"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokwidth="2"
                      ></polyline>{" "}
                      <rect
                        fill="none"
                        height="14"
                        rx="2"
                        ry="2"
                        stroke="#ffffff"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokwidth="2"
                        width="18"
                        x="3"
                        y="6.5"
                      ></rect>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>{" "}
              </g>
            </svg>
          </a>
        </div>
      </div>
      {/* end of contact col */}

      <div className="flex-1 border-b-[1px] pb-6 border-gray-400 md:border-none md:pb-0">
        <h6 className="uppercase text-lg text-white pb-3">opening hours</h6>
        <table className="text-gray-300 uppercase text-xs">
          <tbody>
            <tr>
              <td>Monday</td>
              <td>11 AM - 2:30 PM | 5 PM - 9:30 PM</td>
            </tr>
            <tr>
              <td>Tuesday</td>
              <td>Closed</td>
            </tr>
            <tr>
              <td>Wednesday</td>
              <td>11 AM - 2:30 PM | 5 PM - 9:30 PM</td>
            </tr>
            <tr>
              <td>Thursday</td>
              <td>11 AM - 2:30 PM | 5 PM - 9:30 PM</td>
            </tr>
            <tr>
              <td>Friday</td>
              <td>11 AM - 2:30 PM | 5 PM - 10 PM</td>
            </tr>
            <tr>
              <td>Saturday</td>
              <td>11 AM - 2:30 PM | 5 PM - 10 PM</td>
            </tr>
            <tr>
              <td>Sunday</td>
              <td>11 AM - 2:30 PM | 5 PM - 10 PM</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex-1 max-h-[250px] rounded-md max-w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d176970.48427198202!2d-82.4708486908276!3d28.158979987090884!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88c2b7b67957282f%3A0x6519fd4b90f19a79!2sGorkhali%20Kitchen!5e0!3m2!1sen!2sus!4v1686702080740!5m2!1sen!2sus"
          width="600"
          height="450"
        ></iframe>
      </div>
    </div>
  );
};

export default Footer;
