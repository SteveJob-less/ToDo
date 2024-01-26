import { useEffect } from "react";


const MainPage = () => {

    useEffect(() => {
        document.title = "To-Do";
    }, []);

    return (
        <h1>MAIN PAGE</h1>
    );
}

export default MainPage;