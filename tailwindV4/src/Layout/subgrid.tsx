export default function SubgridComparison() {
    return (
        <div className="p-8 space-y-12 bg-gray-50">
            {/* WITHOUT SUBGRID - Misaligned */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-red-600">
                    ❌ WITHOUT SUBGRID (Broken Alignment)
                </h2>
                <div className="grid grid-cols-3 gap-4">
                    {/* Each card has its own independent grid */}
                    <div className="bg-white border-2 border-red-300 rounded-lg overflow-hidden">
                        <div className="bg-blue-100 p-4 border-b-2 border-blue-300">
                            <h3 className="font-bold">Title</h3>
                        </div>
                        <div className="bg-green-100 p-4 border-b-2 border-green-300">
                            <p>Short desc</p>
                        </div>
                        <div className="bg-purple-100 p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Click
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-red-300 rounded-lg overflow-hidden">
                        <div className="bg-blue-100 p-4 border-b-2 border-blue-300">
                            <h3 className="font-bold">Title</h3>
                        </div>
                        <div className="bg-green-100 p-4 border-b-2 border-green-300 h-40">
                            <p>
                                Very long description here with lots of text that makes
                                this section much taller than the others
                            </p>
                        </div>
                        <div className="bg-purple-100 p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Click
                            </button>
                        </div>
                    </div>

                    <div className="bg-white border-2 border-red-300 rounded-lg overflow-hidden">
                        <div className="bg-blue-100 p-4 border-b-2 border-blue-300">
                            <h3 className="font-bold">Title</h3>
                        </div>
                        <div className="bg-green-100 p-4 border-b-2 border-green-300">
                            <p>Medium description</p>
                        </div>
                        <div className="bg-purple-100 p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Click
                            </button>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-red-600 font-semibold">
                    👆 Notice: Buttons are at different heights! Each card is independent.
                </p>
            </div>

            {/* WITH SUBGRID - Perfectly Aligned */}
            <div>
                <h2 className="text-2xl font-bold mb-4 text-green-600">
                    ✅ WITH SUBGRID (Perfect Alignment)
                </h2>
                <div className="grid grid-cols-3 gap-4 grid-rows-[auto_1fr_auto]">
                    {/* Each card uses parent's rows */}
                    <div className="grid grid-rows-subgrid row-span-3 bg-white border-2 border-green-300 rounded-lg overflow-hidden">
                        <div className="bg-blue-100 p-4 border-b-2 border-blue-300">
                            <h3 className="font-bold">Title</h3>
                        </div>
                        <div className="bg-green-100 p-4 border-b-2 border-green-300">
                            <p>Short desc</p>
                        </div>
                        <div className="bg-purple-100 p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Click
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-rows-subgrid row-span-3 bg-white border-2 border-green-300 rounded-lg overflow-hidden">
                        <div className="bg-blue-100 p-4 border-b-2 border-blue-300">
                            <h3 className="font-bold">Title</h3>
                        </div>
                        <div className="bg-green-100 p-4 border-b-2 border-green-300">
                            <p>
                                Very long description here with lots of text that makes
                                this section much taller than the others
                            </p>
                        </div>
                        <div className="bg-purple-100 p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Click
                            </button>
                        </div>
                    </div>

                    <div className="grid grid-rows-subgrid row-span-3 bg-white border-2 border-green-300 rounded-lg overflow-hidden">
                        <div className="bg-blue-100 p-4 border-b-2 border-blue-300">
                            <h3 className="font-bold">Title</h3>
                        </div>
                        <div className="bg-green-100 p-4 border-b-2 border-green-300">
                            <p>Medium description</p>
                        </div>
                        <div className="bg-purple-100 p-4">
                            <button className="bg-blue-500 text-white px-4 py-2 rounded">
                                Click
                            </button>
                        </div>
                    </div>
                </div>
                <p className="mt-4 text-green-600 font-semibold">
                    👆 Perfect! All titles align, all buttons align. The middle content
                    expands but everything stays in sync.
                </p>
            </div>

            {/* Visual Legend */}
            <div className="bg-white p-6 rounded-lg border-2">
                <h3 className="font-bold mb-3">Color Code:</h3>
                <div className="space-y-2">
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-blue-100 border-2 border-blue-300"></div>
                        <span>Blue = Header (should align)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-green-100 border-2 border-green-300"></div>
                        <span>Green = Content (flexible height)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-purple-100 border-2 border-purple-300"></div>
                        <span>Purple = Footer/Button (should align)</span>
                    </div>
                </div>
            </div>
        </div>
    );
}