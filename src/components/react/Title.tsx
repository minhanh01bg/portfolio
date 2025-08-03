import { TypeAnimation } from "react-type-animation";

export default function WelcomeTitle() {
    return (
        <>
            <TypeAnimation
                sequence={["Minh Anh Vu"]}
                speed={20}
                wrapper="h1"
                className="text-white font-extrabold text-3xl sm:text-4xl font-poppins"
            />
        </>
    )
}