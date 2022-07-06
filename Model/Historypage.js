

// The history page shows all the clicks that the user has clicked on Mainpage.js
// The history page is a list of all the clicks that the user has made.

function Historypage() {
    const [history, setHistory] = useState([]);

    useEffect(() => {
        setHistory(JSON.parse(localStorage.getItem('history')));
    }, []);

    return (
        <div>
            <h1>History</h1>
            <ul>
                {history.map((item, index) => {
                    return <li key={index}>{item}</li>
                }
                )}
            </ul>
        </div>
    );
}

// Redirect when user clicks on the product icon
function redirect() {
    var productIcon = document.getElementById("productIcon");
    productIcon.addEventListener("click", function() {
        window.location.href = "https://www.tiki.vn/search?q=";
    });
}