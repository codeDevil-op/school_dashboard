
import Header from "../../components/Header/headerSec";
import Teacher from '../../components/Teachers/teachers'
const Page = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col space-y-4 p-10">
        <Header 
        heading="Teachers" 
        />
        <Teacher/>
      </div>
    </section>
  );
};

export default Page;
