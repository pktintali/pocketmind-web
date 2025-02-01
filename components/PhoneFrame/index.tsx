import React from "react";
import Image from "next/image";

interface PhoneFrameProps {
  screenshot: string;
  showNotch?: boolean;
}

const styles = {
  mobileFrame: (showNotch: boolean) =>
    `${
      showNotch ? "border-[0.45rem]" : "border-[0.4rem]"
    } border-gray-500 rounded-3xl shadow-lg overflow-hidden max-w-xs mx-auto relative h-144 w-72`,
  screenshot: "w-full h-auto",
  frameTop:
    "absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-gray-500 rounded-full flex items-center justify-center",
  cameraHole: "w-1 h-1 bg-black rounded-full",
};

const PhoneFrame: React.FC<PhoneFrameProps> = ({
  screenshot,
  showNotch = true,
}) => {
  return (
    <div className={styles.mobileFrame(showNotch)}>
      {showNotch && (
        <div className={styles.frameTop}>
          <div className={styles.cameraHole}></div>
        </div>
      )}
      <Image
        src={screenshot}
        alt="Mobile Screenshot"
        className={styles.screenshot}
        layout="responsive"
        width={500}
        height={1000}
      />
    </div>
  );
};

export default PhoneFrame;
