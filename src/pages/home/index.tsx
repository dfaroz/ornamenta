import { motion } from "framer-motion";
import Banner from "../../components/moleculs/banner";
import Blog from "../../components/moleculs/blog/blog";
import EmailUs from "../../components/moleculs/emailus";
import Galleries from "../../components/moleculs/galeries";
import InOutPlants from "../../components/moleculs/in-out-door-plants";
import Products from "../../components/moleculs/products";
import QAProduct from "../../components/moleculs/qaproducts";
import Testimmoni from "../../components/moleculs/testimoni/testimoni";
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