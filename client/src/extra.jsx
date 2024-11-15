import { useState } from "react";

const StudentList = () => {
    const [students, setStudents] = useState([]);
    const [loaded, setLoaded] = useState(false);
    const [dataVisible, setDataVisible] = useState(false);

    const loadStudents = async () => {
        if (!loaded) {
            try {
                const response = await fetch('http://localhost:5000/api/students');
                const data = await response.json();
                setStudents(data);
                setLoaded(true);
            } catch (error) {
                console.error("Error fetching students:", error);
            }
        }
        setDataVisible(!dataVisible); // Toggle data visibility
    };

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-4">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">
                Student List
            </h1>
            <button
                onClick={loadStudents}
                className={`px-6 py-2 rounded-lg font-semibold text-white ${
                    dataVisible
                        ? "bg-red-500 hover:bg-red-600"
                        : "bg-blue-500 hover:bg-blue-600"
                }`}
            >
                {dataVisible ? "Hide Students" : "Load Students"}
            </button>
            {dataVisible && students.length > 0 ? (
                <div className="mt-8 w-full max-w-4xl">
                    <table className="w-full table-auto bg-white rounded-lg shadow-lg overflow-hidden">
                        <thead className="bg-blue-500 text-white">
                            <tr>
                                <th className="px-4 py-2 text-left">#</th>
                                <th className="px-4 py-2 text-left">Name</th>
                                <th className="px-4 py-2 text-left">Roll Number</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student, index) => (
                                <tr
                                    key={index}
                                    className={`${
                                        index % 2 === 0
                                            ? "bg-gray-100"
                                            : "bg-white"
                                    }`}
                                >
                                    <td className="px-4 py-2">{index + 1}</td>
                                    <td className="px-4 py-2">{student.name}</td>
                                    <td className="px-4 py-2">{student.rollNo}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                loaded && dataVisible && (
                    <p className="mt-6 text-gray-600">
                        No students found. Please check your data source.
                    </p>
                )
            )}
        </div>
    );
};

export default StudentList;
