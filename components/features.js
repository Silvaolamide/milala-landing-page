import dynamic from "next/dynamic";



export default dynamic (() => Promise.resolve(MyApp), {ssr: false})