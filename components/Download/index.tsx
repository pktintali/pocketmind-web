import Image from "next/image";
import Link from "next/link";

const DownloadSection: React.FC = () => {
  return (
    <section className="flex flex-wrap items-center justify-center gap-0 md:hidden mb-24">
      <Link
        href="https://play.google.com/store/apps/details?id=com.tdevelopers.pocket_mind_app&ref=website"
        target="_blank"
      >
        <Image
          width={155}
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
          width={135}
          height={100}
          alt="Download on the app store"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Download_on_the_App_Store_Badge.svg/2560px-Download_on_the_App_Store_Badge.svg.png"
        />
      </Link>
    </section>
  );
};

export default DownloadSection;
