import OtpGenerator from "otp-generator";

const generateOTP = () => {
  return OtpGenerator.generate(5, {
    lowerCaseAlphabets: false,
    specialChars: false,
    upperCaseAlphabets: false,
  });
};

export default generateOTP;
