import { useEffect, useState } from 'react';
import FastSpeedtest from 'fast-speedtest-api';

export default function SpeedTest() {
    const [downloadSpeed, setDownloadSpeed] = useState(null);
    const [uploadSpeed, setUploadSpeed] = useState(null);

    useEffect(() => {
        const speedtest = new FastSpeedtest();

        speedtest.getSpeed().then(speeds => {
            setDownloadSpeed(speeds.downloadSpeed);
            setUploadSpeed(speeds.uploadSpeed);
        });
    }, []);

    return (
        <div>
            <h1>Internet Speed Test</h1>
            {downloadSpeed && <p>Download Speed: {downloadSpeed} Mbps</p>}
            {uploadSpeed && <p>Upload Speed: {uploadSpeed} Mbps</p>}
        </div>
    );
}