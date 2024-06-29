"use client";

import React from 'react';
import { FiDownload } from 'react-icons/fi';
import {Button} from "@/components/ui/button";

const pdfUrl = '/assets/CV-Youri.pdf';

const DownloadButton= () => {
	const handleDownload = () => {
		const anchor = document.createElement('a');
		anchor.href = pdfUrl;
		anchor.download = 'CV-Youri.pdf'; // Specify the file name for the download
		anchor.click();
	};

	return (
		<Button
			variant="outline"
			size="lg"
			className="uppercase flex items-center gap-2"
			onClick={handleDownload}
		>
			<span>Download CV</span>
			<FiDownload className="text-xl" />
		</Button>
	);
};

export default DownloadButton;
