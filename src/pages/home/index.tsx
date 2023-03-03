import { motion } from "framer-motion";
import Banner from "../../components/banner";
import Blog from "../../components/blog";
import EmailUs from "../../components/emailus";
import Galleries from "../../components/galleries";
import InOutPlants from "../../components/in-out-door-plants";
import Products from "../../components/products";
import QAProduct from "../../components/qaproducts";
import Testimmoni from "../../components/testimoni";
import { SelectedPage } from "../../shared/types";

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  return (
    <section className="gap-10 py-12 w-full md:h-full md:pb-0">
      <motion.div
          className="flex flex-col mx-auto w-5/6 items-center justify-center md:flex md:h-5/6"
          onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        <Banner setSelectedPage={setSelectedPage} />
        <InOutPlants />
        <Products />
        <QAProduct />
        <Galleries />
        <Testimmoni />
        <EmailUs />
        <Blog />
      </motion.div>
    </section>
  )
}

export default Home