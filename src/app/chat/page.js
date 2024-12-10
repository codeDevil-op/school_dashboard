import UserProfile from "../../components/Dashboard/userProfile/userProfile"
import HeaderPrim from "../../components/Header/headerPrim"

const Page = ()=>{
    
    return(
        <>
        <section className="w-full">
            <div className="p-10 space-y-6">
           <div className="flex justify-between">
           <div className="w-[100%] md:w-[70%] ">
            <div>
            <HeaderPrim heading="Chat"/>
            </div>
            </div>
            <div className="hidden md:block">
            <UserProfile/>
            </div>
           </div>
           <div className="w-full bg-white rounded-2xl">
lorem1000
           </div>
           </div>
        </section>
        </>
    )
}

export default Page