function NavigationBar() {
    return (
        <>
            <nav>
                <ul className="flex gap-x-5">
                    <li>
                        <a className="text-white font-normal" href="#">
                            About me
                        </a>
                    </li>
                    <li>
                        <a className="text-white font-normal" href="#">
                            Services
                        </a>
                    </li>
                    <li>
                        <a className="text-white font-normal" href="#">
                            Contact me
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    );
}

export default NavigationBar;
