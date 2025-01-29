import React, {  } from 'react';
import { useLocation } from 'react-router-dom';
// Define types for the query parameters, if necessary
// interface QueryParams {
//   pid: string | null;
//   uid: string | null;
//   aid: string | null;
//   sid: string | null;
// }

const QueryParamsExample: React.FC = () => {
  // Use the useLocation hook to get the current location (including query params)
  const location = useLocation();

  // Use URLSearchParams to parse the query string
  const queryParams = new URLSearchParams(location.search);

  // Extract individual query parameters with proper type inference
  const pid = queryParams.get('pid');
  const uid = queryParams.get('uid');
  const aid = queryParams.get('aid');
  const sid = queryParams.get('sid');

  // Optionally, set default values if parameters are missing
  const displayPid = pid || 'NA';
  const displayUid = uid || 'NA';
  const displayAid = aid || 'NA';
  const displaySid = sid || 'NA';

    // Function to handle the redirect on button click
    const handleRedirect = async () => {
      // Construct the new query string for redirect (custom URL)
      // const newQueryParams = new URLSearchParams();
      // newQueryParams.set('pid', '23'); // Example of setting new query parameter
      // newQueryParams.set('uid', '123');
      // newQueryParams.set('aid', '456');
      // newQueryParams.set('sid', '789');
  
      // Redirect to the custom URL with the new query params
      if(displayPid != 'NA' && displayUid != 'NA' && displayAid != 'NA' && displaySid != 'NA'){
        //window.location.href = `https://singapore.decipherinc.com/survey/selfserve/66d/${displayPid}?session=${displaySid}&respid=${displayUid}&RID=${displayUid}`;
        //(`https://singapore.decipherinc.com/survey/selfserve/66d/${displayPid}?session=${displaySid}`);
        try {
          // Call your API here (replace with your actual API endpoint and necessary params)
          const response = await fetch('https://fapi.unimrktdsr.in/api_access?pid='+displayPid+'&uid='+displayUid+'&aid='+displayAid+'&sid='+displaySid, {
            method: 'GET', // or 'POST' depending on the API
            mode: 'no-cors',
            headers: {
              "Content-Type": "application/json",
              // 'Access-Control-Allow-Origin': '*'
              // Add any headers you need here
            },
          });
    
          
          if (response) {
            // const data = await response.json();
            // console.log(data);
            // Handle the response data if needed
            // Redirect after the API call if necessary
            window.location.href = `https://singapore.decipherinc.com/survey/selfserve/66d/${displayPid}?session=${displaySid}`;
          } else {
            console.error('API call failed');
          }
        } catch (error) {
          console.error('Error calling API:', error);
        }
      }
    };

  return (
    <div>
      <button onClick={handleRedirect} className="bg-blue-500">Submit Data</button>
      <p>Project code: <b>{displayPid}</b> Unique Code: <b>{displayUid}</b> Redirect No.: <b>{displayAid}</b> Session id: <b>{displaySid}</b></p>
      <br />
    </div>
  );
};

export default QueryParamsExample;