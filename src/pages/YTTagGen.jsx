import React, { useState } from "react";
import Navbar from '../components/Navbar'

const YTTagGen = () => {
    return (
        <React.Fragment>
            <div className="bg-myBlack w-screen min-h-screen">
                <Navbar />
                <TagGenerator />
            </div>
        </React.Fragment>
    )
}

const TagGenerator = () => {
    const [subject, setSubject] = useState("");
    const [title, setTitle] = useState("");
    const [grade, setGrade] = useState("");
    const [tags, setTags] = useState("");
    const [charCount, setCharCount] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleCopy = () => {
        navigator.clipboard.writeText(tags);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    const generateTags = () => {
        const cleanSubject = subject.trim();
        const cleanTitle = title.trim();
        const cleanGrade = grade.trim();

        let tagsList = [
            "NEET 2026",
            `NEET ${cleanSubject}`,
            `NEET ${cleanSubject} Tamil`,
            `${cleanTitle} NEET`,
            `${cleanTitle} NEET 2026`,
            `${cleanTitle} chapter`,
            "NEET classes Tamil",
            "Tamil NEET coaching",
            "Tamil NEET batch",
            `NEET ${cleanSubject} ${cleanGrade}`,
            "JUSST Tamil",
            "JUSST Med Mission",
            "JUSST Med Mission 26",
            "White coat dream",
            `NEET ${cleanSubject} lecture`,
            "Tamil medium NEET",
            "Tamil NEET 2026",
            `${cleanSubject} Tamil`,
            "Tamil NEET batch",
            "Tamil NEET preparation",
            `NEET ${cleanSubject} Tamil`,
            "Tamil NEET tips",
            "NEET crash course Tamil",
            `NEET ${cleanGrade}th ${cleanSubject}`,
            `${cleanTitle} NEET ${cleanGrade}`,
            `${cleanSubject} NEET Tamil`,
            `${cleanSubject} ${cleanGrade} Tamil`,
            "Tamil NEET aspirants",
            `Tamil NEET ${cleanSubject} notes`,
            "NEET 2026 preparation",
            "Tamil NEET motivation",
            `NEET ${cleanGrade}th syllabus Tamil`,
            `NEET ${cleanSubject} test series`,
            `Tamil NEET ${cleanSubject} revision`,
            `NEET ${cleanSubject} previous year Tamil`,
            `NEET ${cleanGrade} Tamil video lecture`,
            "Tamil NEET 2026 plan",
            `Tamil NEET ${cleanSubject} mock test`,
            `JUSST ${cleanSubject} Tamil`,
            `Tamil NEET ${cleanSubject} crash course`,
            `Tamil NEET ${cleanSubject} PYQs`,
            `NEET ${cleanSubject} MCQ Tamil`,
            `Tamil NEET ${cleanSubject} concept`,
            `NEET ${cleanSubject} batch Tamil`,
            `NEET ${cleanSubject} Tamil medium`,
            "Tamil NEET 2026 strategy",
            `Tamil ${cleanSubject} NEET 2026`,
            `${cleanGrade}th ${cleanSubject} NEET`,
            `NEET ${cleanSubject} topic wise Tamil`,
        ];

        let tagsStr = tagsList.join(",");
        while (tagsStr.length > 500 && tagsList.length > 0) {
            tagsList.pop();
            tagsStr = tagsList.join(",");
        }

        setTags(tagsStr);
        setCharCount(tagsStr.length);
    };

    return (
        <div className="max-w-2xl mx-auto px-4 py-8">
            <h2 className="text-2xl font-bold text-center text-white mb-6">
                JUSST Med Mission '26 YouTube Tag Generator
            </h2>

            <div className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-300">
                        Subject
                    </label>
                    <input
                        type="text"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        placeholder="Biology, Physics, Chemistry"
                        className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">
                        Topic / Title
                    </label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Chapter or topic name"
                        className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-300">
                        Grade (11 or 12)
                    </label>
                    <input
                        type="text"
                        value={grade}
                        onChange={(e) => setGrade(e.target.value)}
                        placeholder="11 or 12"
                        className="mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                <button
                    onClick={generateTags}
                    className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
                >
                    Generate Tags
                </button>
            </div>

            {tags && (
                <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-200 mb-2">
                        Generated YouTube Tags:
                    </h4>
                    <div className="tag-cont w-full p-3 border rounded-md bg-gray-50 text-sm resize-none text-black font-medium">
                        {tags}
                    </div>
                    <p className="text-right text-sm text-gray-300 mt-1">
                        Character count: {charCount}/500
                    </p>
                    <button
                        onClick={handleCopy}
                        className="bg-green-600 text-white px-4 py-1 rounded-md hover:bg-green-700 transition"
                    >
                        {copied ? "Copied!" : "Copy Tags"}
                    </button>
                </div>
            )}
        </div>
    );
};

export default YTTagGen;
