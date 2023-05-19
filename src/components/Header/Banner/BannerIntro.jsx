function BannerIntro() {
    return (
        <>
            <div className=" text-white flex flex-col gap-2">
                <p className=" text-4xl font-bold">Hi, I am Miriam Vargas</p>
                <h2 className=" text-lg font-normal text-custom-gray">
                    Data Analysis
                </h2>
                <div className=" mt-6">
                    <button
                        type="button"
                        className=" px-7 py-3 bg-custom-purple"
                    >
                        Download CV
                    </button>
                    <button
                        type="button"
                        className=" px-7 py-3 border border-solid border-white"
                    >
                        Learn More
                    </button>
                </div>
            </div>
        </>
    );
}

export default BannerIntro;
