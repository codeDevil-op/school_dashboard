import React from "react";
import StudentTable from '../../components/Students/student';
import Header from '../../components/Header/headerSec'
const Page = ()=>{
    
return(
    <>
    <section className="w-full">
        <div className="flex flex-col space-y-4 p-10">
       <Header
       heading = 'Student'
       />
        {/* end  */}
        <div>
            <StudentTable/>
        </div>
        {/* end  */}
        </div>
    </section>
    </>
)
}

export default Page;