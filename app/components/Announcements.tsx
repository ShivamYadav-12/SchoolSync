const Announcements = () =>
{
    return( 
    <div className="bg-white rounded-md p-4">
        <div className="flex justify-between items-center">
        <h1 className="text-lg font-semibold"> Announcements</h1>
        <span className="text-xs text-gray-400"> View All</span>
        </div>
        <div className="flex flex-col gap-4 mt-4">
        <div className="rounded-md bg-cyan-300 p-4">
        <div className="flex  justify-between items-center">
        <h2 className="font-semibold">Lorem ipsum dolor sit amet.</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-1-1</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat.</p>

        </div>
        <div className="rounded-md bg-purple-300 p-4">
        <div className="flex  justify-between items-center">
        <h2 className="font-semibold">Lorem ipsum dolor sit amet.</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-1-1</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat.</p>

        </div>
        <div className="rounded-md bg-yellow-200 p-4">
        <div className="flex  justify-between items-center">
        <h2 className="font-semibold">Lorem ipsum dolor sit amet.</h2>
        <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-1-1</span>
        </div>
        <p className="text-sm text-gray-400 mt-1">Lorem ipsum dolor sit amet consectetur adipisicing elit. A, repellat.</p>

        </div>
        </div>

    </div>
    )
}
export default Announcements;