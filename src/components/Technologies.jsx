import { BiLogoPostgresql, BiLogoSpringBoot } from "react-icons/bi"
import { FaNodeJs } from "react-icons/fa"
import { RiReactjsLine } from "react-icons/ri"
import { TbBrandNextjs } from "react-icons/tb"

const Technologies = () => {
  return (
    <div className="pb-24">
        <h2 className="my-20 text-center text-4xl">Technologies</h2>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div>
                <RiReactjsLine className="text-7xl text-cyan-400"/>
            </div>
            <div className="p-4">
                <TbBrandNextjs className="text-7xl"/>
            </div>
            <div className="p-4">
                <BiLogoSpringBoot className="text-7xl text-green-700"/>
            </div>
            <div className="p-4">
                <FaNodeJs className="text-7xl text-green-500"/>
            </div>
            <div className="p-4">
                <BiLogoPostgresql className="text-7xl text-sky-700"/>
            </div>
        </div>
    </div>
  )
}

export default Technologies