import HeaderPrim from "../../components/Header/headerPrim";
import FoodMenu from '../../components/Food/foodMenu'
const Page = () => {
  return (
    <>
      <section className="w-full">
        <div className="flex flex-col space-y-4 p-10">
          <div>
            <HeaderPrim heading="Food" />
          </div>
          <div>
            <FoodMenu/>
          </div>
        </div>
      </section>
    </>
  );
};

export default Page;
