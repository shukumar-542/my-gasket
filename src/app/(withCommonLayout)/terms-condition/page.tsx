import React from 'react'
import img from "../../../assets/terms.png";
import Image from "next/image";

const TermsAndConditionPage = () => {
  return (
    <div>
      <div className="mt-8 relative ">
        <Image
          className="w-full h-[400px] object-cover"
          src={img}
          height={1200}
          width={1200}
          alt="img"
        />
        <div className="absolute inset-0 bg-black opacity-45"></div>
        <p className="absolute top-1/2 left-2/12 text-white text-[40px] uppercase font-semibold">
        Terms Of Condition
        </p>
      </div>
      <div className="container mx-auto ">
        <p className="text-2xl mt-10 font-semibold">Terms and Condition</p>
        <p className="text-xl mt-5 font-semibold">Introduction</p>
        <p className="mt-5">
          Welcome to iLera . These Terms and Conditions ("Terms") govern your
          use of our services provided through the App. By accessing or using
          the App, you agree to comply with and be bound by these Terms. If you
          do not agree with these Terms, you should not use the App. Services
        </p>
        <p className="mt-5">
          iLera allows users to book appointments with healthcare providers. We
          facilitate the booking process but are not responsible for the medical
          services provided by healthcare professionals. All medical services
          are provided by independent healthcare professionals.
        </p>

        <p className="text-xl font-semibold mt-5">User Responsibilities</p>
        <p className=" mt-5">
          <span className="font-semibold">1. Account Creation:</span> To use
          certain features of the App, you may need to create an account. You
          agree to provide accurate, current, and complete information during
          the registration process and to update such information to keep it
          accurate, current, and complete.
        </p>

        <p className=" mt-5">
          <span className="font-semibold">2.Confidentiality: </span>You are
          responsible for maintaining the confidentiality of your account
          information and password. You agree to notify us immediately of any
          unauthorized use of your account.
        </p>

        <p className=" mt-5">
          <span className="font-semibold">3.Use of Services: </span>You agree to
          use the App only for lawful purposes and in accordance with these
          Terms. You will not use the App in any way that could damage, disable,
          overburden, or impair the App or interfere with any other party's use
          of the App.
        </p>

        {/* Appointment and cancellation */}

        <p className="text-xl font-semibold mt-5">
          Appointments and Cancellations
        </p>
        <p className=" mt-5">
          <span className="font-semibold">1.Booking:</span> By booking an
          appointment through the App, you agree to provide accurate
          information. The healthcare provider has the right to accept or
          decline your appointment request.
        </p>

        <p className=" mt-5">
          <span className="font-semibold">2.Cancellations: </span>If you need to
          cancel an appointment, you must do so according to the cancellation
          policy of the healthcare provider. Failure to cancel within the
          stipulated time may result in a cancellation fee.
        </p>

        {/* Payments */}

        <p className="text-xl font-semibold mt-5">Payments</p>
        <p className=" mt-5">
          <span className="font-semibold">1.Fees:</span> Any fees for services
          provided through the App are set by the healthcare providers. The App
          may facilitate the payment process but is not responsible for the
          services provided.
        </p>

        <p className=" mt-5">
          <span className="font-semibold">2.Payment Information: </span>P You
          agree to provide valid payment information and authorize the App to
          charge your payment method for the services provided by the healthcare
          provider. Privacy Your use of the App is also gov
        </p>

        {/* Disclaimers and Limitation of Liability */}
        <p className="text-xl font-semibold mt-5">
          Disclaimers and Limitation of Liability
        </p>
        <p className=" mt-5">
          <span className="font-semibold">1.No Medical Advice:</span> The App
          does not provide medical advice. Any content accessed through the App
          is for informational purposes only and is not a substitute for
          professional medical advice, diagnosis, or treatment.
        </p>

        <p className=" mt-5">
          <span className="font-semibold">2.No Warranties: </span> The App is
          provided "as is" without warranties of any kind, either express or
          implied.
        </p>
        <p className=" mt-5">
          <span className="font-semibold">3.Limitation of Liability: </span>To
          the maximum extent permitted by law, [App Name] shall not be liable
          for any indirect, incidental, special, consequential, or punitive
          damages, or any loss of profits or revenues, whether incurred directly
          or indirectly, or any loss of data, use, goodwill, or other intangible
          losses, resulting from (i) your use or inability to use the App; (ii)
          any unauthorized access to or use of our servers and/or any personal
          information stored therein.
        </p>

        {/* Changes to Terms */}

        <p className="text-xl font-semibold mt-5">
        Changes to Terms
        </p>
        <p className=" my-5 ">
           We may update these Terms from time to time. If we make material changes, we will notify you by posting the updated Terms on the App or through other communications. Your continued use of the App after the changes become effective means you agree to the updated Terms.
        </p>
      </div>
    </div>
  )
}

export default TermsAndConditionPage