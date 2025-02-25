import React from "react";

const PrivacyPolicy = () => {
  return (
    <div
      className="privacy-policy-container"
      style={{ padding: "20px", maxWidth: "800px", margin: "0 auto" }}
    >
      <h1 style={{ fontSize: "2rem", textAlign: "center" }}>Privacy Policy</h1>
      <p style={{ fontSize: "1rem", lineHeight: "1.6" }} className="mt-24">
        At PocketMind, we’re committed to making learning smarter, faster, and
        fun while keeping your privacy front and center. This Privacy Policy
        explains how we collect, use, and protect your information when you use
        our app. By using PocketMind, you agree to the practices we describe
        here.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>
        What Information We Collect
      </h2>
      <p>
        We want to give you the best learning experience possible, so we collect
        some info to make that happen:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          <strong>Email Address:</strong> When you sign up using your social
          account we collect your email associated with your social account so
          we can create your account and keep you updated on your learning
          journey.
        </li>
        <li>
          <strong>Name:</strong> When you sign up using your social account we
          collect your name associated with your social account so we can you
          more personalized user experience.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>
        How We Use Your Information
      </h2>
      <p>
        We’re all about accelerating your learning, and here’s how we use your
        data to do that:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          To generate those beautiful, interactive AI flashcards and gamified
          learning experiences tailored just for you.
        </li>
        <li>
          To let you download flashcards and learn offline—your education
          shouldn’t stop when your Wi-Fi does!
        </li>
        <li>
          To send you updates, tips, or news about PocketMind (don’t worry, we
          won’t spam you, and you can opt out anytime).
        </li>
        <li>
          To improve PocketMind by analyzing how you and others use it—think
          better bots and flashcard designs.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>
        Sharing Your Information
      </h2>
      <p>
        We don’t sell your data—learning is our mission, not data peddling. We
        only share your info when necessary:
      </p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          With trusted service providers who help us run the app (e.g., cloud
          storage for offline downloads or email services). They’re bound to
          keep your data safe too.
        </li>
        <li>
          If required by law—like if a court says we have to—we’ll comply but
          only to the extent we’re obligated.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>
        Offline Learning
      </h2>
      <p>
        Love learning on the go? When you download flashcards for offline use,
        they’re stored securely on your device. We don’t access them unless
        you’re back online and interacting with the app again.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>
        Deleting Your Account and Data
      </h2>
      <p>You’re in control of your learning—and your data:</p>
      <ul style={{ listStyleType: "disc", paddingLeft: "20px" }}>
        <li>
          There is option within the app to delete your account and any data
          associated with app.
        </li>
        <li>
          If you can't access app and need to delete your account or data? Email
          us at tdeveloperindia@gmail.com, and we’ll delete it on your request.
        </li>
      </ul>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>
        Keeping Your Data Safe
      </h2>
      <p>
        We use strong security measures—like encryption and secure servers—to
        protect your info from prying eyes. But no system is 100% foolproof, so
        we’re always working to stay ahead of risks.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>
        Changes to This Policy
      </h2>
      <p>
        As PocketMind grows (think more bots and cooler flashcards!), we might
        update this policy. If we do, we’ll let you know via email or a notice
        in the app. Check back here anytime for the latest version.
      </p>

      <h2 style={{ fontSize: "1.5rem", marginTop: "20px" }}>Contact Us</h2>
      <p>
        Got questions about your privacy or how PocketMind works? Reach out to
        us at support@pocketmind.com. We’re here to help you learn—and keep your
        info safe.
      </p>

      <p style={{ fontSize: "0.9rem", marginTop: "20px", textAlign: "center" }}>
        Last Updated: February 25, 2025
      </p>
    </div>
  );
};

export default PrivacyPolicy;
