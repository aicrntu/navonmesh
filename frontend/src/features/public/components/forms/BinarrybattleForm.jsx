import { useState } from "react";
import {
    User,
    Mail,
    Phone,
    MapPin,
    Building,
    GraduationCap,
    Calendar,
    Github,
    Code,
    FileText,
    CreditCard,
    Camera,
} from "lucide-react";
import { binaryBattleForm } from "../../../../api/binarrybattle.api";

const BinarryBattleForm = () => {
    const initialState = {
        name: "",
        email: "",
        number: "",
        state: "",
        pincode: "",
        whoAreYou: "",
        institute: "",
        year: "",
        degree: "",
        githubLink: "",
        technologies: "",
        project: null,

        paymentScreenshot: null,
        participants: [{ name: "", phone: "" }, { name: "", phone: "" }],
    };

    const [formData, setFormData] = useState(initialState);
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: files ? files[0] : value,
        }));
    };



    const handleParticipantChange = (index, field, value) => {
        const updatedParticipants = [...formData.participants];
        updatedParticipants[index][field] = value;
        setFormData({ ...formData, participants: updatedParticipants });
    };

    const addParticipant = () => {
        if (formData.participants.length < 4) {
            setFormData({
                ...formData,
                participants: [...formData.participants, { name: "", phone: "" }],
            });
        }
    };

    const removeParticipant = (index) => {
        if (formData.participants.length > 2) {
            const updatedParticipants = formData.participants.filter((_, i) => i !== index);
            setFormData({ ...formData, participants: updatedParticipants });
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const payload = new FormData();
            Object.entries(formData).forEach(([key, value]) => {
                if (key === 'participants') {
                    payload.append(key, JSON.stringify(value));
                } else {
                    payload.append(key, value);
                }
            });

            await binaryBattleForm(payload);
            alert("Binary Battle registration successful 🎉");

            setFormData(initialState);
            e.target.reset();
        } catch (err) {
            alert("Something went wrong ❌");
        } finally {
            setLoading(false);
        }
    };

    const inputClass =
        "w-full pl-10 pr-4 py-3 bg-white border border-gray-200 rounded-xl focus:ring-2 focus:ring-[#008fad] focus:border-transparent transition-all outline-none text-gray-700";

    const iconClass =
        "absolute left-3 top-1/2 -translate-y-1/2 text-[#008fad] w-5 h-5 opacity-70";

    const labelClass =
        "block text-sm font-semibold text-gray-600 mb-2 ml-1";

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4 py-20">
            <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">

                {/* HEADER */}
                <div className="bg-[#008fad] p-8 text-center text-white">
                    <h2 className="text-3xl font-extrabold tracking-tight">
                        Binary Battle
                    </h2>
                    {/* <p className="mt-2 text-white/80">
                        Showcase your coding skills & innovation
                    </p> */}
                </div>

                <form onSubmit={handleSubmit} className="p-8 md:p-12 space-y-10">

                    {/* PERSONAL DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <User className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Participant Details
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <User className={iconClass} />
                                <input
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Mail className={iconClass} />
                                <input
                                    name="email"
                                    type="email"
                                    placeholder="Email Address"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Phone className={iconClass} />
                                <input
                                    name="number"
                                    placeholder="Mobile Number"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <MapPin className={iconClass} />
                                <input
                                    name="state"
                                    placeholder="State"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <MapPin className={iconClass} />
                                <input
                                    name="pincode"
                                    placeholder="Pincode"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Building className={iconClass} />
                                <select
                                    name="whoAreYou"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                >
                                    <option value="">You are a...</option>
                                    <option value="UG Student">UG Student</option>
                                    <option value="PG Student">PG Student</option>
                                </select>
                            </div>
                        </div>
                    </section>

                    {/* TEAM DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <User className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Team Details
                            </h3>
                        </div>

                        <div className="space-y-4">
                            <h4 className="font-semibold text-gray-700">Participating Members (Min 2, Max 4)</h4>
                            {formData.participants.map((participant, index) => (
                                <div key={index} className="flex gap-4 items-center">
                                    <input
                                        placeholder={`Member ${index + 1} Name`}
                                        value={participant.name}
                                        onChange={(e) => handleParticipantChange(index, "name", e.target.value)}
                                        required
                                        className={inputClass}
                                    />
                                    <input
                                        placeholder={`Member ${index + 1} Mobile`}
                                        value={participant.phone}
                                        onChange={(e) => handleParticipantChange(index, "phone", e.target.value)}
                                        required
                                        className={inputClass}
                                    />
                                    {formData.participants.length > 2 && (
                                        <button
                                            type="button"
                                            onClick={() => removeParticipant(index)}
                                            className="text-red-500 font-bold hover:text-red-700"
                                        >
                                            X
                                        </button>
                                    )}
                                </div>
                            ))}
                            {formData.participants.length < 4 && (
                                <button
                                    type="button"
                                    onClick={addParticipant}
                                    className="text-[#008fad] font-bold hover:underline"
                                >
                                    + Add Participant
                                </button>
                            )}
                        </div>
                    </section>

                    {/* ACADEMIC DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <GraduationCap className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Academic Details
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <Building className={iconClass} />
                                <input
                                    name="institute"
                                    placeholder="Institute / University Name"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Calendar className={iconClass} />
                                <input
                                    name="year"
                                    placeholder="Year"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative md:col-span-2">
                                <GraduationCap className={iconClass} />
                                <input
                                    name="degree"
                                    placeholder="Degree"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </section>

                    {/* PROJECT DETAILS */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <Code className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Project Details
                            </h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="relative">
                                <Github className={iconClass} />
                                <input
                                    name="githubLink"
                                    placeholder="GitHub Repository Link"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>

                            <div className="relative">
                                <Code className={iconClass} />
                                <input
                                    name="technologies"
                                    placeholder="Technologies Used"
                                    required
                                    onChange={handleChange}
                                    className={inputClass}
                                />
                            </div>
                        </div>
                    </section>

                    {/* FILE UPLOAD */}
                    <section>
                        <div className="flex items-center gap-2 mb-6 border-b pb-2">
                            <FileText className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">
                                Project Submission
                            </h3>
                        </div>

                        <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed hover:border-[#008fad] transition">
                            <label className={labelClass}>
                                Upload Project File (ZIP/PDF/DOC) *
                            </label>

                            <div className="flex items-center gap-4">
                                <FileText className="w-8 h-8 text-[#008fad] opacity-60" />
                                <input
                                    type="file"
                                    name="project"
                                    accept=".zip,.rar,.pdf,.doc,.docx"
                                    required
                                    onChange={handleChange}
                                    className="block w-full text-sm text-gray-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-[#008fad] file:text-white
                    hover:opacity-90 cursor-pointer"
                                />
                            </div>
                        </div>
                    </section>

                    {/* PAYMENT DETAILS */}
                    < section >
                        <div className="flex items-center gap-2 mb-6 border-b border-gray-100 pb-2">
                            <CreditCard className="w-5 h-5 text-[#008fad]" />
                            <h3 className="text-lg font-bold text-gray-800">Payment Details</h3>
                        </div>
                        <div className="space-y-6">
                            <div className="bg-teal-50 p-6 rounded-2xl border border-teal-100 flex flex-col md:flex-row items-center gap-6">
                                <div className="flex-1">
                                    <h4 className="text-xl font-bold text-gray-800 mb-2">Registration Fee: ₹ 500.00 Per Team</h4>
                                    <p className="text-gray-600 text-sm mb-4">Scan the QR code to pay the registration fee and upload the screenshot below for verification.</p>
                                    <p className="text-gray-600 text-sm italic">While making payment, please mention the following in the Note section: <span className="font-bold">Navonmesh: Your Track : Your Name</span></p>
                                </div>
                                <div className="w-40 h-40 bg-white p-2 rounded-xl shadow-sm border border-gray-100">
                                    <img src="/compitition/scanner-upi.jpeg" alt="UPI Scanner" className="w-full h-full object-contain" />
                                </div>
                            </div>

                            <div className="bg-gray-50 p-6 rounded-2xl border-2 border-dashed border-gray-200 hover:border-[#008fad] transition-colors">
                                <label className={labelClass}>Upload Payment Screenshot *</label>
                                <p className="text-xs text-gray-500 mb-2">UPI Transaction ID No(Gpay), UPI Refrence No.(paytm), UTR No(phone pay) , UPI TXN Id (Cred) / UPI ID : A 12 Digit no. Unique for your Transaction has to be visible on the screenshot Uploaded. Only then the payment will be considered valid.</p>
                                <div className="flex items-center gap-4">
                                    <Camera className="text-[#008fad] w-8 h-8 opacity-60" />
                                    <input
                                        name="paymentScreenshot"
                                        type="file"
                                        accept="image/*"
                                        onChange={handleChange}
                                        required
                                        className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-[#008fad] file:text-white hover:opacity-90 transition-all cursor-pointer"
                                    />
                                </div>
                            </div>
                        </div>
                    </section >

                    {/* SUBMIT */}
                    < button
                        type="submit"
                        disabled={loading}
                        className="w-full bg-[#008fad] text-white py-4 rounded-2xl font-bold text-lg shadow-lg shadow-teal-100 hover:-translate-y-0.5 transition disabled:opacity-50"
                    >
                        {loading ? "Submitting..." : "Register for Binary Battle"}
                    </button >

                </form >
            </div >
        </div >
    );
};

export default BinarryBattleForm;
