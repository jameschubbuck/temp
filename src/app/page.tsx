import { Header } from "@/components/header";
import HomePage from "@/components/home-page";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";

export default function Home() {
  return (
    <div>
      <Header />
      <div style={{ margin: "50px", marginBottom: "200px" }}>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}
