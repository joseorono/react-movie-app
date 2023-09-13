
import { Outlet } from "react-router-dom";

export default function Root() {
    return (
        <>
        <h1 className='mt-5'>GIPHY API Search Test</h1>
        <div id="Route">
            <Outlet />
        </div>
        </>
    );
}

