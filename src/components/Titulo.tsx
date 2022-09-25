export default function Titulo(props) {
    return (
        <div className="flex flex-col justify-center">
            <h1 className="px-5 py-2 text-3xl rounded-t-md bg-gradient-to-r from-blue-700 to-purple-500 text-gray-50">
                {props.children}
            </h1>
            <hr className="border-2 border-purple-500" />
        </div>
    )
}