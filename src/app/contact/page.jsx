import ContactPage from "@/component/contact/contact";
import ContactMobile from "@/component/contact/contactMobile";

export default function Home() {
  return (
    <>
      {/* Desktop + Tablet */}
      <div className="hidden md:block">
        <ContactPage />
      </div>
      {/* Mobile Version */}
      <ContactMobile />
    </>

  );
}
