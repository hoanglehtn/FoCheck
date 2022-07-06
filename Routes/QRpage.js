
// npm install : npm install --save qr-scanner

// import QRScanner from 'qr-scanner';
import QrScanner from 'qr-scanner';


// generate a QR code reader for the user to scan and receive the information from the QR code
export default function QRpage() {
    const [result, setResult] = useState('');
    const [error, setError] = useState('');
    const [scanning, setScanning] = useState(false);
    
    useEffect(() => {
        const scanner = new QrScanner(document.getElementById('qr-scanner-container'), (err, data) => {
        if (err) {
            setError(err.message);
        } else {
            setResult(data);
        }
        });
        scanner.start();
        setScanning(true);
        return () => scanner.destroy();
    }, []);
    
    return (
        <div>
        <div id="qr-scanner-container" />
        {scanning ? <p>Scanning...</p> : <p>Scan a QR code to receive the information</p>}
        {error ? <p>Error: {error}</p> : null}
        {result ? <p>Result: {result}</p> : null}
        </div>
    );
    }


