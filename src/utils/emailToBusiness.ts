import emailjs from '@emailjs/browser'


export const sendToBusiness = async(businessParams: {}) => {

  const SERVICEID = process.env.REACT_APP_EMAILJS_SERVICEID || '';
  const TEMPLATEID = process.env.REACT_APP_EMAILJS_TEMPLATEID || '';
  const PUBLICKEY = process.env.REACT_APP_EMAILJS_PUBLICKEY || '';

  return emailjs.send(SERVICEID, TEMPLATEID, businessParams, PUBLICKEY);
}
