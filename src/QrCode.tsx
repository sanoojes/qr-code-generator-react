import { useState } from "react";
import QRCode from "react-qr-code";

const QrCode = () => {
    const [value, setValue] = useState(" ");
    const [qrCode, setQrCode] = useState<string>(
        "https://bit.ly/dont-dare-to-open"
    ); // default rickroll link

    function handleGeneration() {
        setQrCode(value);
    }
    return (
        <div className="flex p-5 gap-3 bg-slate-800 text-white flex-col items-center rounded-3xl border-4 border-gray-600">
            <h1 className="text-xl mb-2">Qr Code Generator</h1>

            <input
                type="text"
                className="px-4 py-2 bg-slate-500 placeholder-white rounded-2xl w-9/12"
                placeholder="Enter a text"
                onChange={(e) => {
                    setValue(e.target.value);
                }}
            />
            <button
                className="px-4 py-2 bg-slate-500 placeholder-white rounded-2xl w-9/12 text-bold"
                onClick={handleGeneration}
            >
                Generate
            </button>

            <div className="p-4 border-2 border-gray-500 rounded-2xl w-full flex justify-center gap-3 flex-col items-center">
                {qrCode && qrCode.trim() !== "" ? (
                    <div className="bg-white p-4 border-2 border-gray-500 rounded-lg">
                        <QRCode size={400} value={qrCode} />
                    </div>
                ) : (
                    <p className="flex justify-center bg-slate-500 px-4 py-2 rounded-2xl text-white">
                        Enter anything LOL !
                    </p>
                )}
                <h3 className="px-4 py-2 bg-slate-500 placeholder-white rounded-2xl w-9/12 text-bold flex justify-center">
                    Scan Me
                </h3>
            </div>
        </div>
    );
};

export default QrCode;
