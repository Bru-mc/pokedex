import "./index.css";

export const Loading = () => {
    
    return(
        <div className="loadingContainer">
            <div className="pokeBallLoad">
                <div className="pokeBallBack">
                    <div className="pokeBallMiddleBall"></div>
                </div>
            </div>
            <h1 className="loadText">LOADING ...</h1>
        </div>
    );
}