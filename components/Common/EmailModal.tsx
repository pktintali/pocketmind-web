import Image from "next/image";
import Link from "next/link";

interface EmailModalProps {
  visibility: boolean;
  handleClose: () => void;
}

const EmailModal: React.FC<EmailModalProps> = ({ visibility, handleClose }) => {
  if (!visibility) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="relative rounded-2xl bg-white p-10 pr-12 shadow-lg dark:bg-gray-800">
        <button
          className="absolute right-2 top-2 pr-1 text-gray-500 hover:text-gray-700 dark:text-gray-300 dark:hover:text-gray-100"
          onClick={handleClose}
        >
          ✕
        </button>
        <section className="mb-8 hidden justify-center py-2 pl-4 md:flex">
          <div className="w-full max-w-md rounded-lg bg-white p-4 shadow-md dark:bg-gray-800">
            <div className="flex justify-center py-12">
              <Image
                src="/images/qr/pm_qr.png"
                alt="QR Code"
                width={300}
                height={300}
              />
            </div>
          </div>
        </section>
        <section className="flex-wrap items-center justify-center gap-4 md:flex">
          <Link
            href="https://play.google.com/store/apps/details?id=com.tdevelopers.pocket_mind_app&ref=website"
            target="_blank"
          >
            <Image
              width={240}
              height={100}
              alt="Get it on Google Play"
              src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png"
            />
          </Link>
          <Link
            href="https://apps.apple.com/us/app/ai-flashcard-generator-pkmind/id6740739787?ref=website"
            target="_blank"
          >
            <Image
              width={200}
              height={100}
              alt="Download on the app store"
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
            />
          </Link>
        </section>
      </div>
    </div>
  );
};

export default EmailModal;
