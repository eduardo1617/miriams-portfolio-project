import NavigationHeader from "./Navigation/NavigationHeader.jsx";
import NavigationBar from "./Navigation/NavigationBar.jsx";
import BannerIntro from "./Banner/BannerIntro.jsx";

function HeaderComponent() {
    return (
        <>
            <div className=" flex flex-auto justify-between items-center">
                <NavigationHeader></NavigationHeader>
                <NavigationBar></NavigationBar>
            </div>
            <div className=" mt-80">
                <BannerIntro></BannerIntro>
            </div>
        </>
    );
}

export default HeaderComponent;
