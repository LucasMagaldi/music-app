import ClipLoader from "react-spinners/ClipLoader"

export function Loading() {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <ClipLoader color="green" size={150}/>
        </div>
    )
}