import Container from "../Component/Container"
import Logo from "../Component/Logo"
import Heading from "../Component/Heading"


export default function Home() {
    return <div className="bg-violet-300 h-[100vh]  ">
        <div className="flex h-[100%] w-[100%] flex-col  justify-center items-center">
            <div className="pb-3 w-[100%] flex items-center justify-around">
                <Heading title={"Task Board"} cssProps={"text-3xl font-medium"} />
                <Logo />
            </div>
            <Container />
        </div>

    </div>
}