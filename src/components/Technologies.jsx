import { FaNodeJs, FaPython, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { RiReactjsLine, RiVuejsLine } from "react-icons/ri";
import { SiExpress, SiMongodb, SiSailsdotjs, SiRabbitmq } from "react-icons/si";
import { TbBrandCpp } from "react-icons/tb";

const Technologies = () => {
    return (
        <div className="pb-24">
            <h2 className="my-20 text-center text-4xl">Technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div>
                    <RiReactjsLine className="text-5xl text-cyan-400"/>
                </div>
                <div className="p-4">
                    <RiVuejsLine className="text-5xl text-vue-color" />
                </div>
                <div className="p-4">
                    <SiMongodb className="text-5xl text-mongo-color"/>
                </div>
                <div className="p-4">
                    <FaNodeJs className="text-5xl text-green-500"/>
                </div>
                <div className="p-4">
                    <SiSailsdotjs className="text-5xl text-sails-color"/>
                </div>
                <div className="p-4">
                    <SiExpress className="text-5xl"/>
                </div>
                <div className="p-4">
                    <TbBrandCpp className="text-5xl text-cpp-color"/>
                </div>
                <div className="p-4">
                    <SiRabbitmq className="text-5xl text-rabbitmq-color"/>
                </div>
                <div className="p-4">
                    <FaPython className="text-5xl text-python-color"/>
                </div>
                <div className="p-4">
                    <FaHtml5 className="text-5xl text-html-color"/>
                </div>
                <div className="p-4">
                    <FaCss3Alt className="text-5xl text-css-color"/>
                </div>
            </div>
        </div>
    )
}
export default Technologies;