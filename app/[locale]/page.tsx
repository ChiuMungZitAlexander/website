import { useTranslations } from "next-intl";

import Swiper from "./swiper";

const Index = () => {
  const t = useTranslations("home");

  return (
    <div className="min-h-[100dvh] text-3xl">
      <div className="h-[600px]">
        <Swiper />
      </div>
    </div>
  );
};

export default Index;
