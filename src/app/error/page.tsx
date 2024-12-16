import Header from '.././components/header'
export default function Error() {

    return (
        <>

            <Header>
                {/* Text Positioned Absolutely */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className="text-white text-2xl md:text-3xl font-semibold">
                        Home &gt; Menu
                    </p>
                </div>
            </Header>
            <div className="flex flex-col items-center justify-center space-y-7 w-screen h-screen">
                <h1 className="text-orange-500 text-4xl">
                    404
                </h1>
                <p className="text-lg">Oops! Looks Like Something Going Wrong</p>
                <p>Page cannot be found! We&apos;ll have it figured out in no time, meanwhile, check out these fresh ideas:</p>
                <button className="bg-orange-500 w-24 rounded-lg py-2 px-4">Go to Home</button>
            </div>
        </>
    )

}   